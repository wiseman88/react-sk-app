import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react"

type ProductInfo = {
    title: string
    content: string[]
}

type Props = {
    productInfo: ProductInfo[]
}

const ProductInfoList = (props: Props) => {
    return (
        <>
            <div className='mt-6'>
                {props.productInfo.map((info, key) => (
                    <IonCard key={key} className='mt-6'>
                        <IonCardHeader>
                            <IonCardTitle className='text-2xl font-bold'>
                                {info.title}
                            </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <ul className='list-disc ml-4'>
                                {info.content.map((text, key) => (
                                    <li key={key}>{text}.</li>
                                ))}
                            </ul>
                        </IonCardContent>
                    </IonCard>
                ))}
            </div>
        </>
    )
}

export default ProductInfoList