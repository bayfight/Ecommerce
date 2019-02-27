import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home/home';
import SignUp from '../pages/signUp/signUp';
import Login from '../pages/login/login';
import Coffe from '../pages/coffe/roastedbean/coffe';
import DetailCategory from '../pages/coffe/roastedbean/detailGreenBean/detailCategory';
import CoffeGreenbean from '../pages/coffe/greenbean1/greenbean';
import DetailCategoryGreenbean from '../pages/coffe/greenbean1/detailGreenbean/detailCategoryGR';
import Grinder from '../pages/coffeequipment/grinder/grinder';
import DetailCategoryGrinder from '../pages/coffeequipment/grinder/detailGrinder/detailCategory';
import cart from '../pages/cart/cart'
import invoice from '../pages/cart/invoice'
import HistoryTransaksi from '../pages/cart/historyTransaksi'

class Routes extends Component {
  render() {
    return (
      <React.Fragment>

        <Route exact path='/' component={Home} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route exact path='/cart' component={cart} />
        <Route path='/cart/invoice' component={invoice} />
        <Route path='/cart/HistoryTransaksi' component={HistoryTransaksi} />
        <Route exact path='/coffe' component={Coffe} />
        <Route path='/coffe/detailCategori/:id' component={DetailCategory} />
        <Route exact path='/coffeGreenbean' component={CoffeGreenbean} />
        <Route path='/coffeGreenbean/detailCategoriGR/:id' component={DetailCategoryGreenbean} />
        <Route exact path='/grinder' component={Grinder} />
        <Route path='/grinder/detailGrinder/:id' component={DetailCategoryGrinder} />
        

      </React.Fragment>
    )
  }
}
export default Routes