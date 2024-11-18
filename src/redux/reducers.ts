import { Table, Layout } from './types';

interface Action {
  type: string;
  payload: any;
}

interface State {
  tables: Table[];
  layout: Layout[];
}

const initialState: State = {
  tables: [],
  layout: [],
};


const tableReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
      case 'ADD_TABLE':
        return { ...state, tables: [...state.tables, action.payload] };
      case 'UPDATE_TABLE':
        return {
          ...state,
          tables: state.tables.map((table) =>
            table.id === action.payload.id
              ? { ...table, ...action.payload.updatedDetails }
              : table
          ),
        };
      case 'REMOVE_TABLE':
        return {
          ...state,
          tables: state.tables.filter((table) => table.id !== action.payload),
        };
      case 'SAVE_LAYOUT':
        return { ...state, layout: action.payload };
      default:
        return state;
    }
  };


export default tableReducer;