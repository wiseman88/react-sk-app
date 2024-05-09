import { InputChangeEventDetail, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonInput } from "@ionic/react"
import { chatbubbleOutline } from "ionicons/icons"

type FormData = {
    name: string
}

type Props = {
    formData: FormData
    status: string
    onChange: (e: CustomEvent<InputChangeEventDetail>) => void
}

const OrderStep = (props: Props) => {
    const setColor = () => {
        switch (props.status) {
            case 'vyplnte':
                return 'orange'
            case 'spracovanie':
                return 'blue'
            case 'v poriadku':
                return 'green'
            case 'chyba':
                return 'red'
            default:
                return 'gray'
        }
    }

    const setName = () => {
        switch (props.status) {
            case 'vyplnte':
                return 'name'
            case 'spracovanie':
                return 'email'
            case 'v poriadku':
                return 'subjects'
            case 'chyba':
                return 'files'
            default:
                return 'services'
        }
    }

    const setLabel = () => {
        switch (props.status) {
            case 'vyplnte':
                return 'Nazov'
            case 'spracovanie':
                return 'Email'
            case 'v poriadku':
                return 'Subjekt'
            case 'chyba':
                return 'Subory'
            default:
                return 'Sluzby'
        }
    }

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
                        label={setLabel()}
                        name={setName()}
                        value={props.formData.name}
                        onIonInput={props.onChange}
                    ></IonInput>
                </div>
                <IonCardContent className={`bg-${setColor()}-100 text-${setColor()}-600`}>
                    {props.status}
                </IonCardContent>
            </IonCard>
            <IonCard className={`bg-${setColor()}-100 mb-8`}>
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