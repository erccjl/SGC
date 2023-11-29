import { configureStore } from "@reduxjs/toolkit";
import consorciosReducer from "./features/consorcio/consorciosSlice";
import unidadesReducer from "./features/unidad/unidadesSlice";


const store = configureStore({
    reducer: {
        consorcios: consorciosReducer,
        unidades: unidadesReducer,
    }
});

export default store;