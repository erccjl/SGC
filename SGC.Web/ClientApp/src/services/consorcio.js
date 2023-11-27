import { urls } from '../constants/api';
import { addConsorcio, editConsorcio, setConsorcios } from '../features/consorcio/consorciosSlice';
import clientInstance from '../client';
import { toast } from 'react-toastify';
import { SuccessToast } from '../components/Toast/Toast';

export const getConsorciosApi = () => (dispatch) => {
    clientInstance
        .get(urls.getConsorciosAPI)
        .then(response => {
            if (response.data)
                dispatch(setConsorcios(response.data));
        });
}

export const postConsorcioApi = (consorcio) => (dispatch) => {
    clientInstance
        .post(urls.postConsorcioAPI, consorcio)
        .then(response => {
            if (response.data) {
                toast.success('Consorcio creado con éxito!', { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored", autoClose: 2000 });
                dispatch(addConsorcio(response.data));
            }
        })
}

export const putConsorcioApi = (consorcio) => (dispatch) => {
    clientInstance
        .post(urls.putConsorcioAPI, consorcio)
        .then(response => {
            if (response.data){
                SuccessToast('Consorcio actualizado con éxito!');
                dispatch(editConsorcio(response.data));
            }
        })
}