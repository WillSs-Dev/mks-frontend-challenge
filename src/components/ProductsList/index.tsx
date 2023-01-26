import IProduct from '../../interfaces/product';

import { Container } from './style';

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList = (props: ProductsListProps) => {
  const { products } = props;

  return (
    <Container>
      {products.length !== 0 &&
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
    </Container>
  );
};

export default ProductsList;
