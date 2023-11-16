import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import ConsorcioForm from "./ConsorcioForm";

const initialState = {
    id: 0,
    nombre: '',
    descripcion: '',
    direccion: '',
    tipo: 0,
    encabezado: '',
    contenido: ''
}

export const Consorcio = () => {
    let { consorcioId } = useParams();
    const navigate = useNavigate();

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
            <ConsorcioForm consorcio={initialState} handleSave={handleSave} handleCancel={handleCancel} />
        </Box>
    </>)
}