import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home'
import Consorcios from '../features/consorcio/Consorcios';
import { Consorcio } from '../features/consorcio/Consorcio';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consorcios" element={<Consorcios />} />
            <Route path="/consorcios/:consorcioId" element={<Consorcio />} />
        </Routes>
    );
}

export default AppRouter;