import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DroppedItem {
  id: string;
  imgSrc: string;
  x: number;
  y: number;
  uniqueId: string;
  blocked: boolean;
  rotation: number;
}

interface DroppedItemsState {
  items: DroppedItem[];
  selectedItemId: string | null;
}

const initialState: DroppedItemsState = {
  items: [],
  selectedItemId: null,
};

const droppedItemsSlice = createSlice({
  name: 'droppedItems',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<DroppedItem>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<DroppedItem>) {
      const index = state.items.findIndex(
        (item) => item.uniqueId === action.payload.uniqueId
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (item) => item.uniqueId !== action.payload
      );
    },
    clearItems(state) {
      state.items = [];
    },
    setSelectedItem(state, action: PayloadAction<string | null>) {
      state.selectedItemId = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, clearItems, setSelectedItem  } = droppedItemsSlice.actions;

export default droppedItemsSlice.reducer;
