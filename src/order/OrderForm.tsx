import { IonAlert, IonButton, IonFab } from "@ionic/react"
import OrderStep from "./OrderStep"
import useOrder from "./useOrder"
import Alert from "../components/Alert"


const OrderForm = () => {
    const { formData, onChange, saveInputs, fetchOrderSteps, error } = useOrder()

    return (
        <>
            {error &&
                <Alert text={error} bgColor="bg-red-100" textColor='text-red-500' />
            }
            <form onSubmit={saveInputs}>
                <OrderStep
                    name="name" label="Nazov" value={formData.name.value}
                    status={formData.name.status}
                    onChange={onChange}
                />
                <OrderStep
                    name="email" label="Email" value={formData.email.value}
                    status={formData.email.status}
                    onChange={onChange}
                />
                <OrderStep
                    name="subjects" label="Subjects" value={formData.subjects.value}
                    status={formData.subjects.status}
                    onChange={onChange}
                />
                <OrderStep
                    name="files" label="Files" value={formData.files.value}
                    status={formData.files.status}
                    onChange={onChange}
                />
                <OrderStep
                    name="service" label="service" value={formData.service.value}
                    status={formData.service.status}
                    onChange={onChange}
                />
                <IonFab className='py-6 px-2 w-full bg-gray-100 fixed bottom-0 right-0'>
                    <IonButton id='submitBtn' type='submit' expand='block'>
                        odoslat na spracovanie
                    </IonButton>
                    <IonAlert
                        trigger='submitBtn'
                        header='Chceš pokračovať v upravovaní?'
                        buttons={[
                            {
                                text: 'Áno',
                                handler: fetchOrderSteps,
                            },
                            {
                                text: 'Nie',
                            },
                        ]}
                    ></IonAlert>
                </IonFab>
            </form>
        </>
    )
}

export default OrderForm