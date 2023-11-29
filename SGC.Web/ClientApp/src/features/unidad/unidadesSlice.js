import { createSlice } from '@reduxjs/toolkit';

const initialStateUnidad = {
    id: 0,
    codigo: '',
    grupo: '',
    porcentaje: '',
    tipoGrupo: 1, //Piso, debe depende del tipo de consorcio
    tipoUnidad: 1, //Departamento, tambien depende del tipo de consorcio
    consorcioId: 0
}

export const unidadesSlice = createSlice({
    name: 'unidades',
    initialState: {
        unidades: []
    },
    reducers: {
        setUnidades: (state, action) => {
            state.unidades = action.payload;
        },
        addUnidad: (state, action) => {
            state.unidades.push(action.payload);
        },
        editUnidad: (state, action) => {
            const { id, updatedUnidad } = action.payload;
            const existingUnidad = state.unidades.find(c => c.id === id);
            if (existingUnidad)
                Object.assign(existingUnidad, updatedUnidad);
        },
        removeUnidad: (state, action) => {
            state.unidades = state.unidades.filter(c => c.id !== action.payload);
        }
    }
});

export const { setUnidades, addUnidad, editUnidad, removeUnidad } = unidadesSlice.actions;
export const selectUnidades = state => state.unidades.unidades;
export const selectUnidad = (state, id) => {
    var unidad = state.unidades.unidades.find(c => c.id == id);
    return unidad ? unidad : initialStateUnidad;
};

export default unidadesSlice.reducer;
