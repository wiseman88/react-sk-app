import {
  InputChangeEventDetail,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonInput,
} from '@ionic/react'
import { chatbubbleOutline } from 'ionicons/icons'

type Props = {
  formData: any
  handleInputChange: (event: CustomEvent<InputChangeEventDetail>) => void
}

const OrderStep = (props: Props) => {
  return (
    <>
      <IonCard className='mb-8'>
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
          Zadajte nazov vasej firmy, a skontrolujte si, ci uz nazov neexistuje
          na orsr.sk
        </IonCardContent>
        <div className='p-4'>
          <IonInput
            label='Nazov'
            name='name'
            value={props.formData.name}
            onIonInput={props.handleInputChange}
          ></IonInput>
        </div>
        <IonCardContent className='bg-orange-100 text-orange-600'>
          Vyplnte ...
        </IonCardContent>
      </IonCard>
      <IonCard className='bg-orange-100 mb-8'>
        <IonCardHeader className=''>
          <IonCardTitle className='flex justify-between'>
            Card without input orange
            <IonIcon
              color='primary'
              size='medium'
              icon={chatbubbleOutline}
            ></IonIcon>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque
          quasi temporibus?
        </IonCardContent>
      </IonCard>
    </>
  )
}

export default OrderStep
