import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home'
import Consorcios from '../features/consorcio/Consorcios';
import { Consorcio } from '../features/consorcio/Consorcio';
import { Unidades } from '../features/unidad/Unidades';
import { Unidad } from '../features/unidad/Unidad';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consorcios" element={<Consorcios />} />
            <Route path="/consorcios/add" element={<Consorcio />} />
            <Route path="/consorcios/edit/:consorcioId" element={<Consorcio />} />
            <Route path="/consorcios/:consorcioId/unidades" element={<Unidades />} />
            <Route path="/consorcios/:consorcioId/unidades/add" element={<Unidad />} />
            <Route path="/consorcios/:consorcioId/unidades/edit/:unidadId" element={<Unidad />} />
        </Routes>
    );
}

export default AppRouter;