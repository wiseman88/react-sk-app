import { IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import IconWithBadge from '../components/IconWithBadge'
import {
  calendarClearOutline,
  notificationsOutline,
  personOutline,
} from 'ionicons/icons'
import { Link } from 'react-router-dom'

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
            <IonTitle className='text-center'>Slovensko 2.0</IonTitle>
            <div className='flex items-center space-x-3'>
              <Link to={'/login'}>
                <IonIcon icon={personOutline} className='size-7'></IonIcon>
              </Link>
              <IconWithBadge
                icon={notificationsOutline}
                badgeContent={3}
                color='warning'
              />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  )
}

export default ProductsHeader
