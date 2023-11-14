import { useState, useEffect } from "react";
import { getUserPosts } from "../callback";
import { CardPublicacion } from '../components/CardPublicacion'
const Muro = () => {
    const [misPost, setMisPost] = useState([]);
    useEffect(() => {
        let usuario = "MNacho";
        const getMyPost = async () => {
            setMisPost(getUserPosts(usuario))
        }
        // Corregir funcion Callback
        getMyPost();
    }, [])
    return (
        <>
            <h2>Mi Muro</h2>
            <ul>
                {misPost.map((post) => (
                    <CardPublicacion post={post}/>
                ))}
            </ul>
        </>
    )
}

export default Muro;