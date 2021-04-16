export interface User {
    title: string;
    id: number;
  }

  
export interface Purchase {
    price: number,
    customer: User,
}