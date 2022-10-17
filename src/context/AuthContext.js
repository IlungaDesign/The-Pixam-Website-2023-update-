// import {createContext, useState} from "react";
// import {useHistory} from "react-router-dom";
// import jwt_decode from "jwt-decode";
//
//
// export const AuthContext = createContext({})
//
// const AuthContextProvider = ({children}) => {
//     const [isAuth, toggleIsAuth] = useState({
//         isAuth: false,
//         user: null,
//     })
//     const history = useHistory()
//
//
//     function login(jwtToken){
//
//         //Ik verwacht een jwtToken als ik aangeroepen word!
//
//         console.log('De context heeft de token ontvangen!', jwtToken);
//
//         //token in de localStorage plaatsen
//
//         localStorage.setItem('banana', jwtToken);
//
//         //Kijken wat allemaal te vinden is in die tokken
//
//         const decodedToken = jwt_decode(jwtToken);
//         console.log('Decoded token:', decodedToken);
//
//         //die informatie gebruiken om die genruikersinformatie in de context te plaatsen
//
//         //Als je niet voldoende informatie over de gebruiker hebt,
//         //zul je nog een asynchrone functie moeten schrijven met een GET-request
//
//         console.log("Gebruiker is ingelogd!");
//         toggleIsAuth({
//             ...auth,
//             user: {
//                 email: decodedToken.email,
//                 id: decodedToken.sub,
//             },
//             isAuth:true,
//         });
//         history.push('/home-page');
//     }
//
//     function logout() {
//         console.log('Gebruiker is uitgelogd!');
//         toggleIsAuth({
//             ...auth,
//             isAuth:false,
//         });
//         history.push('/');
//     }
//
//     const contextData = {
//         isAuth: isAuth,
//         login:login,
//         logout:logout
//     };
//
//     return (
//         <div>
//             <AuthContext.Provider value={contextData}>
//                 {children}
//             </AuthContext.Provider>
//
//         </div>
//     );
// };
//
// export default AuthContextProvider;