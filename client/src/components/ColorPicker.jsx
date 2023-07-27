import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#FF0000", // Red
          "#FF8C00", // Dark Orange
          "#FFCC00", // Gold
          "#FFFF00", // Yellow
          "#00FF00", // Lime
          "#00FFFF", // Cyan
          "#0000FF", // Blue
          "#8A2BE2", // Blue Violet
          "#800080", // Purple
          "#FF1493", // Deep Pink
          "#FF69B4", // Hot Pink
          "#FFB6C1", // Light Pink
          "#FFD700", // Gold (Metallic)
          "#A52A2A", // Brown
          "#808080", // Gray
          "#CCC", // White
          "#FFFFFF", // White
          "#000000", // Black
          "#008000", // Green
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
