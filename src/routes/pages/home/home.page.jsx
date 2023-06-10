import { Categories } from "../../../components";

import CATEGORIES from '../../../constants/categories.json'

const Home = () => {
  
  return (
    // Categories Container
    <div className="h-screen items-center mx-auto flex">
      {/* Category Container */}
      <Categories categories={CATEGORIES} />
    </div>
  );
};

export default Home;
