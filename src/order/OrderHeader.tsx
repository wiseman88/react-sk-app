import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

const OrderHeader = () => {
  return (
    <IonHeader>
      <IonToolbar className='flex justify-center'>
        <IonButtons slot='start'>
          <IonBackButton />
        </IonButtons>
        <IonTitle className='text-center'>Zalozenie s.r.o.</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default OrderHeader
