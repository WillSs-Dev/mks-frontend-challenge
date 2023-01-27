import { useState, useEffect } from 'react';

import getProducts from '../../API/products';
import CartSidebar from '../../components/CartSidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import IProduct from '../../interfaces/product';

import { Container } from './style';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const mapResponseToState = async () => {
      getProducts().then((data) => {
        setProducts(data);
      });
    };
    mapResponseToState();
  }, []);

  return (
  <Container>
    <CartSidebar />
    <Header />
    <ProductsList products={products} />
    <Footer />
  </Container>
)};

export default Home;
