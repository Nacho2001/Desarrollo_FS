import { useState, useEffect } from "react";
import { getUserPosts } from "../callback";
import { useSelector } from "react-redux/es/hooks/useSelector";
import  CardPublicacion from '../components/CardPublicacion'
const Muro = () => {
    const token = useSelector((state) => state.credencialesUsuario.credencialesUsuario.token)
    const username = useSelector((state) => state.credencialesUsuario.credencialesUsuario.username)
    const [misPost, setMisPost] = useState([]);
    useEffect(() => {
        const getMyPost = async () => {
            setMisPost(await getUserPosts(username, token))
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