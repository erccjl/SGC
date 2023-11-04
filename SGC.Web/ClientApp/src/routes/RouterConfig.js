import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';

const RouterConfig = () => (
    <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />

        {/* Rutas privadas */}
        {/* <Route path="/web-checkin" element={<PrivateRoute element={<WebCheckin />} />} /> */}
    </Routes>
);

export default RouterConfig;