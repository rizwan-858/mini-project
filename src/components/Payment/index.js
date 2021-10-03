import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Payment = () => (
  <>
    <Header activeTab="CART" />
    <div className="payment-container">
      <img
        src="https://res.cloudinary.com/rizwan987/image/upload/v1633273163/Vector_yo5bdq.png"
        alt="success"
      />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="payment-description">
        Thank you for ordering <br /> Your payment is successfully completed
      </p>

      <Link to="/">
        <button className="go-to-home-button" type="button">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default Payment
