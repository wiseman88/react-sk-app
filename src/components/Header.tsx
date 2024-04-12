import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { calendarClearOutline, notificationsOutline } from 'ionicons/icons'
import IconWithBadge from './IconWithBadge'

const Header = () => {
  return (
    <>
      <IonHeader mode='ios'>
        <IonToolbar>
          <div className='flex justify-between p-2'>
            <IconWithBadge
              icon={calendarClearOutline}
              badgeContent={12}
              color='primary'
            />
            <IonTitle>Slovensko 2.0</IonTitle>
            <IconWithBadge
              icon={notificationsOutline}
              badgeContent={3}
              color='warning'
            />
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  )
}

export default Header
