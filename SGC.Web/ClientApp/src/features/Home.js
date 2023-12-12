import { PersonaForm } from '../components/Persona/PersonaForm';
import { Box } from '@mui/material';
import { postPersonaApi } from '../services/persona';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    const handleSave = async (persona) => {
        await dispatch(postPersonaApi(persona));
    }

    const handleCancel = () => {
        console.log('cancel');
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <PersonaForm handleSave={handleSave} handleCancel={handleCancel} />
            </Box>
        </>
    );
}

export default Home;