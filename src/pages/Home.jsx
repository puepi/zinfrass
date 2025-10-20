import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        document.title = 'Bienvenue à INFRAS-MANAGEMENT'
    }, [])
    return (
        <>
            <h2>Bienvenue!</h2>
        </>
    )
}