import { IonButton, IonInput, IonPage } from '@ionic/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const onChange = (field: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }))
  }

  const handleAutoFill = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    setCredentials({
      email: 'andrej.danko@kapitan.ru',
      password: 'n3vidimSema4?',
    })
  }

  const clearInputs = () => {
    setCredentials({ email: '', password: '' })
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
              className='mb-4'
              value={credentials.email} label='Email' labelPlacement='floating' fill='outline'
              onIonChange={(e) => onChange('email', e.detail.value ?? '')}
              placeholder='Zadajte email'
            ></IonInput>
            <IonInput
              className='mb-4'
              value={credentials.password} label='Heslo' labelPlacement='floating' fill='outline'
              onIonChange={(e) => onChange('password', e.detail.value ?? '')}
              type='password'
              placeholder='Zadajte heslo'
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
