import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Products from "./products";
import Stores from "./stores";
import SideBar from "./sidebar";
import Home from "./home";
import AddStore from "./addStore";
import AddProduct from "./addProduct";
import Report from "./report";
import StoreEdit from "./storeEdit";
import Transactions from "./transactions";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="row">
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" component={Products}/>
          <Route path="/stores" component={Stores} />
          <Route path="/add-store" component={AddStore} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/reports" component={Report} />
          <Route path="/store-edit/:id" component={StoreEdit} />
          <Route path="/transactions/store/:id" component={Transactions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
