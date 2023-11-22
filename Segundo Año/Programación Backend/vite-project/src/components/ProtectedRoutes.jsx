import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = ({logueado, redirecTo, usuario}) => {
    if(!logueado){
        return <Navigate to={redirecTo} repacle />
    }
    return children ? children: <Outlet />;
}

// Children es el componente hijo de este, en este caso serian admin, profile y dashboard
// Outlet permite redigir a el componente correspondiente, sino este componente solamente funciona para uno solo
// !! retorna un booleano, siempre devuelve un true o false