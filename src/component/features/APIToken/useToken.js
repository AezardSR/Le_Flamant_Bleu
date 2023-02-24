import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        if(userToken){
        return userToken
        }
    };
    
    const [token, setToken] = useState(getToken());
    

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.access_token);
    };
<<<<<<< HEAD

=======
    console.log(token)
>>>>>>> 44fe82976e03c1011e5cba5373b6e5a87c344e60
    return {
        setToken: saveToken,
        token
        
      }
}