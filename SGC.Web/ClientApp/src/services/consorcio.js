import { urls } from '../constants/api';
import { setConsorcios } from '../features/consorcio/consorciosSlice';
import clientInstance from '../client';

export const getAllConsorciosApi = () => (dispatch) => {
    clientInstance
        .get(urls.getAllConsorcios)
        .then(response => {
            if(response.data)
                dispatch(setConsorcios(response.data));
            else
                console.log(response);  
        });
}