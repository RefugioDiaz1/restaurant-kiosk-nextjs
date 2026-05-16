"use client";
import { SearchSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function ProductSearchForm() {
  const router = useRouter();

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };

    const response = SearchSchema.safeParse(data);
    if (!response.success) {
      response.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
    }
    
    router.push(`/admin/products/search?search=${response.data?.search}`);
  };

  return (
    <form className="flex items-center" action={handleSearchForm}>
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
        name="search"
      />

      <input
        type="submit"
        className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
      />
    </form>
  );
}
