import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";
import { Store } from "./Store";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href='/signin'
  };

  return (
    <Router>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position='bottom-center' limit={1} />
        <header>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <Link to='/' className='code-doc'>
                <Navbar.Brand>codeDoc</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>  

              <Nav className='me-auto w-100 justify-content-end'>
                <Link to='/cart' className='nav-link'>
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg='danger'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
                    <NavDropdown.Item>
                      {" "}
                      <Link to='/profile' className='navLink'>User Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      {" "}
                      <Link to='/orderhistory' className='navLink'>Order History </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <Link
                      className='dropdown-item'
                      to='#signout'
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className='nav-link' to='/signin'>
                    Sign In
                  </Link>
                )}
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Switch>
              <Route path='/product/:slug' component={ProductScreen} />
              <Route path='/cart' component={CartScreen} />
              <Route path='/signin' component={SigninScreen} />
              <Route path='/signup' component={SignupScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/shipping' component={ShippingAddressScreen} />
              <Route path='/payment' component={PaymentMethodScreen} />
              <Route path='/placeorder' component={PlaceOrderScreen} />
              <Route path='/order/:id' component={OrderScreen} />
              <Route path='/orderhistory' component={OrderHistoryScreen} />
              <Route path='/' component={HomeScreen} />
            </Switch>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All rights reserved</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
