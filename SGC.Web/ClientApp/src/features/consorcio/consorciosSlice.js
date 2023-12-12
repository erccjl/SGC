import { createSlice } from '@reduxjs/toolkit';

const initialStateConsorcio = {
    id: 0,
    nombre: '',
    descripcion: '',
    direccion: '',
    tipo: 1, //Edificio
    encabezado: '',
    contenido: ''
}

export const consorciosSlice = createSlice({
    name: 'consorcios',
    initialState: {
        consorcios: []
    },
    reducers: {
        setConsorcios: (state, action) => {
            state.consorcios = action.payload;
        },
        addConsorcio: (state, action) => {
            state.consorcios.push(action.payload);
        },
        editConsorcio: (state, action) => {
            const { id, updatedConsorcio } = action.payload;
            const existingConsorcio = state.consorcios.find(c => c.id === id);
            if (existingConsorcio)
                Object.assign(existingConsorcio, updatedConsorcio);
        },
        removeConsorcio: (state, action) => {
            state.consorcios = state.consorcios.filter(c => c.id !== action.payload);
        }
    }
});

export const { setConsorcios, addConsorcio, editConsorcio, removeConsorcio } = consorciosSlice.actions;
export const selectConsorcios = state => state.consorcios.consorcios;
export const selectConsorcio = (state, id) => {
    var consorcio = state.consorcios.consorcios.find(c => c.id === id);
    return consorcio ? consorcio : initialStateConsorcio;
};

export default consorciosSlice.reducer;
