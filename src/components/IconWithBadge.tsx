import { IonBadge, IonIcon } from '@ionic/react'

type IconWithBadgeProps = {
  icon: string
  badgeContent: number
  color: string | 'primary'
  size?: string
}

const IconWithBadge = (props: IconWithBadgeProps) => {
  return (
    <div className='relative flex'>
      <IonIcon icon={props.icon} className={props.size || 'size-7'}></IonIcon>
      <IonBadge
        color={props.color}
        className='absolute bottom-3 left-4 h-5 w-5 rounded-full flex items-center justify-center'
      >
        <span>{props.badgeContent}</span>
      </IonBadge>
    </div>
  )
}

export default IconWithBadge
