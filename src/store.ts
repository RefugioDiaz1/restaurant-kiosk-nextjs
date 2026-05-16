import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "./generated/prisma";
import { persist } from "zustand/middleware";

interface Store {
  order: OrderItem[];
  addToCart: (product: Product) => void;
  increaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
  clearOrder: () => void
}

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      order: [],
      addToCart: (product) => {
        
        const data = {
        id: product.id,
        name: product.name,
        price: product.price
        }

        // void _categoryId;
        // void _image;  

        let order: OrderItem[] = [];

        if (get().order.find((item) => item.id === product.id)) {
          order = get().order.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  subtotal: item.price * (item.quantity + 1),
                }
              : item,
          );
        } else {
          order = [
            ...get().order,
            {
              ...data,
              quantity: 1,
              subtotal: 1 * product.price,
            },
          ];
        }

        set(() => ({
          order,
        }));
      },
      increaseQuantity: (id) => {
        set((state) => ({
          order: state.order.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity == MAX_ITEMS ? 1 : item.quantity + 1,
                  subtotal:
                    item.price *
                    (item.quantity == MAX_ITEMS ? MAX_ITEMS : item.quantity + 1),
                }
              : item,
          ),
        }));
      },
      
      decreaseQuantity: (id) => {
        const order = get().order.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity == MIN_ITEMS ? 1 : item.quantity - 1,
                subtotal:
                  item.price *
                  (item.quantity == MIN_ITEMS ? MIN_ITEMS : item.quantity - 1),
              }
            : item,
        );

        set(() => ({
          order,
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          order: state.order.filter((item) => item.id !== id),
        }));
      },

      clearOrder: ()=>{
        set(()=>({
            order: []
        }))
      }

    }),
    {
      name: "quiosco-order",
    },
  ),
);
