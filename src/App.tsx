import React from "react";
import Sidebar from "./components/Sidebar";
import MainRoom from "./components/MainRoom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <DndProvider backend={HTML5Backend}>
        <MainRoom />
      </DndProvider>
    </div>
  );
};

export default App;
