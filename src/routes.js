import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Account from './Components/Account/Account/Account.js';
import Cart from './Components/Cart/Cart.js';
import Checkout from './Components/Checkout/Checkout.js';
import Departments from './Components/Departments/Departments.js';
import Home from './Components/Home/Home.js';
import Orders from './Components/Sales/Orders/Orders.js';
import Private from './Components/Account/Private/Private.js';
import Products from './Components/Products/Products.js';

export default(
    <Switch>
        <Route exact path ='/' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/orders' component={Orders} />
        <Route path='/account' component={Account} />
        <Route path='/private' component={Private} />
        <Route path='/products/:id' component={Products} />
        <Route path='/departments' component={Departments} />
        <Route path='/checkout' component={Checkout} />
    </Switch>

)