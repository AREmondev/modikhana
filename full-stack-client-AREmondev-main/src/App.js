import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AuthContextProvider from './components/context/AuthContext'
import Admin from './components/Admin'
import ManageProduct from './components/Admin/ManageProduct/ManageProduct'
import AddProduct from './components/Admin/AddProduct/AddProduct'
import ProductsContextProvider from './components/context/ProductsContext'
import CheckOut from './components/Checkout/CheckOut'
import Order from './components/Order/Order'
function App() {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <Router>
          <Route path="/">
            <Header />
          </Route>
          <Switch>
            <ProtectedRoute path="/admin/manageProducts">
              <ManageProduct />
            </ProtectedRoute>
            <ProtectedRoute exact path="/admin">
              <Admin />
            </ProtectedRoute>
            <ProtectedRoute exact path="/admin/addProduct">
              <AddProduct />
            </ProtectedRoute>

            <ProtectedRoute exact path="/checkout">
              <CheckOut />
            </ProtectedRoute>
            <ProtectedRoute exact path="/order">
              <Order />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </ProductsContextProvider>
  )
}

export default App
