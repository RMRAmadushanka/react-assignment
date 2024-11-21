import { configureStore } from '@reduxjs/toolkit';
import droppedItemsReducer from '../redux/droppedItemsSlice';

const store = configureStore({
  reducer: {
    droppedItems: droppedItemsReducer,
  },
});

export default store;
