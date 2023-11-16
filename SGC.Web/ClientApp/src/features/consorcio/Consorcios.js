import { useDispatch, useSelector } from 'react-redux';
import { removeConsorcio, selectConsorcios } from './consorciosSlice';
import ConsorcioTable from './ConsorcioTable';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Consorcios = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const consorcioId = 1;
    const consorcios = useSelector(selectConsorcios);

    const handleEdit = (id) => {
        console.log('editar', id);
    }

    const handleAdd = () => {
        return navigate(`/consorcios/${consorcioId}`)
    };

    const handleRemove = (id) => {
        console.log('eliminar ', id)
        // dispatch(removeConsorcio(id));
    }

    const handleAddUnits = (id) => {
        console.log('Agregar unidades ', id);
    }

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
                <ConsorcioTable
                    consorcios={consorcios}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    handleAddUnits={handleAddUnits} />
            </Box>
        </>);
}

export default Consorcios;
