
"use client"
import { Category } from "@/src/generated/prisma";
import Link from "next/link";
import Image from "next/image";
import {useParams} from 'next/navigation'

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category}: CategoryIconProps) {

  const params = useParams<{category: string}>()
  
  return (
    <div
      className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex items-center cursor-pointer hover:bg-slate-200 gap-4 w-full 
        border-t border-gray-200 p-3 last-of-type:border-b
        `}
    
    >
      <div className="relative size-16">
        <Image src={`/icon_${category.slug}.svg`}
        alt={`Imagen de la Categoría: ${category.name}`}
        fill>

        </Image>
      </div>
      <Link href={`/order/${category.slug}`} 
      className="text-lg font-bold">
        
        {category.name}
      </Link>
    </div>
  );
}
