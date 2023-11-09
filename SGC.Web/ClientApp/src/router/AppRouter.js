import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home'
import Consorcio from '../routes/Consorcio';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consorcios" element={<Consorcio />} />
        </Routes>
    );
}

export default AppRouter;