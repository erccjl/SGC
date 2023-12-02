import { urls } from '../constants/api';
import { addConsorcio, editConsorcio, removeConsorcio, setConsorcios } from '../features/consorcio/consorciosSlice';
import clientInstance from '../client';
import { SuccessToast } from '../components/Toast/Toast';

export const getConsorciosApi = () => (dispatch) => {
    clientInstance
        .get(urls.getConsorciosAPI)
        .then(response => {
            if (response.data)
                dispatch(setConsorcios(response.data));
        });
}

export const postConsorcioApi = (consorcio) => async (dispatch) => {
    const response = await clientInstance
        .post(urls.postConsorcioAPI, consorcio);

    if (response.status == 200) {
        SuccessToast('Consorcio creado con éxito!');
    }
}

export const putConsorcioApi = (consorcio, consorcioId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putConsorcioAPI}/${consorcioId}`, consorcio);

    if (response.status == 200) {
        SuccessToast('Consorcio actualizado con éxito!');
    }
}

export const putActivateConsorcioApi = (consorcioId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putConsorcioAPI}/${consorcioId}/activate`);

    if (response.status == 200) {
        SuccessToast('Consorcio activado con éxito!');
    }
}

export const putInactivateConsorcioApi = (consorcioId) => async (dispatch) => {
    const response = await clientInstance
        .put(`${urls.putConsorcioAPI}/${consorcioId}/inactivate`);

    if (response.status == 200) {
        dispatch(removeConsorcio(consorcioId));
        SuccessToast('Consorcio eliminado con éxito!');
    }
}