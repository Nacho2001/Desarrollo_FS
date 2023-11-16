import { useState, useEffect } from 'react';
import { getPosts } from '../callback';
import CardPublicacion from "../components/CardPublicacion";

const Home = () => {
    const [publicaciones,setPublicaciones] = useState([]);
    useEffect(() => {
        const getPublicaciones = async () => {
            setPublicaciones(await getPosts())
        }
        getPublicaciones();
    }, [])
    return (
        <>
            <h2>MyNet</h2>
            <div>
                {publicaciones.map((post) => (
                    <CardPublicacion post={post}/>
                ))}
            </div>
        </>
    )
}

export default Home;