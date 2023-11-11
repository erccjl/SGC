import { Box, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addConsorcio, removeConsorcio, selectConsorcios } from './consorciosSlice';
import { useState } from 'react';
import ConsorcioForm from './ConsorcioForm';

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
            <Paper>
                <Box px={3} py={2}>
                    <ConsorcioForm></ConsorcioForm>
                </Box>
            </Paper>
        </>);
}

export default Consorcio;
