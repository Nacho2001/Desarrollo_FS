import { useState, useEffect } from "react";
import { getUserPosts } from "../callback";
import  CardPublicacion from '../components/CardPublicacion'
const Muro = () => {
    const [misPost, setMisPost] = useState([]);
    useEffect(() => {
        const getMyPost = async () => {
            setMisPost(await getUserPosts("Nacho"))
        }
        // Corregir funcion Callback
        getMyPost();
    }, [])
    return (
        <>
            <h2>Mi Muro</h2>
            <ul>
                {misPost.map((post) => (
                    <CardPublicacion post={post} key={post.id}/>
                ))}
            </ul>
        </>
    )
}

export default Muro;