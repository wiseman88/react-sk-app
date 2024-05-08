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
              value={credentials.email}
              onIonChange={(e) => onChange('email', e.detail.value ?? '')}
              label='Email'
              labelPlacement='floating'
              fill='outline'
              placeholder='Zadajte email'
              className='mb-4'
            ></IonInput>
            <IonInput
              value={credentials.password}
              type='password'
              onIonChange={(e) => onChange('password', e.detail.value ?? '')}
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
