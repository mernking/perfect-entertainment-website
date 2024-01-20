import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function Authorize({ children }) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios.get('https://pvc-api-a4ce.onrender.com/api/private-page', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`  // Retrieve the token from storage
            }
        }).then(res => {
            console.log(res.data);
            if (res.data.message === "Welcome to the private page") {
                setLoading(false);
                setAuthorized(true);
            } else {
                console.log("Unauthorized");
                setLoading(false);
            }
        })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (!authorized) {
        return <div>Unauthorized</div>;
    }

    return children;
}
