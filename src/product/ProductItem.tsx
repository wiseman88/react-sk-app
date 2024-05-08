import { IonButton, IonIcon } from "@ionic/react"
import { arrowDown, cartOutline } from "ionicons/icons"
import { Product } from "../_shared/types"
import ProductOrderList from "./ProductOrderList"
import ProductServiceList from "./ProductServiceList"
import ProductInfoList from "./ProductInfoList"

type Props = {
    product: Product
    onOrderRequest: () => void
}

const ProductItem = (props: Props) => {
    return (
        <>
            <div className='flex items-center justify-between gap-4'>
                <div>
                    <h1 className='text-2xl font-bold mb-4'>{props.product.name}</h1>
                    <p className='uppercase text-gray-400'>
                        {props.product.categories.join(', ')}
                    </p>
                </div>
                <div className='text-right'>
                    <h3 className='text-2xl font-semibold text-red-500'>
                        {props.product.fees}€
                    </h3>
                    <p>+ poplatky {props.product.additionalFees} €</p>
                </div>
            </div>
            <ProductServiceList productServices={props.product.productServices} />
            <IonButton expand='block' onClick={props.onOrderRequest} className='mt-6'>
                <IonIcon slot='start' icon={cartOutline}></IonIcon>
                Pokračovať na formulár
            </IonButton>
            <ProductOrderList />
            <IonButton expand='block' fill='outline' className='mt-6'>
                <IonIcon slot='start' icon={arrowDown}></IonIcon>
                Ako to prebieha?
            </IonButton>
            <ProductInfoList productInfo={props.product.productInfo} />
        </>
    )
}

export default ProductItem