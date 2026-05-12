"use client"
import { useFormStatus } from "react-dom"  // ← De react-dom

export function SubmitButton() {
  const { pending } = useFormStatus()  // ← Detecta si el form está enviando

  return (
    <input
      type="submit"
      className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold disabled:opacity-70"
      value={pending ? "Realizando Pedido..." : "Confirmar Pedido"}
      disabled={pending}
    />
  )
}