import { Box, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addConsorcio, removeConsorcio, selectConsorcios } from './consorciosSlice';
import { useState } from 'react';

const initialState = {
    id: 0,
    nombre: '',
    descripcion: '',
    direccion: '',
    tipo: 0
}

const Consorcio = () => {
    const dispatch = useDispatch();
    const consorcios = useSelector(selectConsorcios);
    const [newConsorcio, setNewConsorcio] = useState(initialState);

    const handleAddConsorcio = () => {
        dispatch(addConsorcio(newConsorcio));
        setNewConsorcio(initialState);
    };

    const handleRemoveConsorcio = (id) => {
        dispatch(removeConsorcio(id));
    }

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Paper>
                    componente consorcio
                </Paper>
            </Box>
        </>);
}

export default Consorcio;
