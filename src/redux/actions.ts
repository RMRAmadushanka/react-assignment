import { Table, Layout } from './types';

export const addTable = (table: Table) => ({
  type: 'ADD_TABLE',
  payload: table
});

export const updateTable = (id: string, updatedDetails: Partial<Table>) => ({
  type: 'UPDATE_TABLE',
  payload: { id, updatedDetails }
});

export const removeTable = (id: string) => ({
  type: 'REMOVE_TABLE',
  payload: id
});

export const saveLayout = (layout: Layout) => ({
  type: 'SAVE_LAYOUT',
  payload: layout
});
