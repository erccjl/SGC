import { configureStore } from "@reduxjs/toolkit";
import consorciosReducer from "./features/consorcio/consorciosSlice";


const store = configureStore({
    reducer: {
        consorcios: consorciosReducer
    }
});

export default store;