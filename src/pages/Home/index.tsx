import { useState, useEffect } from 'react';

import getProducts from '../../API/products';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductsList from '../../components/ProductsList';
import IProduct from '../../interfaces/product';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const mapResponseToState = async () => {
      getProducts().then((response) => {
        setProducts(response);
      });
    };
    mapResponseToState();
  }, []);

  return (
  <>
    <Header />
    <ProductsList products={products} />
    <Footer />
  </>
)};

export default Home;
