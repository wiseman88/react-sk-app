import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'
import ProductsHeader from './ProductsHeader'
import useFetchProducts from './useFetchProducts'
import { alertCircleOutline } from 'ionicons/icons'
import Alert from '../components/Alert'

const ProductsPage = () => {
  const {
    loading,
    error,
    products,
    filteredProducts,
    setFilteredProducts,
    fetchProducts,
  } = useFetchProducts()
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    fetchProducts()
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
      <ProductsHeader />
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
          {loading ? (
            <div className='absolute h-screen inset-0 -z-10 flex items-center justify-center'>
              <IonSpinner color='primary'></IonSpinner>
            </div>
          ) : error ? (
            <Alert
              icon={alertCircleOutline}
              text='Vyskytla sa chyba pri nacitani produktov'
              bgColor='bg-red-100'
              textColor='text-red-600'
            />
          ) : (
            <ProductsList products={filteredProducts} query={searchQuery} />
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductsPage
