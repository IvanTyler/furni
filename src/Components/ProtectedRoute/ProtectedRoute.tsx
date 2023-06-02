import { Navigate } from "react-router-dom";
import { useTypeSelector } from "../../Hooks/useTypeSelector";

interface IProtectedRouteProps {
    children: any
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
    const { isLoadingAuth } = useTypeSelector(state => state.data)

    if (!isLoadingAuth) {
        return <Navigate to="/login" />;
    }
    return children;
};