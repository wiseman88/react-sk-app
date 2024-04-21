export type Product = {
    id: number
    name: string
    categories: string[]
    fees: number
    additionalFees: number
    productServices: string[]
    productInfo: {
        title: string;
        content: string[];
    }[]
};