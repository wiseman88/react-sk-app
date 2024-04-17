import { IonList } from '@ionic/react'
import ListItem from './ListItem'
// import data from '../../public/data/services.json'
import { Link } from 'react-router-dom'
import { getCategories } from '../utils/helpers'
import useDataStore from '../store'

const ListContainer = () => {
  const { serviceData } = useDataStore()

  return (
    <>
      <IonList>
        {serviceData &&
          serviceData.list.map((item) => (
            <Link to={`/services/${item.id}`} key={item.id}>
              <ListItem
                key={item.id}
                serviceTitle={item.name}
                categories={getCategories(item.categories, serviceData)}
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
