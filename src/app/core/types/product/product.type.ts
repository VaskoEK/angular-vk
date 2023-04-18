export type Product = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type ProductsByCategories = {
    smartphones: Product[],
    laptops: Product[],
    fragrances: Product[],
    skincare: Product[],
    groceries: Product[],
    "home-decoration": Product[]
}

export type ProductResponse = {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}
