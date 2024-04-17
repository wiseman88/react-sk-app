import { create } from 'zustand'
import data from '../../public/data/services.json'

interface Category {
    id: number
    name: string
}

interface Service {
    id: number
    name: string
    categories: number[]
    fees: number
    additionalFees: number
}

interface ServiceData {
    categories: Category[]
    list: Service[]
}

interface StoreState {
    serviceData: ServiceData | null
}


const useDataStore = create<StoreState>((set) => ({
    serviceData: data as ServiceData,
}))

export default useDataStore