import { IonList } from '@ionic/react'
import ProductsItem from './ProductsItem'
import { Link } from 'react-router-dom'
import { Product } from '../_shared/types'

type Props = {
  products: Product[]
}

const ProductsList = (props: Props) => {
  return (
    <>
      <IonList>
        {props.products.map((product: Product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductsItem
              key={product.id}
              productTitle={product.name}
              categories={product.categories.join(', ')}
              fees={product.fees}
              additionalFees={product.additionalFees}
            />
          </Link>
        ))}
      </IonList>
    </>
  )
}

export default ProductsList
