import { useState } from 'react';
import UseAuthContext from '../Context/UseAuthContext';

const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const {dispatch} = UseAuthContext()

    const login = async (role, accessCode) => {
        setError(null);
        setLoading(true);

        const response = await fetch("https://final-year-project-api-topaz.vercel.app/api/command/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({role, accessCode}),
            })
        
        const json = await response.json()

        if (!response.ok) {
            setError(json.message)
            setLoading(false)
            console.log('User',json.message)
        }

        if (response.ok) {

            localStorage.setItem("User", JSON.stringify(json))
            console.log('User',json)
            dispatch({type:"LOGIN", payload:json})
            setLoading(false)
        }
         
        
        
    }
    return {login, error, isLoading};
};

export default useLogin;