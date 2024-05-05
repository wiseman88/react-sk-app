import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { useHistory, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Product } from '../_shared/types'
import {
  alertCircleOutline,
  arrowDown,
  cartOutline,
  chevronForward,
  locationOutline,
} from 'ionicons/icons'
import ProductHeader from './ProductHeader'
import Alert from '../components/Alert'

type RouteParams = {
  id: string
}

const ProductPage = () => {
  const { id } = useParams<RouteParams>()
  const [product, setProduct] = useState<Product | null>(null)
  const [orderId, setOrderId] = useState<number>()
  const l = 13
  const history = useHistory()

  const ordersList = []
  for (let i = 1; i < l; i++) {
    i != l - 1
      ? ordersList.push(
          <p className='text-blue-500' key={i}>
            Objednávka {i},&nbsp;
          </p>
        )
      : ordersList.push(
          <p className='text-blue-500' key={i}>
            Objednávka {i}
          </p>
        )
  }

  const handleOrderRequest = async () => {
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/mock/products/${id}.GET.json`)
        const data = await response.json()
        const product = data[0]
        if (product) {
          setProduct(product)
        } else {
          console.error(`Product with ID ${id} not found`)
        }
      } catch (error) {}
    }
    fetchProduct()
  }, [id])

  return (
    <IonPage>
      <ProductHeader productName={product?.name} />
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{product?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='p-6'>
          {product ? (
            <div>
              <div className='flex items-center justify-between gap-4'>
                <div>
                  <h1 className='text-2xl font-bold mb-4'>{product.name}</h1>
                  <p className='uppercase text-gray-400'>
                    {product.categories.join(', ')}
                  </p>
                </div>
                <div className='text-right'>
                  <h3 className='text-2xl font-semibold text-red-500'>
                    {product.fees}€
                  </h3>
                  <p>+ poplatky {product.additionalFees} €</p>
                </div>
              </div>
              <div className='mt-6'>
                <h2 className='text-xl font-bold mb-4'>Súvisiace služby:</h2>
                <IonList>
                  {product.productServices.map((service, key) => (
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
              <div className='mt-6'>
                <IonButton expand='block' onClick={handleOrderRequest}>
                  <IonIcon slot='start' icon={cartOutline}></IonIcon>
                  Pokračovať na formulár
                </IonButton>
              </div>
              <div className='flex flex-wrap justify-center mt-6'>
                {ordersList}
              </div>
              <div className='mt-6'>
                <IonButton expand='block' fill='outline'>
                  <IonIcon slot='start' icon={arrowDown}></IonIcon>
                  Ako to prebieha?
                </IonButton>
              </div>
              <div className='mt-6'>
                {product.productInfo.map((info, key) => (
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
            </div>
          ) : (
            <Alert
              icon={alertCircleOutline}
              text='Nepodarilo sa najst vami zvolený produkt'
              bgColor='bg-orange-100'
              textColor='text-orange-600'
            />
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductPage
