import { Categories } from "../../../components";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Clothing',
      imgUrl: 'https://i.ibb.co/sqjJqSB/Clothing.jpg',
    },
    {
      id: 2,
      title: 'Electronics',
      imgUrl: 'https://i.ibb.co/MGXpq1w/Electronics.jpg',
    },
    {
      id: 3,
      title: 'Health and Beauty',
      imgUrl: 'https://i.ibb.co/bb0tRFW/Beauty.jpg',
    },
    {
      id: 4,
      title: 'Sports and Outdoor',
      imgUrl: 'https://i.ibb.co/6JRvxgt/Sports.jpg',
    },
    {
      id: 5,
      title: 'Toys and Games',
      imgUrl: 'https://i.ibb.co/7bSFJFB/Toys.jpg',
    },
    {
      id: 6,
      title: 'Books and More',
      imgUrl: 'https://i.ibb.co/BnkS5Z3/Books.jpg',
    },
  ];
  return (
    // Categories Container
    <div className="h-screen items-center justify-center flex">
      {/* Category Container */}
      <Categories categories={categories} />
    </div>
  );
};

export default Home;
