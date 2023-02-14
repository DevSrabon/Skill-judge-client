import { useEffect, useState } from "react";

const useToken = (email: string) => {
    const [token, setToken] = useState<string>('');
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_API_URL}/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('token', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;