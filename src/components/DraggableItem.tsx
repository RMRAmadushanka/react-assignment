import { useRef } from "react";
import { useDrag } from "react-dnd";
const ITEM_TYPE = "TABLE";
interface DraggableItemProps {
  id: string;
  imgSrc: string;
  x: number;
  y: number;
  uniqueId: string;
  rotation: number;
  moveItem: (uniqueId: string, x: number, y: number) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  imgSrc,
  x,
  y,
  uniqueId,
  rotation,
  moveItem,
}) => {
  const [, drag, dragPreview] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id, uniqueId, isNew: false },
  }));

  const ref = useRef<HTMLDivElement>(null);

  dragPreview(drag(ref));

  return (
    <div
      ref={ref}
      className="absolute w-24 h-24 flex items-center justify-center  border rounded shadow-md mt-10"
      style={{ left: x, top: y, transform: `rotate(${rotation}deg)` }}
    >
      <img src={imgSrc} alt={`Table ${id}`} className="w-20 h-20" />
    </div>
  );
};

export default DraggableItem;