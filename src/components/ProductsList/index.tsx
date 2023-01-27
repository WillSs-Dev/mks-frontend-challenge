import shoppingBag from '../../images/shopping-bag.svg';
import { IProductsListProps } from '../../interfaces/props';

import { Container, Card } from './style';



const ProductsList = (props: IProductsListProps) => {
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
