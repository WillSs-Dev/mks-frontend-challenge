import shoppingBag from '../../images/shopping-bag.svg';
import IProduct from '../../interfaces/product';

import { Container, Card } from './style';

interface ProductsListProps {
  products: IProduct[];
}

const ProductsList = (props: ProductsListProps) => {
  const { products } = props;

  return (
    <Container>
      {products.length !== 0 &&
        products.map((product) => (
          <Card key={product.id}>
            <img src={product.photo} alt={product.name} />
            <div>
              <span>{product.name}</span>
              <div>
                <span>{`R$${product.price}`}</span>
              </div>
            </div>
            <p>{`${product.description.substring(0, 100)}...`}</p>
            <button>
              <img
                src={shoppingBag}
                alt={`Adicionar ${product.name} ao carrinho`}
              />
              COMPRAR
            </button>
          </Card>
        ))}
    </Container>
  );
};

export default ProductsList;
