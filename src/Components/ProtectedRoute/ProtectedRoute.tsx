import { Navigate } from "react-router-dom";
import { useAppDispath, useTypeSelector } from "../../Hooks/useTypeSelector";
import { setAuth } from "../../Redux/Reducers/SliceReducers";

interface IProtectedRouteProps {
    children: any
}

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const { isLoadingAuth } = useTypeSelector(state => state.data)
 
    const dispath = useAppDispath()
    
    const getTokenSessionStorage = localStorage.getItem('token')
    
    if (!getTokenSessionStorage) dispath(setAuth(false))
    

    if (!isLoadingAuth) {
        return <Navigate to="/login" />;
    }
    return children;
};