import {
  IonContent,
  IonPage,
} from '@ionic/react'
import { useHistory, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Product } from '../_shared/types'
import {
  alertCircleOutline,
} from 'ionicons/icons'
import ProductHeader from './ProductHeader'
import Alert from '../components/Alert'
import ProductItem from './ProductItem'

type RouteParams = {
  id: string
}

const ProductPage = () => {
  const { id } = useParams<RouteParams>()
  const [product, setProduct] = useState<Product>()
  const [orderId, setOrderId] = useState<number>()
  const [fetchError, setFetchError] = useState<string>()
  const history = useHistory()

  const onOrderRequest = async () => {
    try {
      const response = await fetch('/mock/products/create.POST.json')

      const data = await response.json()

      const oId = data[0].order_id

      setOrderId(oId)

      history.push(`/orders/${oId}`)
    } catch (error) {
      console.error('Error fetching order id:', error)
    }
  }

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/mock/products/${id}.GET.json`)
      const data = await response.json()
      const product = data[0]
      if (product) {
        setProduct(product)
      } else {
        setFetchError(`Product with ID ${id} not found`)
      }
    } catch (error) {
      setFetchError(`Error fetching products: ${error}`)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [id])

  return (
    <IonPage>
      <ProductHeader productName={product?.name} />
      <IonContent fullscreen>
        <div className='p-6'>
          {
            fetchError ? (
              <Alert
                icon={alertCircleOutline}
                text='Nepodarilo sa najst vami zvolený produkt'
                bgColor='bg-orange-100'
                textColor='text-orange-600'
              />
            ) : (
              product && <ProductItem product={product} onOrderRequest={onOrderRequest} />
            )
          }
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductPage
