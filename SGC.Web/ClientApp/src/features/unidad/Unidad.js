
import { useNavigate, useParams } from "react-router-dom"
import { selectUnidad } from "./unidadesSlice";
import { postUnidadApi, putUnidadApi } from "../../services/unidad";
import { Box } from "@mui/material";
import { UnidadForm } from "../../components/Unidad/UnidadForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Unidad = () => {
    const dispatch = useDispatch();
    let { consorcioId, unidadId } = useParams();
    const navigate = useNavigate();
    const unidad = useSelector(state => selectUnidad(state, unidadId, Number(consorcioId)));

    const handleSave = async (unidad) => {
        if (unidadId)
            await dispatch(putUnidadApi(unidad, unidadId));
        else
            await dispatch(postUnidadApi(unidad));
        goBack();
    }

    const handleCancel = () => {
        goBack();
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <UnidadForm unidad={unidad} handleSave={handleSave} handleCancel={handleCancel} />
        </Box>
    )
}