import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoutes = ({children}) => {
    const { isAuthenticate } = useAuth();

    if (!isAuthenticate) {
        return <Navigate to="/" />;
    }

    return children;
};
export default ProtectedRoutes;