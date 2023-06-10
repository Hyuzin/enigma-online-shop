import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import ProductCard from '../../../components/product/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="pt-20 grid grid-cols-4 max-w-6xl mx-auto gap-5">
      {products.map(({ id, name, imageUrl, price }) => {
        return <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} />;
      })}
    </div>
  );
};

export default Shop;
