export type CartItem = {
   id: string;
   title: string;
   price: number;
   imageUrl: string;
   desc: string;
   count: number;
}

export interface CartSliseState {
   totalPrice: number;
   items: CartItem[];
}