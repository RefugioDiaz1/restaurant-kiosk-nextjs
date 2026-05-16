"use server";

import { revalidatePath } from 'next/cache'
import { prisma } from "@/src/lib/prisma";
import { OrderIdSchema } from "@/src/schema";

export async function completeOrder(formData: FormData) {

    const data = {
        orderId: formData.get('order_id')!
    }

    const result = OrderIdSchema.safeParse(data)

    if(!result.success){
        return {
            success: false,
            message: 'Datos inválidos'
        }
    }

    try {

        await prisma.order.update({
            where: {
                id: result.data.orderId
            },
            data: {
                status: true,
                orderReadyAt: new Date()
            }
        })

        revalidatePath("/admin/orders")

        return {
            success: true,
            message: 'Orden completada correctamente'
        }

    } catch (error) {

        return {
            success: false,
            message: 'Hubo un error'
        }
    }
}