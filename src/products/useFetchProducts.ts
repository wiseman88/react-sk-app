import { useState } from "react"
import { Product } from "../_shared/types"

const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchProducts = async () => {
        setLoading(true)
        setError(false)

        try {
            const response = await fetch('/mock/products/products.GET.json')
            const data = await response.json()
            setProducts(data.products)
            setFilteredProducts(data.products)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    return {
        loading, error, products, filteredProducts, setFilteredProducts, fetchProducts
    }
}

export default useFetchProducts