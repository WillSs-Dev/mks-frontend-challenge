export default interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string | number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}