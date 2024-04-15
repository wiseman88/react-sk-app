interface Category {
    id: number
    name: string
}

interface ServiceData {
    categories: Category[]
}

const getCategoryName = (categoryId: number, data: ServiceData) => {
    const category = data?.categories.find((cat) => cat.id === categoryId)
    return category ? category.name : ''
}

const getCategories = (categories: number[], data: ServiceData): string => {
    return categories
        .map((catId) => {
            const category = getCategoryName(catId, data)
            return category ? category : ''
        })
        .join(', ')
}

export { getCategoryName, getCategories }