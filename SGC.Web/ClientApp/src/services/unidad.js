import { urls } from '../constants/api';
import clientInstance from '../client';
import { setUnidades } from '../features/unidad/unidadesSlice';
import { unidadesMoqup } from '../data/unidades';

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
