import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import IconWithBadge from '../components/IconWithBadge'
import { calendarClearOutline, notificationsOutline } from 'ionicons/icons'

const ProductsHeader = () => {
  return (
    <>
      <IonHeader>
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

export default ProductsHeader
