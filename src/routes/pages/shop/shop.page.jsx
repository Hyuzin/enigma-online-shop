import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import ProductCard from '../../../components/product/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="mt-20 grid grid-cols-4 max-w-6xl mx-auto gap-5">
      {products.map(products => {
        return <ProductCard key={products.id} products={products} />;
      })}
    </div>
  );
};

export default Shop;
