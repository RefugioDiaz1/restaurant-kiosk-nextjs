"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductShema } from "@/src/schema"
import { revalidatePath } from "next/cache"


export async function UpdateProduct(data: unknown, id: number)
{
     try {
            const result = ProductShema.safeParse(data)
    
            if(!result.success){
            return {
                errors: result.error.issues
            }
        }
    
        await prisma.product.update({
            where: {
                id
            } ,
            data: result.data
        })

        revalidatePath('/admin/products')
    
        } catch (error) {
            console.log(error)
        }
        
}