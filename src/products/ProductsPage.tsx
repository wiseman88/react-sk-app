import { IonContent, IonPage, IonSearchbar, IonSpinner } from '@ionic/react'
import ProductsList from './ProductsList'
import { useEffect, useState } from 'react'
import ProductsHeader from './ProductsHeader'
import useFetchProducts from './useFetchProducts'
import { alertCircleOutline } from 'ionicons/icons'
import Alert from '../components/Alert'
import { normalizeText } from '../_shared/utilities'
import ProductsNotFound from './ProductsNotFound'

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

  const onSearch = (query: string) => {
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
        <div className='mt-4'>
          <IonSearchbar
            placeholder='Čo za teba vybavíme?'
            value={searchQuery}
            onIonInput={(e) => onSearch(e.detail.value!)}
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
          ) : filteredProducts && filteredProducts.length > 0 ? (
            <ProductsList products={filteredProducts} />
          ) : (
            <ProductsNotFound query={searchQuery} />
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ProductsPage
