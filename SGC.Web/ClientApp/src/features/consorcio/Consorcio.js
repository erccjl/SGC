import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import ConsorcioForm from "../../components/Consorcio/ConsorcioForm";
import { useDispatch, useSelector } from "react-redux";
import { selectConsorcio } from "./consorciosSlice";
import { postConsorcioApi, putConsorcioApi } from "../../services/consorcio";

export const Consorcio = () => {
    const dispatch = useDispatch();
    let { consorcioId } = useParams();
    const navigate = useNavigate();
    const consorcio = useSelector(state => selectConsorcio(state, consorcioId));

    const handleSave = (consorcio) => {
        if (consorcioId)
            dispatch(putConsorcioApi(consorcio));
        else
            dispatch(postConsorcioApi(consorcio));
        goBack();
    }

    const handleCancel = () => {
        goBack();
    }

    const goBack = () => {
        navigate(-1);
    }

    return (<>
        <Box sx={{ width: '100%' }}>
            <ConsorcioForm consorcio={consorcio} handleSave={handleSave} handleCancel={handleCancel} />
        </Box>
    </>)
}