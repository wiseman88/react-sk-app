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
          <form>
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
            <IonCard className='mb-8'>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque quasi temporibus?
              </IonCardContent>
              <IonCardContent className='bg-orange-100 text-orange-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Kontaktny udaj
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Zadajte email, cez ktory sa opatovne prihlasite
              </IonCardContent>
              <div className='p-4'>
                <IonInput label='Email'></IonInput>
              </div>
              <IonCardContent className='bg-blue-100 text-blue-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Card without input blue
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque quasi temporibus?
              </IonCardContent>
              <IonCardContent className='bg-blue-100 text-blue-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Predmety podnikania (volne zivnosti)
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>Zadajte predmety podnikania</IonCardContent>
              <div className='p-4'>
                <IonInput label='Predmety'></IonInput>
              </div>
              <IonCardContent className='bg-green-100 text-green-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Card without input green
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque quasi temporibus?
              </IonCardContent>
              <IonCardContent className='bg-green-100 text-green-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Podpiste a nahrajte subory
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Podpiste a nahrajte subory pomocou aplikacie autogram od sk
                digital
              </IonCardContent>
              <div className='p-4'>
                <IonInput label='Subory'></IonInput>
              </div>
              <IonCardContent className='bg-red-100 text-red-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
            <IonCard className='mb-8'>
              <IonCardHeader className=''>
                <IonCardTitle className='flex justify-between'>
                  Card without input red
                  <IonIcon
                    color='primary'
                    size='medium'
                    icon={chatbubbleOutline}
                  ></IonIcon>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                neque quasi temporibus?
              </IonCardContent>
              <IonCardContent className='bg-red-100 text-red-600'>
                Vyplnte ...
              </IonCardContent>
            </IonCard>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderPage
