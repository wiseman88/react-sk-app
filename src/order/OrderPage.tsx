import {
  InputChangeEventDetail,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import OrderHeader from './OrderHeader'
import { chatbubbleOutline } from 'ionicons/icons'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  subjects: string
  files: string
}

const OrderPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subjects: '',
    files: '',
  })

  const handleInputChange = (e: CustomEvent<InputChangeEventDetail>) => {
    const { name, value } = e.target as HTMLInputElement
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('/mock/products/create.POST.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      console.log(formData)
    } catch (error: any) {
      console.error('Error submitting form:', error.message)
    }
  }

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
          <form onSubmit={handleSubmit}>
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
                <IonInput
                  label='Nazov'
                  name='name'
                  value={formData.name}
                  onIonInput={handleInputChange}
                ></IonInput>
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
                <IonInput
                  label='Email'
                  name='email'
                  value={formData.email}
                  onIonInput={handleInputChange}
                ></IonInput>
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
                <IonInput
                  label='Predmety'
                  name='subjects'
                  value={formData.subjects}
                  onIonInput={handleInputChange}
                ></IonInput>
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
                <IonInput
                  label='Subory'
                  name='files'
                  value={formData.files}
                  onIonInput={handleInputChange}
                ></IonInput>
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
            <IonFab className='py-6 px-2 w-full bg-gray-100 fixed bottom-0 right-0'>
              <IonButton type='submit' expand='block'>
                odoslat na spracovanie
              </IonButton>
            </IonFab>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OrderPage
