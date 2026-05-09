import { Product } from "@/src/generated/prisma"
import { formatCurrency } from "@/src/utils"
import Image from "next/image"

type ProducCardProps = {
    product : Product
}

export default function ProductCard({product} : ProducCardProps) {
  return (
    <div className="border bg-white ">

        <Image 
        width={400}
        height={500}
        src={`/products/${product.image}.jpg`}
        alt={`Imagen platillo ${product.name} `}
        quality={75}
        >


        </Image>
        
        <div className="p-5">
            <h3 className="text-2xl font-bol">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatCurrency(product.price)}
            </p>
        </div>

    </div>
  )
}
