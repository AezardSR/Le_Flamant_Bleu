import { useState } from 'react';

export default function useToken() {
    // Récupère le token depuis le local storage
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        if(userToken){
            return userToken
        }
    };
    
    // Initialise le token avec la valeur récupérée du local storage
    const [token, setToken] = useState(getToken());

    // Sauvegarde le token dans le local storage
    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        // Met à jour la valeur du token dans l'état
        setToken(userToken.access_token);
    };
    
    // Retourne un objet avec les fonctions setToken et le token actuel
    return {
        setToken: saveToken,
        token
    }
}
