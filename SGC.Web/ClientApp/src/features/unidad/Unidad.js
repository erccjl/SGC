
import { useNavigate, useParams } from "react-router-dom"
import { selectUnidad } from "./unidadesSlice";
import { selectConsorcio } from "../consorcio/consorciosSlice";
import { postUnidadApi, putUnidadApi } from "../../services/unidad";
import { Box } from "@mui/material";
import { UnidadForm } from "../../components/Unidad/UnidadForm";
import { useDispatch, useSelector } from "react-redux";

export const Unidad = () => {
    const dispatch = useDispatch();
    let { consorcioId, unidadId } = useParams();
    const navigate = useNavigate();
    const consorcio = useSelector(state => selectConsorcio(state, consorcioId));
    const unidad = useSelector(state => selectUnidad(state, unidadId));

    const handleSave = (unidad) => {
        if (unidadId)
            dispatch(putUnidadApi(unidad));
        else
            dispatch(postUnidadApi(unidad));
        goBack();
    }

    const handleCancel = () => {
        goBack();
    }

    const goBack = () => {
        console.log(consorcio);
        navigate(-1);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <UnidadForm unidad={unidad} handleSave={handleSave} handleCancel={handleCancel} />
        </Box>
    )
}