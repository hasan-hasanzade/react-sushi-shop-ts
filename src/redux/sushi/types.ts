type Sushi = {
   id: string; 
   title: string; 
   price: number; 
   imageUrl: string; 
   desc: string;
 }
 
export interface SushiSliceState {
   items: Sushi[];
   status: 'loading' | 'success' | 'error';
  }

export type FetchSushiArgs = Record<string, string>;