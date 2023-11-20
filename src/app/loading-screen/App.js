import Loading from "./Loading";
import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
    const [loading, setLoading] = useState(true)
        useEffect(() => {
            setTimeout(() => setLoading(false), 3300)
        }, [])
        if (loading) {
            return <Loading/>
        }
    return (
        <div className = "App">
            <h1> Hi Tech Committee</h1>
        </div>
    );
}
