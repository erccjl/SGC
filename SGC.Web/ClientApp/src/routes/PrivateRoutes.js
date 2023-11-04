import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element }) {
    // Agrega aquí tu lógica de autenticación.
    // Si el usuario está autenticado, permite el acceso a la ruta privada.
    // De lo contrario, redirige al usuario a la página de inicio de sesión.
    const isAuthenticated = false; // Cambia esto según tu lógica de autenticación.

    if (isAuthenticated) {
        return <Route element={element} />;
    } else {
        return <Navigate to="/" />;
    }
}

export default PrivateRoute;