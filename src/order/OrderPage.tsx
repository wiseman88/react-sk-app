import {
  IonAlert,
  IonButton,
  IonContent,
  IonFab,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import OrderHeader from './OrderHeader'
import useOrder from './useOrder'
import OrderStep from './OrderStep'
import Alert from '../components/Alert'

const OrderPage = () => {
  const { formData, onChange, saveInputs, fetchOrderSteps, error } = useOrder()

  const status = ['vyplnte', 'spracovanie', 'v poriadku', 'chyba', 'none']

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
          {error && <Alert text={error} bgColor='bg-red-100' textColor='text-red-500' />}
          <form onSubmit={saveInputs}>
            {Object.keys(formData).map((key, index) => (
              <OrderStep
                key={key} id={index}
                status={status} formData={formData}
                onChange={onChange}
              />
            ))}
            <IonFab className='py-6 px-2 w-full bg-gray-100 fixed bottom-0 right-0'>
              <IonButton id='submitBtn' type='submit' expand='block'>
                odoslat na spracovanie
              </IonButton>
              <IonAlert
                trigger='submitBtn'
                header='Chceš pokračovať v upravovaní?'
                buttons={[
                  {
                    text: 'Áno',
                    handler: fetchOrderSteps,
                  },
                  {
                    text: 'Nie',
                  },
                ]}
              ></IonAlert>
            </IonFab>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderPage
