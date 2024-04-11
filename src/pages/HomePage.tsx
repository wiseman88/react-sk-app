import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './HomePage.css'
import Header from '../components/Header'

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Slovensko 2.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Tab 1 page' />
      </IonContent>
    </IonPage>
  )
}

export default HomePage
