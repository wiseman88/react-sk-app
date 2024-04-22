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
import { Product } from '../utils/types'

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

  const normalizeText = (inputString: string): string => {
    const regex: RegExp = /[čšžťľťďäáéíĺňóôöőúýů]/g
    const charMap: { [key: string]: string } = {
      č: 'c',
      š: 's',
      ž: 'z',
      ť: 't',
      ľ: 'l',
      ď: 'd',
      ä: 'a',
      á: 'a',
      é: 'e',
      í: 'i',
      ĺ: 'l',
      ň: 'n',
      ó: 'o',
      ô: 'o',
      ö: 'o',
      ő: 'o',
      ú: 'u',
      ý: 'y',
      ů: 'u', // Added 'ů' as it's used in some Slovak words
    }

    return inputString.replace(regex, (match) => charMap[match])
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = products.filter((product) =>
      normalizeText(product.name).toLowerCase().includes(query.toLowerCase())
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
