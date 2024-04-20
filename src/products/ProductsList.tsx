import { IonList } from '@ionic/react'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  categories: string[]
  fees: number
  additionalFees: number
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mock/products.json')
        const data = await response.json()
        setProducts(data.list)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <IonList>
        {products &&
          products.map((product: Product) => (
            <Link to={`/services/${product.id}`} key={product.id}>
              <ProductItem
                key={product.id}
                serviceTitle={product.name}
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
