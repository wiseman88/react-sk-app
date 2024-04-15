import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import Header from '../components/Header'
import { useParams } from 'react-router'

interface RouteParams {
  id: string
}

const Service: React.FC = () => {
  const { id } = useParams<RouteParams>()

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Slovensko 2.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='w-full flex items-center p-20'>
          <h1>here goes 2nd page with service of id: {id}</h1>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Service
