import { urls } from '../constants/api';
import clientInstance from '../client';
import { addUnidad, editUnidad, removeUnidad, setUnidades } from '../features/unidad/unidadesSlice';
import { SuccessToast } from '../components/Toast/Toast';

export const getUnidadesByConsorcioIdApi = (consorcioId) => (dispatch) => {
    clientInstance
        .get(urls.getUnidadesByConsorcioIdAPI, {
            params: {
                id: consorcioId
            }
        })
        .then(response => {
            if (response.status == 200)
                dispatch(setUnidades(response.data));
        });
}


export const postUnidadApi = (unidad) => async (dispatch) => {
    const response = await clientInstance
        .post(urls.postUnidadAPI, unidad);

    if (response.status == 200) {
        SuccessToast('Unidad creada con éxito!');
    }
}

export const putUnidadApi = (unidad, unidadId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putUnidadAPI}/${unidadId}`, unidad);

    if (response.status == 200) {
        SuccessToast('Unidad actualizada con éxito!');
    }
}

export const putActivateUnidadApi = (unidadId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putUnidadAPI}/${unidadId}/activate`);

    if (response.status == 200) {
        SuccessToast('Unidad activada con éxito!');
    }
}

export const putInactivateUnidadApi = (unidadId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putUnidadAPI}/${unidadId}/inactivate`);

    if (response.status == 200) {
        dispatch(removeUnidad(unidadId));
        SuccessToast('Unidad eliminada con éxito!');
    }
}