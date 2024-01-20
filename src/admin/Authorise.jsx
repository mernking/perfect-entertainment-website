import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function Authorize({ children }) {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/api/private-page', { withCredentials: true })
            .then(res => {
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
