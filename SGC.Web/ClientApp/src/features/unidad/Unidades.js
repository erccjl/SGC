import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUnidades } from "./unidadesSlice";
import { selectConsorcio } from "../consorcio/consorciosSlice";
import { useEffect } from "react";
import { getUnidadesByConsorcioIdApi } from '../../services/unidad';
import { UnidadTable } from '../../components/Unidad/UnidadTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Unidades = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { consorcioId } = useParams();
    const unidades = useSelector(selectUnidades);
    const consorcio = useSelector(state => selectConsorcio(state, consorcioId));

    const handleEdit = (id) => {
        // return navigate(`/consorcios/edit/${id}`)
    }

    const handleAdd = () => {
        // return navigate(`/consorcios/add`)
    };

    const handleRemove = (id) => {
        // console.log('eliminar ', id)
    }

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        dispatch(getUnidadesByConsorcioIdApi(consorcioId));
    }, []);

    return (<>
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
                        Unidades de "{consorcio.nombre}"
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <br />

        <Box sx={{ width: '100%' }}>
            {unidades.length > 0
                ? (<UnidadTable
                    unidades={unidades}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove} />)
                : (<Alert severity="info">No hay Unidades cargadas</Alert>)}
        </Box>

        <Button
            variant="contained"
            onClick={goBack}
            startIcon={<ArrowBackIcon />}>
            Volver
        </Button>
    </>);
}