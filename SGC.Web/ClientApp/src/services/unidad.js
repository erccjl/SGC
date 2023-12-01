import { urls } from '../constants/api';
import clientInstance from '../client';
import { addUnidad, editUnidad, setUnidades } from '../features/unidad/unidadesSlice';
import { unidadesMoqup } from '../data/unidades';
import { SuccessToast } from '../components/Toast/Toast';

export const getUnidadesByConsorcioIdApi = (consorcioId) => (dispatch) => {
    dispatch(setUnidades(unidadesMoqup));
    // clientInstance
    //     .get(urls.getUnidadesByConsorcioIdAPI, {
    //         params: {
    //             consorcioId: consorcioId
    //         }
    //     })
    //     .then(response => {
    //         if (response.data)
    //             dispatch(setUnidades(response.data));
    //     });
}


export const postUnidadApi = (unidad) => (dispatch) => {
    clientInstance
        .post(urls.postUnidadAPI, unidad)
        .then(response => {
            if (response.data) {
                SuccessToast('Unidad creada con éxito!');
                dispatch(addUnidad(response.data));
            }
        })
}

export const putUnidadApi = (unidad) => (dispatch) => {
    clientInstance
        .post(urls.putUnidadAPI, unidad)
        .then(response => {
            if (response.data){
                SuccessToast('Unidad actualizada con éxito!');
                dispatch(editUnidad(response.data));
            }
        })
}