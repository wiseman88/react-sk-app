import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import OrderHeader from './OrderHeader'
import { chatbubbleOutline } from 'ionicons/icons'

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
          <IonCard>
            <IonCardHeader className=''>
              <IonCardTitle className='flex justify-between'>
                Nazov s.r.o.
                <IonIcon
                  color='primary'
                  size='medium'
                  icon={chatbubbleOutline}
                ></IonIcon>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Zadajte nazov vasej firmy, a skontrolujte si, ci uz nazov
              neexistuje na orsr.sk
            </IonCardContent>
            <div className='p-4'>
              <IonInput label='Nazov'></IonInput>
            </div>
            <IonCardContent className='bg-orange-100 text-orange-600'>
              Vyplnte ...
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderPage
