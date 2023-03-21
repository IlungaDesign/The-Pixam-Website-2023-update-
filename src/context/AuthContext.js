import {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    })
    const history = useHistory()

    function login(jwtToken){

        console.log('De context heeft de token ontvangen!', jwtToken);

        localStorage.setItem('token', jwtToken);

        console.log("Gebruiker is ingelogd!");
        toggleIsAuth({
            ...isAuth,

            isAuth:true,
        });
        history.push('/home-page');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth({
            ...isAuth,
            isAuth:false,
        });
        history.push('/');
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        login:login,
        logout:logout
    };

    return (
        <div>
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthContextProvider;