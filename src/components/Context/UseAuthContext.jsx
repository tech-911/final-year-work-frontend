import { useContext } from 'react';
import { UserContext } from './AuthContext';

const UseAuthContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw Error("UseAuthContext must be used inside AuthContext Provider")
    }
    return context;
};

export default UseAuthContext;