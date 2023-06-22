import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home, Layout, Shop, Auth, Checkout } from "./routes";
import './styles.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Auth/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;
