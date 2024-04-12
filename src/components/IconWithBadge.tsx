import { IonBadge, IonIcon } from '@ionic/react'

interface IconWithBadgeProps {
  icon: string
  badgeContent: number
  color: string | 'primary'
  size?: string
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({
  icon,
  badgeContent,
  color,
  size = 'size-7',
}) => {
  return (
    <div className='relative flex'>
      <IonIcon icon={icon} className={size}></IonIcon>
      <IonBadge
        color={color}
        className='absolute bottom-3 left-4 h-5 w-5 rounded-full flex items-center justify-center'
      >
        <span>{badgeContent}</span>
      </IonBadge>
    </div>
  )
}

export default IconWithBadge
