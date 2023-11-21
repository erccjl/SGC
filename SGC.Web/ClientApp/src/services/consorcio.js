import axios from 'axios';
import { urls } from '../constants/api';
import { setConsorcios } from '../features/consorcio/consorciosSlice';

export const getAllConsorciosApi = () => (dispatch) => {
    axios
        .get(urls.getAllConsorcios)
        .then(response => {
            if(response.data)
                dispatch(setConsorcios(response.data));
            else
                console.log(response);  
        })
        .catch((error) => {
            console.log(error);
        })
}