import { IonList } from '@ionic/react'
import ListItem from './ListItem'
import data from '../data/services.json'
import { Link } from 'react-router-dom'

const ListContainer = () => {
  const getCategoryName = (categoryId: number) => {
    const category = data?.categories.find((cat) => cat.id === categoryId)
    return category ? category.name : ''
  }

  const getCategories = (categories: number[]): string => {
    return categories
      .map((catId) => {
        const category = getCategoryName(catId)
        return category ? category : ''
      })
      .join(', ')
  }

  return (
    <>
      <IonList>
        {data &&
          data.list.map((item) => (
            <Link to={`/services/${item.id}`} key={item.id}>
              <ListItem
                key={item.id}
                serviceTitle={item.name}
                categories={getCategories(item.categories)}
                fees={item.fees}
                additionalFees={item.additionalFees}
              />
            </Link>
          ))}
      </IonList>
    </>
  )
}

export default ListContainer
