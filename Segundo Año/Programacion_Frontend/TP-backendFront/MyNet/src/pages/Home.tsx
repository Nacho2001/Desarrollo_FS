import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard} from '@ionic/react';
import { getPosts } from '../callback';
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
          posts.map((post:Object) => (
            <IonCard>
              
            </IonCard>
          ))
        }
      </IonContent>
    </>
  );
};

export default Home;
