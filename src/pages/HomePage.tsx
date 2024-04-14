import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './HomePage.css'
import Header from '../components/Header'
import ListContainer from '../components/ListContainer'

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
        <div className='mt-4'>
          <ListContainer />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
