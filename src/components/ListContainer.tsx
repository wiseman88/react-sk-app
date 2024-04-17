import { IonList } from '@ionic/react'
import ListItem from './ListItem'
import data from '../../public/data/services.json'
import { Link } from 'react-router-dom'
import { getCategories } from '../utils/helpers'

const ListContainer = () => {
  return (
    <>
      <IonList>
        {data &&
          data.list.map((item) => (
            <Link to={`/services/${item.id}`} key={item.id}>
              <ListItem
                key={item.id}
                serviceTitle={item.name}
                categories={getCategories(item.categories, data)}
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
