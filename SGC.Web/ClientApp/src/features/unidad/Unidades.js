import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUnidades } from "./unidadesSlice";
import { selectConsorcio } from "../consorcio/consorciosSlice";
import { useEffect } from "react";
import { getUnidadesByConsorcioIdApi, putInactivateUnidadApi } from '../../services/unidad';
import { UnidadTable } from '../../components/Unidad/UnidadTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Unidades = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { consorcioId } = useParams();
    const unidades = useSelector(selectUnidades);
    const consorcio = useSelector(state => selectConsorcio(state, consorcioId));

    const handleEdit = (id) => {
        return navigate(`/consorcios/${consorcioId}/unidades/edit/${id}`)
    }

    const handleAdd = () => {
        return navigate(`/consorcios/${consorcioId}/unidades/add`)
    };

    const handleRemove = async (id) => {
        await dispatch(putInactivateUnidadApi(id));
    }

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (consorcio.id !== 0)
            dispatch(getUnidadesByConsorcioIdApi(consorcioId));
        else
            goBack();
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
                        Unidades de  <b>{consorcio.nombre}</b>
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
            {unidades.length > 0
                ? (<UnidadTable
                    unidades={unidades}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove} />)
                : (<Alert severity="info">No hay Unidades cargadas</Alert>)}
        </Box>

        <br />

        <Button
            variant="contained"
            onClick={goBack}
            startIcon={<ArrowBackIcon />}>
            Volver
        </Button>
    </>);
}