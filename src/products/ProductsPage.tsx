import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ProductsPage.css'
import Header from '../components/Header'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'

const HomePage: React.FC = () => {
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
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Slovensko 2.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='mt-4'>
          <ProductsList products={products} />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
