import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";

import Item from "../Panel/Item";
import { ItemsPanel } from "../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes, premiumProps, setCurrentScene }) => {
  const { scenes } = attributes;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    scenes[activeIndex] && setCurrentScene(scenes[activeIndex])
  }, [ activeIndex])

  const getNextSceneId = () => {
    if (!scenes || scenes.length === 0) return 'scene_1';
    const maxId = scenes.reduce((max, scene) => {
        const id = parseInt(scene.tour_id.split('_')[1]);
        return id > max ? id : max;
    }, 0);
    return `scene_${maxId + 1}`;
};

  return (
      <PanelBody className="bPlPanelBody" title={__("Tours", "panorama")}>
        <ItemsPanel   
          {...{ attributes, setAttributes, premiumProps, activeIndex, setActiveIndex }}
          arrKey="scenes"
          newItem={{
            "tour_id": getNextSceneId(),
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "",
            "hotSpots": []
          }}
          ItemSettings={Item}
          itemLabel="Scene"
          title="tour_id"
          design="sortable"
        />
      </PanelBody>
  );
};

export default General;
