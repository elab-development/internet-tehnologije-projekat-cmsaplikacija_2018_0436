import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/dragTypes";

const DraggableComponent = ({ type, children }) => {
  const [, drag] = useDrag({
    type: ItemTypes.COMPONENT,
    item: { type },
  });

  return (
    <div ref={drag} style={{ marginBottom: "10px", cursor: "grab" }}>
      {children}
    </div>
  );
};

export default DraggableComponent;
