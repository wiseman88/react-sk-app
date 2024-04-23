import { IonList } from '@ionic/react'
import ProductItem from '../product/ProductItem'
import { Link } from 'react-router-dom'
import { Product } from '../_shared/types'

type ProductsListProps = {
  products: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <>
      <IonList>
        {products &&
          products.map((product: Product) => (
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
    </>
  )
}

export default ProductsList
