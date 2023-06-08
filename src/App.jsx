import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home, Layout, Shop, Auth } from "./routes";
import './styles.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="sign-in" element={<Auth/>} />
      </Route>
    </Routes>
  );
};

export default App;
