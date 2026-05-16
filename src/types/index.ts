import { Order, OrderProducts, Product } from "../generated/prisma"

export type OrderItem = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number
    subtotal: number
}
 
export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}

// export type ProductWithCategory = Product & {
//     category : Category
// }