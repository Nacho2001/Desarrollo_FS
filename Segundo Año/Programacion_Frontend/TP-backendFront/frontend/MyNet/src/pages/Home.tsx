import { IonContent, IonHeader, IonPage} from '@ionic/react';
import ToolbarInicio from '../components/Toolbarinicio';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {/*<ToolbarInicio/>*/}
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
