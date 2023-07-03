import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import {shirts , jacket, jeans , watches} from "./data";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store';


function App() {
 
  let persistor = persistStore(store);
  
  return (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
            <Router>
              <Routes>

              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/shirts" element={<ProductList product={shirts}/>} />
              <Route exact path="/jacket" element={<ProductList product={jacket}/>} />
              <Route exact path="/jeans" element={<ProductList product={jeans}/>} />
              <Route exact path="/watches" element={<ProductList product={watches}/>} />

              <Route exact path="/single" element={<SingleProduct />} />
                    
              </Routes>
              
            </Router>
     </PersistGate>
  </Provider>
  );
}

export default App;


