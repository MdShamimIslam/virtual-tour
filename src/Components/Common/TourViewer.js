import React, { useState, useEffect, useRef } from 'react';
import { addTempHotspot, createModifiedHotspots, handleMouseDownEvent, handleMouseUpEvent, initializePannellumViewer, saveHotspot } from '../../utils/functions';
import PopupWrapper from './PopupWrapper';

const TourViewer = ({ attributes, setAttributes, isBackend = false, currentScene, setCurrentScene }) => {
    const { scenes } = attributes;
    const { hotSpots: hotspotData = [] } = currentScene || {};
    const panoRef = useRef(null);
    const [tempHotspot, setTempHotspot] = useState(null);
    const [popupData, setPopupData] = useState(null);
    const [isDraggingHotspot, setIsDraggingHotspot] = useState(false);
    const viewerRef = useRef(null);
    const clickStartCoords = useRef(null);
    const isDraggingRef = useRef(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (currentScene && viewerRef.current) {
            viewerRef.current.loadScene(currentScene.tour_id);
        }
        if(currentScene){
            setLoaded(true);
        }
    }, [currentScene])

    useEffect(() => {
        if (!window.pannellum || !panoRef.current) return;

        const prevViewer = panoRef.current.viewerInstance;
        let currentPitch = 0;
        let currentYaw = 0;
        let currentHfov = 100;

        if (prevViewer) {
            currentPitch = prevViewer.getPitch();
            currentYaw = prevViewer.getYaw();
            currentHfov = prevViewer.getHfov();
            prevViewer.destroy();
        }

        const modifiedScenes = {};

        scenes.map((scene) => {
            modifiedScenes[scene.tour_id] = {
                ...scene,
                hotSpots: scene.hotSpots.map((spot, index) =>
                    createModifiedHotspots(scenes, currentScene, spot, isBackend, index, setPopupData, setAttributes)
                )
            };
        });

        const viewer = initializePannellumViewer(panoRef, modifiedScenes);
        window.viewer = viewer;

        viewer.on('scenechange', (sceneId) => {
            setCurrentScene(scenes.find((scene) => scene.tour_id === sceneId))
        })
        
        viewerRef.current = viewer;
        if (currentScene && viewerRef.current) {
            viewerRef.current.loadScene(currentScene.tour_id);
        }
        viewer.lookAt(currentPitch, currentYaw, currentHfov);
        panoRef.current.viewerInstance = viewer;

        if (tempHotspot) {
            addTempHotspot(viewerRef.current, tempHotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot);
        }

        viewer.on("mousedown", (event) => {
            handleMouseDownEvent(event, popupData, isDraggingHotspot, clickStartCoords);
        });

        viewer.on("mouseup", (event) => {
            handleMouseUpEvent(event, viewer, clickStartCoords, popupData, isDraggingHotspot, setTempHotspot);
        });

        return () => {
            if (viewer) viewer.destroy();
        };
    }, [scenes, loaded]);

    useEffect(() => {
        if (isBackend && tempHotspot && viewerRef.current) {
            addTempHotspot(viewerRef.current, tempHotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot);
        }
    }, [tempHotspot]);

    const handleSaveHotspot = () => {
        saveHotspot(popupData, scenes, currentScene, setAttributes, setPopupData, setTempHotspot);
    };

    return (
        <div className='tourViewerWrapper' >
            <div className='tourViewer' ref={panoRef} />
            {popupData && isBackend && <PopupWrapper {...{ scenes, setAttributes, currentScene, hotspotData, popupData, setPopupData, isDropdownOpen, setIsDropdownOpen, setTempHotspot, handleSaveHotspot }} />}
        </div>
    );
};

export default TourViewer;
