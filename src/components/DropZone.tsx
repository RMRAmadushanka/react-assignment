import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, deleteItem, setSelectedItem } from "../redux/droppedItemsSlice";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";
import Ellipse from "../Assets/Ellipse 5132.svg"
import Trash from "../Assets/trash.svg"
const ITEM_TYPE = "TABLE";

const DropZone: React.FC = () => {
  const droppedItems = useSelector((state: any) => state.droppedItems.items);
  const selectedItemId = useSelector((state: any) => state.droppedItems.selectedItemId);
  const dispatch = useDispatch();
  const dropRef = useRef<HTMLDivElement | null>(null);
  const gridSize = 4;

  const handleSelectItem = (uniqueId: string) => {
    dispatch(setSelectedItem(uniqueId));
  };

  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      const dropTarget = dropRef.current?.getBoundingClientRect();

      if (offset && dropTarget) {
        const x = Math.floor(
          (offset.x - dropTarget.left) / (dropTarget.width / gridSize)
        );
        const y = Math.floor(
          (offset.y - dropTarget.top) / (dropTarget.height / gridSize)
        );

        if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
          const isCellOccupied = droppedItems.some(
            (existing:any) =>
              existing.x === x &&
              existing.y === y &&
              existing.uniqueId !== item.uniqueId
          );

          if (!isCellOccupied) {
            if (item.isNew) {
              dispatch(
                addItem({
                  ...item,
                  x,
                  y,
                  uniqueId: uuidv4(),
                  rotation: 0,
                })
              );
            } else {
              dispatch(
                updateItem({ ...item, x, y })
              );
            }
          }
        }
      }
    },
  }));

  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop]);

  const handleRotate = (uniqueId: string) => {
    const item = droppedItems.find((item:any) => item.uniqueId === uniqueId);
    if (item) {
      dispatch(
        updateItem({
          ...item,
          rotation: (item.rotation + 90) % 360,
        })
      );
    }
  };

  const handleCopy = (uniqueId: string) => {
    const itemToCopy = droppedItems.find((item:any) => item.uniqueId === uniqueId);
    if (itemToCopy) {
      dispatch(
        addItem({
          ...itemToCopy,
          uniqueId: uuidv4(),
          x: (itemToCopy.x + 1) % gridSize,
          y: itemToCopy.y,
        })
      );
    }
  };

  const handleDelete = (uniqueId: string) => {
    dispatch(deleteItem(uniqueId));
  };

  return (
    <div
      ref={dropRef}
      className="relative border-2 rounded-md p-4 h-full flex-grow  overflow-hidden"
    >
       {droppedItems.length === 0 ? (
      <p className="text-gray-500 text-center">Drag and Drop table here</p>
    ) : (
      <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full w-full">
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize;
          const y = Math.floor(index / gridSize);
          const item = droppedItems.find(
            (item:any) => item.x === x && item.y === y
          );

          return (
            <div
              key={`${x}-${y}`}
              className="relative w-full h-full bg-white rounded-md"
              onClick={() => item && handleSelectItem(item.uniqueId)}
            >
              {item && (
                <div className="relative">
                  <DraggableItem
                    key={item.uniqueId}
                    id={item.id}
                    imgSrc={item.imgSrc}
                    x={item.x}
                    y={item.y}
                    uniqueId={item.uniqueId}
                    rotation={item.rotation}
                    moveItem={(uniqueId, newX, newY) => {
                      const isCellOccupied = droppedItems.some(
                        (existing:any) =>
                          existing.x === newX &&
                          existing.y === newY &&
                          existing.uniqueId !== uniqueId
                      );

                      if (!isCellOccupied) {
                    dispatch(
                            updateItem({
                              ...item,
                              x: newX,
                              y: newY,
                            })
                          );
                      }
                    }}
                  />
                  {/* Action Group */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1 flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1">
                    {/* Circle Icon */}
                    <button className="bg-gray-200 p-1 rounded-full shadow-sm hover:bg-gray-300">
                      <img src={Ellipse} alt="Ellipse" />
                    </button>

                    {/* Copy Icon */}
                    <button
                      onClick={() => handleCopy(item.uniqueId)}
                      className="bg-gray-200 p-1 rounded-full shadow-sm hover:bg-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 3H5a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V5a2 2 0 00-2-2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7h8M8 11h5"
                        />
                      </svg>
                    </button>

                    {/* Delete Icon */}
                    <button
                      onClick={() => handleDelete(item.uniqueId)}
                      className="bg-gray-200 p-1 rounded-full shadow-sm hover:bg-gray-300"
                    >
                      <img src={Trash} alt="Trash" />
                    </button>
                  </div>

                  {/* Rotate Icon */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-20 bg-white border border-gray-300 rounded-full shadow-md p-1">
                    <button
                      onClick={() => handleRotate(item.uniqueId)}
                      className="hover:bg-gray-300 rounded-full p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h8m0 0-3-3m3 3-3 3m-3-3h8m4 0a9 9 0 11-6-8.485"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    )}
    </div>
  );
};

export default DropZone;
