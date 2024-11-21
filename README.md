# Project Name

A project that implements a dynamic drag-and-drop interface with room layout management, where users can add, position, rotate, and delete tables within a grid layout.

## Table of Contents

1. [Installation Instructions](#installation-instructions)
2. [Running the Application](#running-the-application)
3. [Technologies and Libraries Used](#technologies-and-libraries-used)
4. [Drag-and-Drop Mechanism](#drag-and-drop-mechanism)
5. [Project Structure](#project-structure)

## Installation Instructions

Follow the steps below to install and set up the project locally:

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v20 or later)
- **npm** (Node Package Manager)

### Step 1: Clone the Repository
Clone the repository to your local machine using the command:
```bash
git clone https://github.com/RMRAmadushanka/react-assignment.git
```

### Step 2: Install Dependencies
Navigate to the project folder and install the dependencies:
```bash
cd react-assignment
npm install
```

### Step 4: Start the Development Server
Once the dependencies are installed, you can run the application locally:
```bash
npm start

The application should now be running on `http://localhost:3000` by default.

## Running the Application

To run the application:

1. Open a terminal or command prompt.
2. Navigate to the project directory.
3. Run the command `npm start` to start the development server.
4. Open your browser and go to `http://localhost:3000` to view the application.

The development server will automatically reload whenever you make changes to the source code.


## Technologies and Libraries Used

This project utilizes several tools and libraries that help in building and managing the application effectively.

### Key Libraries and Tools:
- **React**: A JavaScript library for building user interfaces, allowing for component-based architecture and efficient UI updates.
- **React-Redux**: A state management library to manage global application state.
- **Redux Toolkit**: A set of tools for managing and simplifying Redux usage.
- **React-DnD**: A drag-and-drop library for React that allows for building complex drag-and-drop interactions with minimal effort.
- **React Router**: A library for handling routing in React applications.
- **Tailwind CSS**: A set of React components that implement Tailwind CSS Design to create a clean and modern UI.
- **uuid**: A library for generating unique identifiers.


### Validation of Libraries:
- **React**: Chosen for its declarative nature and the ability to efficiently update the UI based on state changes.
- **React-Redux**: Selected for its proven performance in managing complex state across large applications.
- **React-DnD**: A reliable library for drag-and-drop interfaces, supporting both mouse and touch events.
- **Redux Toolkit**: Simplifies Redux usage with a set of utilities for immutable updates, async logic, and store configuration.
- **Tailwind CSS**: Provides a consistent, responsive, and easily customizable design system.


## Drag-and-Drop Mechanism

### Overview:
The drag-and-drop mechanism in this project uses **React-DnD** to manage drag interactions. When a user drags a table item and drops it into a specified area (the drop zone), the position is calculated based on the grid size. 

### How It Works:
1. **Drag Item**: 
   - A draggable item (table) is wrapped in a `DragItem` component, which uses the `useDrag` hook from React-DnD to manage the drag state. This component is responsible for making the item draggable and tracking its position while being dragged.
   
2. **Drop Zone**:
   - The drop zone is defined as a grid with fixed rows and columns. It listens for the drop event using the `useDrop` hook.
   - When an item is dropped, the system calculates the position in the grid based on the mouse coordinates at the time of the drop.

3. **Grid Calculation**:
   - The drop position is calculated by dividing the mouse coordinates by the width and height of each grid cell. This ensures that the item aligns perfectly with the grid cells. 
   - The grid size is configurable, and the layout ensures that items do not overlap, using a simple check to verify that a cell is unoccupied before placing an item.


## Project Structure

The project follows a simple and organized structure for ease of development and scalability.

```
/src
  /components
    - DraggableItem.tsx    // The Draggable functionality implemented
    - DragItem.tsx         // The draggable table items
    - DropZone.tsx         // The DropZone where the drag-and-drop functionality is implemented
    - Footer.tsx           // The Footer Implemented
    - Header.tsx           // The Header component
    - MainRoom.tsx         // The main room where the all the main component combine
  /redux
    - droppedItemsSlice.ts // Redux slice for managing dropped items
    - store.ts             // Redux store configuration
    - types.ts             // The Typescript types
  /assets
    - Table.svg            // SVG assets for the table images
    - Mid.svg
    - Button.base (1).svg  // Button images for minus/plus actions
    - Button.base (2).svg
  App.tsx                  // Root component
  index.tsx                // Application entry point
  styles.css               // Global styles
```

