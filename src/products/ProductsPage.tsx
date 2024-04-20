import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ProductsPage.css'
import Header from '../components/Header'
import ProductsList from './ProductsList'

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
          <ProductsList />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
