import React ,{useEffect,useState}from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import Login from '../containers/Auth/Login';
import Register from '../containers/Auth/Register';
import Profile from '../containers/Auth/Profile';

import Product from '../containers/Product';
import ProductDetails from '../containers/ProductDetails';
import Brands from '../containers/Brands';
import WishList from '../containers/WishList';
import Cart from '../containers/Cart';

import PaymentAddress from '../containers/PaymentAddress';
import MyOrder from '../containers/MyOrder';
import OrderDetails from '../containers/OrderDetails';
import OrderSuccess from '../containers/OrderSuccess';
import TrackPackage from '../containers/TrackPackage';

import Company from '../containers/Company';
import CompanyReview from '../containers/CompanyReview';
import CustomerSupport from '../containers/CustomerSupport';
import CustomerRaise from '../containers/CustomerRaise';

import MakeSeller from '../containers/Seller';
import Wallet from '../containers/wallet';


export default function AllRoute() {
    return (
        <div>
           <Switch>
               <Route path="/login"   component={Login} />
               <Route path="/register"   component={Register} />
               <Route path="/product"   component={Product} />
               <Route path="/product-details"   component={ProductDetails} />
               <Route path="/brands"   component={Brands} />
               <Route path="/wish-list"   component={WishList} />
               <Route path="/cart"   component={Cart} />
               <Route path="/address"   component={PaymentAddress} />
               
               <Route path="/profile"   component={Profile} />
               <Route path="/orders"   component={MyOrder} />
               <Route path="/details"   component={OrderDetails} />
               <Route path="/track"   component={TrackPackage} />
               <Route path="/success"   component={OrderSuccess} />
               
               <Route path="/company"   component={Company} />
               <Route path="/company-review"   component={CompanyReview} />
               <Route path="/support"   component={CustomerSupport} />
               <Route path="/raise"   component={CustomerRaise} />
              
               <Route path="/seller"   component={MakeSeller} />
               <Route path="/wallet"   component={Wallet} />
           </Switch>
        </div>
    )
}
