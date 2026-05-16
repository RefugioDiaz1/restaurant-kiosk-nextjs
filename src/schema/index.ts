import {z} from 'zod'

export const OrderSchema = z.object({
    name: z.string().min(1, 'Tu nombre es Obligatorio'),
    total: z.number()
            .min(1, 'Hay Errores en la orden'),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform((value)=> parseInt(value))
                .refine(value => value > 0, {message: "Hay errores"})
})

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message : 'La Búsqueda no puede ir vacía'})
})

export const ProductShema = z.object({
    name: z.string()
            .trim()
            .min(1,{message : 'El nombre del producto no puede ir vacío'}),
    price: z.string()
            .trim()
            .transform((value) => parseFloat(value))
            .refine((value) => value > 0, {message: 'El precio debe ser mayor a 0'}),
    categoryId: z.string()
                    .trim()
                    .transform((value) => parseInt(value))
                    .refine((value) => value > 0, {message: 'La categoria es obligatoria'}),
    image: z.string()
            .min(1, {message: 'La imagen es obligatoria'})
})

//Para editar un producto, validar que sea numero en los parametros
export const ParamsSchema = z.object({
    id : z.coerce.number().int().positive()
})