import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-website-container">
      <img
        src="https://res.cloudinary.com/dbcjaxxjm/image/upload/v1625840291/Tasty%20Kitchens%20App%20Assests/Group_7420_whiteHat_w8pk6e.png"
        alt="website-footer-logo"
        className="footer-website-logo"
      />
      <h1 className="footer-website-name">Tasty Kitchens</h1>
    </div>
    <p className="footer-website-description">
      The only thing we are are serious about is food.
    </p>
    <div className="footer-social-media-container">
      <FaPinterestSquare className="footer-social-media-icon" />
      <FaInstagram className="footer-social-media-icon" />
      <FaTwitter className="footer-social-media-icon" />
      <FaFacebookSquare className="footer-social-media-icon" />
    </div>
  </div>
)

export default Footer
