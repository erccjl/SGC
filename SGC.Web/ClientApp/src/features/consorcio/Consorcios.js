import { useDispatch, useSelector } from 'react-redux';
import { selectConsorcios } from './consorciosSlice';
import { Alert, Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getConsorciosApi } from '../../services/consorcio';
import ConsorcioTable from '../../components/Consorcio/ConsorcioTable';

const Consorcios = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const consorcios = useSelector(selectConsorcios);

    const handleEdit = (id) => {
        return navigate(`/consorcios/edit/${id}`)
    }

    const handleAdd = () => {
        return navigate(`/consorcios/add`)
    };

    const handleRemove = (id) => {
        console.log('eliminar ', id)
    }

    const handleAddUnits = (id) => {
        return navigate(`/consorcios/${id}/unidades`);
    }

    useEffect(() => {
        dispatch(getConsorciosApi());
    }, []);

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container
                    direction='row'
                    justifyContent='space-between'
                    alignItems="center"
                    spacing={2}>
                    <Grid item>
                        <Typography
                            sx={{ flex: '1 1 100%' }}
                            variant="h5"
                            id="tableTitle"
                            component="div"
                        >
                            Consorcios
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" onClick={handleAdd}>
                            Agregar
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <br />

            <Box sx={{ width: '100%' }}>
                {
                    consorcios.length > 0
                        ? (<ConsorcioTable
                            consorcios={consorcios}
                            handleEdit={handleEdit}
                            handleRemove={handleRemove}
                            handleAddUnits={handleAddUnits} />)
                        : (<Alert severity="info">No hay Consorcios cargados</Alert>)
                }

            </Box>
        </>);
}

export default Consorcios;
