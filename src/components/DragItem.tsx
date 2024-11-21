import React from "react";
import { useDrag } from "react-dnd";

const ITEM_TYPE = "TABLE";

const DragItem: React.FC<{ id: string; imgSrc: string }> = ({ id, imgSrc }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id, imgSrc, isNew: true, blocked: false },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`${
        isDragging ? "opacity-50" : "opacity-100"
      } cursor-all-scroll relative w-24 h-24 bg-white border-2 border-transparent rounded-lg flex items-center justify-center hover:bg-red-100 hover:border-red-400 hover:border-dashed`}
    >
      <div className="absolute w-20 h-20 hover:bg-red-100 rounded-md flex items-center justify-center">
        <img src={imgSrc} alt={`Table ${id}`} className="absolute w-20 h-20" />
      </div>
    </div>
  );
};

export default DragItem;
