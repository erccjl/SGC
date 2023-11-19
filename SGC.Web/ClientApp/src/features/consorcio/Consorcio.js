import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import ConsorcioForm from "../../components/Consorcio/ConsorcioForm";
import { useSelector } from "react-redux";
import { selectConsorcio } from "./consorciosSlice";

export const Consorcio = () => {
    let { consorcioId } = useParams();
    const navigate = useNavigate();
    const consorcio = useSelector(state => selectConsorcio(state, consorcioId));

    const handleSave = (consorcio) => {
        console.log(consorcio);
        // dispatch(addConsorcio(newConsorcio));
        // setNewConsorcio(initialState);
    }

    const handleCancel = () => {
        navigate(-1)
    }

    return (<>
        <Box sx={{ width: '100%' }}>
            <ConsorcioForm consorcio={consorcio} handleSave={handleSave} handleCancel={handleCancel} />
        </Box>
    </>)
}