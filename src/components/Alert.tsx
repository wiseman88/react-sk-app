import { IonIcon } from '@ionic/react'

type AlertProps = {
  icon: string
  text: string
  bgColor?: string
  textColor?: string
}

const Alert = (props: AlertProps) => {
  return (
    <p
      className={`flex items-center gap-3 m-2 p-2 rounded ${props.bgColor} ${props.textColor}`}
    >
      <IonIcon size='large' icon={props.icon}></IonIcon>
      <span>{props.text}</span>
    </p>
  )
}

export default Alert
