import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard} from '@ionic/react';
import { getPosts } from '../callback';
import CardPublicacion from '../components/CardPublicacion';
const Home: React.FC = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const verPublicaciones = async() => {
      setPosts(await getPosts())
    }
    verPublicaciones();
  }, [])

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {
          posts.map((post) => (
            <CardPublicacion publicacion={post} key={post['id']}/>
          ))
        }
      </IonContent>
    </>
  );
};

export default Home;
