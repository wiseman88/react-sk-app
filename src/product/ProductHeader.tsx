import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

type productNameProps = {
  productName: string | undefined
}

const ProductHeader = (props: productNameProps) => {
  return (
    <IonHeader mode='ios'>
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
