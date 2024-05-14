import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import OrderHeader from './OrderHeader'
import OrderForm from './OrderForm'

const OrderPage = () => {
  return (
    <IonPage>
      <OrderHeader />
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Zalozenie s.r.o.</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='p-6'>
          <p className='text-center text-gray-400'>Vyplnte vstupne udaje</p>
          <OrderForm />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderPage
