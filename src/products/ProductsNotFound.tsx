import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from '@ionic/react'
import { callOutline } from 'ionicons/icons'

type Props = {
  query: string
}

const ProductsNotFound = (props: Props) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{props.query}?</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>
            Budeme pridávať ďalšie služby, ak by ste mali o takúto službu
            záujem, radi by sme sa vás spýtali na viac informácií.
          </p>
          <p>Môžeme vás kontaktovať?</p>
        </IonCardContent>
        <div className='flex justify-center'>
          <IonButton fill='clear'>Nie</IonButton>
          <IonButton fill='clear'>Napíšte</IonButton>
          <IonButton fill='clear'>
            <p className='flex gap-1'>
              Zavolajte <IonIcon icon={callOutline}></IonIcon>
            </p>
          </IonButton>
        </div>
      </IonCard>
    </>
  )
}

export default ProductsNotFound
