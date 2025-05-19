import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

export const createModifiedHotspots = (scenes, currentScene, spot, isBackend, index, setPopupData, setAttributes) => ({
  ...spot,
  createTooltipFunc: (hotSpotDiv) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'hotspot-title-tooltip';
    tooltip.innerHTML = spot.text || (spot.type === 'scene' ? 'Scene' : 'Info');
    // tooltip.innerHTML = currentScene?.tour_id;
    hotSpotDiv.appendChild(tooltip);
    hotSpotDiv.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });
    hotSpotDiv.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
     isBackend && editAndDeleteTooltipFunc(scenes,currentScene,hotSpotDiv, spot, index, setPopupData, setAttributes);
  },
  clickHandlerFunc: () => {
      if (spot.type === 'scene' && spot.lookAt) {
          window?.viewer.lookAt(spot.lookAt.pitch, spot.lookAt.yaw);
      } else {
          window?.viewer.lookAt(spot.pitch, spot.yaw);
      }
  },
});

export const initializePannellumViewer = (panoRef, modifiedScenes) => {
 const viewer =  window.pannellum.viewer(panoRef.current, {
      autoLoad: true,
      "default": {
          "firstScene": Object.keys(modifiedScenes)[0],
          "author": "bPlugins"
      },
      scenes: modifiedScenes,
  });

  return viewer;
};

export const saveHotspot = (popupData, scenes, currentScene, setAttributes, setPopupData, setTempHotspot) => {
  if (!popupData.type) return;
  
  const newHotspot = {
      pitch: popupData.pitch,
      yaw: popupData.yaw,
      sceneId: popupData.sceneId,
      text: popupData.text,
      type: popupData.type,
      ...(popupData.type === 'scene' && popupData.targetHotspot && {
          lookAt: {
              pitch: popupData.targetHotspot.pitch,
              yaw: popupData.targetHotspot.yaw,
          },
          targetPitch: popupData.targetHotspot.pitch,
          targetYaw: popupData.targetHotspot.yaw,
      })
  };


  const newScenes = produce(scenes, (draft) => {
      draft.map((scene) => {
         if(scene.tour_id === currentScene.tour_id){
              scene.hotSpots?.push(newHotspot);
         }
      })
  })
  setAttributes({ scenes: newScenes });
  setPopupData(null);
  setTempHotspot(null);
};

export const addTempHotspot = (viewer, hotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot) => {
  viewer.removeHotSpot("temp-hotspot");

  viewer.addHotSpot({
      id: "temp-hotspot",
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      type: "custom",
      cssClass: "add-hotspot-icon",
      createTooltipFunc: (hotSpotDiv) => {
          hotSpotDiv.innerHTML = "+";
          hotSpotDiv.style.cursor = "move";

          let startX, startY;
          let startPitch, startYaw;

          const handleMouseDown = (e) => {
              e.stopPropagation();
              isDraggingRef.current = false;
              startX = e.clientX;
              startY = e.clientY;
              startPitch = hotspot.pitch;
              startYaw = hotspot.yaw;
              setIsDraggingHotspot(false);
          };

          const handleMouseMove = (e) => {
              const dx = Math.abs(e.clientX - startX);
              const dy = Math.abs(e.clientY - startY);

              if (dx > 5 || dy > 5) {
                  isDraggingRef.current = true;
                  setIsDraggingHotspot(true);

                  const sensitivity = 0.3;
                  const moveX = (e.clientX - startX) * sensitivity;
                  const moveY = (startY - e.clientY) * sensitivity;

                  const newPitch = Math.max(-90, Math.min(90, startPitch + moveY));
                  const newYaw = (startYaw + moveX) % 360;

                  setTempHotspot({ pitch: newPitch, yaw: newYaw });
              }
          };

          const handleMouseUp = () => {
              if (!isDraggingRef.current) {
                  setPopupData({
                      pitch: hotspot.pitch,
                      yaw: hotspot.yaw,
                      text: "",
                  });
              }
              isDraggingRef.current = false;
              setIsDraggingHotspot(false);
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
          };

          hotSpotDiv.addEventListener("mousedown", (e) => {
              handleMouseDown(e);
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
          });
      },
      clickHandlerFunc: (event) => {
          event.stopPropagation();
      },
  });
};

export const editAndDeleteTooltipFunc = (scenes,currentScene,hotSpotDiv, spot, index, setPopupData, setAttributes) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'hotspot-tooltip';
  
  const actionButtons = document.createElement('div');
  actionButtons.className = 'action-buttons';
  
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerHTML = '📝';
  
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '❌';
  
  actionButtons.appendChild(editBtn);
  actionButtons.appendChild(deleteBtn);
  wrapper.appendChild(actionButtons);
  
  editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setPopupData({
          pitch: spot.pitch,
          yaw: spot.yaw,
          text: spot.text,
          type: spot.type,
          targetHotspot: spot.lookAt
      });
  });
  
  deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();

    if (hotSpotDiv && hotSpotDiv.parentNode) {
        hotSpotDiv.parentNode.removeChild(hotSpotDiv);
    }

    const updatedScenes = produce(scenes, (draft) => {
        draft.map((scene) => {
            if (scene?.tour_id === currentScene?.tour_id) {
                scene.hotSpots = scene.hotSpots.filter((_, i) => i !== index);
            }
        });
    });

    setAttributes({ scenes: updatedScenes });
  });

  hotSpotDiv.appendChild(wrapper);
};

export const handleMouseDownEvent = (event, popupData, isDraggingHotspot, clickStartCoords) => {
  if (popupData || isDraggingHotspot) return;

  clickStartCoords.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
  };
};

export const handleMouseUpEvent = (event, viewer, clickStartCoords, popupData, isDraggingHotspot, setTempHotspot) => {
  if (!clickStartCoords.current || popupData || isDraggingHotspot) return;

  const isClick =
      Math.abs(event.clientX - clickStartCoords.current.x) < 5 &&
      Math.abs(event.clientY - clickStartCoords.current.y) < 5 &&
      Date.now() - clickStartCoords.current.time < 200;

  if (isClick) {
      const coords = viewer.mouseEventToCoords(event);
      setTempHotspot({
          pitch: coords[0],
          yaw: coords[1],
      });
  }

  clickStartCoords.current = null;
};