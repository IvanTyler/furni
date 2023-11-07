import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
    children: any
}

export function ProtectedRoute({ children }: IProtectedRouteProps) {

    const getTokenSessionStorage = localStorage.getItem('token')


    if (!getTokenSessionStorage) {
        return <Navigate to="/login" />;
    }
    return children;
};