import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ProductsPage.css'
import Header from '../components/Header'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  categories: string[]
  fees: number
  additionalFees: number
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mock/products.json')
        const data = await response.json()
        setProducts(data.list)
        setFilteredProducts(data.list)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchData()
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

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
          <IonSearchbar
            placeholder='Čo za teba vybavíme?'
            value={searchQuery}
            onIonInput={(e) => handleSearch(e.detail.value!)}
          />
          <ProductsList products={filteredProducts} />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductsPage
