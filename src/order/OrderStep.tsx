import { InputChangeEventDetail, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonInput } from "@ionic/react"
import { chatbubbleOutline } from "ionicons/icons"

type Props = {
    value: string
    label: string,
    name: string,
    status: string
    onChange: (e: CustomEvent<InputChangeEventDetail>) => void
}

const OrderStep = (props: Props) => {
    const setStatusDetails = () => {
        switch (props.status) {
            case 'vyplnte':
                return {
                    bgColor: 'bg-orange-100',
                    textColor: 'text-orange-500',
                }
            case 'spracovanie':
                return {
                    bgColor: 'bg-blue-100',
                    textColor: 'text-blue-500',
                }
            case 'v poriadku':
                return {
                    bgColor: 'bg-green-100',
                    textColor: 'text-green-500',
                }
            case 'chyba':
                return {
                    bgColor: 'bg-red-100',
                    textColor: 'text-red-500',
                }
            default:
                return {
                    bgColor: 'bg-gray-100',
                    textColor: 'text-gray-500',
                }
        }
    }

    const { bgColor, textColor } = setStatusDetails()

    return (
        <>
            <IonCard className='mb-8'>
                <IonCardHeader className=''>
                    <IonCardTitle className='flex justify-between'>
                        Nazov s.r.o.
                        <IonIcon
                            color='primary'
                            size='medium'
                            icon={chatbubbleOutline}
                        ></IonIcon>
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Zadajte nazov vasej firmy, a skontrolujte si, ci uz nazov
                    neexistuje na orsr.sk
                </IonCardContent>
                <div className='p-4'>
                    <IonInput
                        label={props.label}
                        name={props.name}
                        value={props.value}
                        onIonInput={props.onChange}
                    ></IonInput>
                </div>
                <IonCardContent className={`${bgColor}` + ' ' + `${textColor}`}>
                    {props.status}
                </IonCardContent>
            </IonCard>
            <IonCard className={`${bgColor} mb-8`}>
                <IonCardHeader className=''>
                    <IonCardTitle className='flex justify-between'>
                        Card without input color
                        <IonIcon
                            color='primary'
                            size='medium'
                            icon={chatbubbleOutline}
                        ></IonIcon>
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                    neque quasi temporibus?
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default OrderStep