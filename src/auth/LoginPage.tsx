import { IonButton, IonInput, IonPage } from '@ionic/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAutoFill = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setEmail('andrej.danko@kapitan.ru')
    setPassword('n3vidimSema4?')
  }

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  return (
    <IonPage>
      <div className='h-screen flex items-center p-4'>
        <div className='w-full'>
          <h2 className='text-3xl font-semibold text-center mb-4'>
            Prihlasenie
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className='w-full'>
            <IonInput
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              label='Email'
              labelPlacement='floating'
              fill='outline'
              placeholder='Zadajte email'
              className='mb-4'
            ></IonInput>
            <IonInput
              value={password}
              type='password'
              onIonChange={(e) => setPassword(e.detail.value!)}
              label='Heslo'
              labelPlacement='floating'
              fill='outline'
              placeholder='Zadajte heslo'
              className='mb-4'
            ></IonInput>
            <IonButton className='mx-0 mb-4' type='submit' expand='block'>
              Prihlasit
            </IonButton>
          </form>
          <div className='flex items-center justify-between'>
            <span className='mb-4  text-red-500' onClick={handleAutoFill}>
              Autofill input values
            </span>
            <span className='mb-4  text-blue-500' onClick={clearInputs}>
              <Link to='/home'>Navrat spat</Link>
            </span>
          </div>
        </div>
      </div>
    </IonPage>
  )
}

export default LoginPage
