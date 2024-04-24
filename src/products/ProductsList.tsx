import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonList,
} from '@ionic/react'
import ProductItem from '../product/ProductItem'
import { Link } from 'react-router-dom'
import { Product } from '../_shared/types'
import { callOutline } from 'ionicons/icons'

type ProductsListProps = {
  products: Product[]
  query: string
}

const ProductsList = (props: ProductsListProps) => {
  return (
    <>
      {props.products && props.products.length > 0 ? (
        <IonList>
          {props.products.map((product: Product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductItem
                key={product.id}
                productTitle={product.name}
                categories={product.categories.join(', ')}
                fees={product.fees}
                additionalFees={product.additionalFees}
              />
            </Link>
          ))}
        </IonList>
      ) : (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{props.query}?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <p>
              Budeme pridávať ďalšie služby, ak by ste mali o takúto službu
              záujem, radi by sme sa vás spýtali na viac informácií.
            </p>
            <p>Môžeme vás kontaktovať?</p>
          </IonCardContent>
          <div className='flex justify-center'>
            <IonButton fill='clear'>Nie</IonButton>
            <IonButton fill='clear'>Napíšte</IonButton>
            <IonButton fill='clear'>
              <p className='flex gap-1'>
                Zavolajte <IonIcon icon={callOutline}></IonIcon>
              </p>
            </IonButton>
          </div>
        </IonCard>
      )}
    </>
  )
}

export default ProductsList
