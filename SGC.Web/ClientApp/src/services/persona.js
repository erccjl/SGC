import clientInstance from '../client';
import { SuccessToast } from '../components/Toast/Toast';
import { urls } from '../constants/api';

export const postPersonaApi = (persona) => async (dispatch) => {
    const response = await clientInstance
        .post(urls.personaAPI, persona);

    if (response.status == 200) {
        SuccessToast('Persona creada con éxito!');
    }
}