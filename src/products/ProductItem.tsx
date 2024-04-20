import { IonIcon, IonItem, IonLabel } from '@ionic/react'
import { chevronForwardOutline } from 'ionicons/icons'

interface ListItemProps {
  productTitle: string
  categories: string
  fees: number
  additionalFees: number
}

const ListItem: React.FC<ListItemProps> = ({
  productTitle,
  categories,
  fees,
  additionalFees,
}) => {
  return (
    <>
      <IonItem>
        <div className='flex justify-between w-full my-2'>
          <div>
            <IonLabel>
              <span className='text-xl'>{productTitle}</span>
              <p>{categories}</p>
            </IonLabel>
          </div>
          <div className='flex items-center justify-center gap-3 text-right'>
            <div className='text-sm text-blue-500'>
              <p>{fees}€</p>
              <p>+ poplatky {additionalFees}€</p>
            </div>
            <div className='flex text-gray-400 text-xl'>
              <IonIcon icon={chevronForwardOutline}></IonIcon>
            </div>
          </div>
        </div>
      </IonItem>
    </>
  )
}

export default ListItem
