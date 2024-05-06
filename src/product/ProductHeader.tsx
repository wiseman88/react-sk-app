import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

type Props = {
  productName: string | undefined
}

const ProductHeader = (props: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonBackButton />
        </IonButtons>
        <IonTitle>{props.productName}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default ProductHeader
