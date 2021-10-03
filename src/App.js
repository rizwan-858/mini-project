import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificRestaurant from './components/SpecificRestaurant'
import Cart from './components/Cart'
import Payment from './components/Payment'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute
        exact
        path="/restaurants/:id"
        component={SpecificRestaurant}
      />
      <ProtectedRoute exact path="/Cart" component={Cart} />
      <ProtectedRoute exact path="/payment-successful" component={Payment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
