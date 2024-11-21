import React from "react";
import { useSelector } from "react-redux";
import Table1 from "../Assets/Table.svg";
import Table2 from "../Assets/Mid.svg";
import Header from "./Header";
import Footer from "./Footer";
import { v4 as uuidv4 } from "uuid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropZone from "./DropZone";
import DragItem from "./DragItem";
import TableDetailsForm from "./TableDetailsForm";
import { useDispatch } from "react-redux";
import { clearItems } from "../redux/droppedItemsSlice";

const MainRoom: React.FC = () => {
  const droppedItems = useSelector((state: any) => state.droppedItems.items);
  const dispatch = useDispatch();

  const handleSaveRoom = () => {
    localStorage.setItem("savedRoomLayout", JSON.stringify(droppedItems));
    alert("Room layout saved!");
  };

  const handleAddRoom = () => {
    dispatch(clearItems());
  };
  return (
    <div className="flex flex-1 flex-col ">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 flex-grow">
        {/* Left Sidebar */}
        <div className="col-span-3 border ">
          <h2 className=" text-lg mb-4 font-semibold">Tables</h2>
          <div className="border-t pt-4 p-4">
            <h3 className="text-sm  mb-2 text-center font-semibold">
              Table Options
            </h3>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-gray-500 mb-2 text-center">
                Drag and Drop your tables
              </h3>
              <div className="flex justify-evenly">
                <DragItem id={uuidv4()} imgSrc={Table1} />
                <DragItem id={uuidv4()} imgSrc={Table2} />
              </div>
              <div className="border-t pt-4">
                <h3 className="text-sm mb-4 text-center font-semibold">
                  Table Details
                </h3>
                <TableDetailsForm />
              </div>
            </div>
            {/* Advanced Settings */}
            <div className="flex justify-between items-center space-x-2 mt-4 pt-4 border-t">
              <label
                htmlFor="advanced-settings"
                className="text-sm text-gray-700"
              >
                Advanced Settings
              </label>
              <input
                type="checkbox"
                id="advanced-settings"
                className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
            </div>
          </div>
        </div>
        {/* Main Room */}
        <div className="col-span-12 lg:col-span-9">
          <div className="rounded-md p-4 shadow-md border border-gray-200 h-full lg:h-screen overflow-hidden flex flex-col">
            {/* Header Section */}
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-medium mt-1">Main Room</h2>
              <div>
                {/* Add Room Button */}
                <button onClick={handleAddRoom} className="mr-2 px-4 py-2 bg-gradient-to-r from-gray-700 via-red-900 to-red-500 text-white font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
                  + Add Room
                </button>
                {/* Save Room Button */}
                <button
                  onClick={handleSaveRoom}
                  className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  Save Room
                </button>
                <MoreVertIcon />
              </div>
            </div>

            {/* Table Area */}
            <div className="flex-grow border-t pt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Section for Drag and Drop Table Items */}
            </div>
            <DropZone />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainRoom;
