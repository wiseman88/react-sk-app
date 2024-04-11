import {
  IonBadge,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { calendarClearOutline, notificationsOutline } from 'ionicons/icons'

const Header = () => {
  return (
    <>
      <IonHeader mode='ios'>
        <IonToolbar>
          <div className='flex justify-between p-2'>
            <div className='relative'>
              <IonIcon
                icon={calendarClearOutline}
                className='h-7 w-7'
              ></IonIcon>
              <IonBadge
                color='primary'
                className='absolute bottom-5 left-4 h-5 w-5 rounded-full flex items-center justify-center'
              >
                <span>12</span>
              </IonBadge>
            </div>
            <IonTitle>Slovensko 2.0</IonTitle>
            <div className='relative'>
              <IonIcon
                icon={notificationsOutline}
                className='h-7 w-7'
              ></IonIcon>
              <IonBadge
                color='warning'
                className='absolute bottom-5 left-4 h-5 w-5 rounded-full flex items-center justify-center'
              >
                <span>3</span>
              </IonBadge>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  )
}

export default Header
