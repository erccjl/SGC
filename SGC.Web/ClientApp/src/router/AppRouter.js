import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home'
import Consorcio from '../features/consorcio/Consorcio';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consorcios" element={<Consorcio />} />
        </Routes>
    );
}

export default AppRouter;