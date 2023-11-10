import { createSlice } from '@reduxjs/toolkit';

export const consorciosSlice =  createSlice ({
    name: 'consorcios',
    initialState: {
        consorcios: []
    },
    reducers: {
        addConsorcio: (state, action) => {
            state.consorcios.push(action.payload);
        },
        editConsorcio: (state, action) => {
            const { id, updatedConsorcio } = action.payload;
            const existingConsorcio = state.consorcios.find(c => c.id === id);
            if(existingConsorcio)
                Object.assign(existingConsorcio, updatedConsorcio);
        },
        removeConsorcio: (state, action) => {
            state.consorcios = state.consorcios.filter(c => c.id !== action.payload);
        } 
    }
});

export const { addConsorcio, editConsorcio, removeConsorcio } = consorciosSlice.actions;
export const selectConsorcios = state => state.consorcios.consorcios;

export default consorciosSlice.reducer;
