import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "react";
import { ItemsPanel } from "../../../../../../bpl-tools/Components";
import Item from "../Panel/Item";

const General = ({ attributes, setAttributes, premiumProps, setCurrentScene }) => {
  const { scenes } = attributes;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    scenes[activeIndex] && setCurrentScene(scenes[activeIndex])
  }, [ activeIndex])

  return (
      <PanelBody className="bPlPanelBody" title={__("Tours", "panorama")}>
        <ItemsPanel   
          {...{ attributes, setAttributes, premiumProps, activeIndex, setActiveIndex }}
          arrKey="scenes"
          newItem={{
            "tour_id": "circle",
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "",
            "hotSpots": [
              {
                "pitch": -2.1,
                "yaw": 132.9,
                "type": "scene",
                "text": "Spring House or Dairy",
                "sceneId": "house"
              }
            ]
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
