import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react"
import { chevronForward, locationOutline } from "ionicons/icons"

type Props = {
    productServices: string[]
}

const ProductServiceList = (props: Props) => {
    return (
        <>
            <div className='mt-6'>
                <h2 className='text-xl font-bold mb-4'>Súvisiace služby:</h2>
                <IonList>
                    {props.productServices.map((service, key) => (
                        <IonItem key={key}>
                            <IonIcon
                                aria-hidden='true'
                                icon={locationOutline}
                                slot='start'
                            ></IonIcon>
                            <IonLabel>{service}</IonLabel>
                            <IonIcon
                                aria-hidden='true'
                                color='medium'
                                icon={chevronForward}
                                slot='end'
                            ></IonIcon>
                        </IonItem>
                    ))}
                </IonList>
            </div>
        </>
    )
}

export default ProductServiceList