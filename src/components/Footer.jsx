import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-dark text-white p-4'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Our Values</h5>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem quas asperiores quam, dignissimos esse similique soluta tempore cupiditate perspiciatis?
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <hr/>
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/products" className="nav-link">Products</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <hr/>
            <ul type="none" className='p-2 text-height-2'><li>#64 Banglore Karnataka</li>
              <li>+91 - 8888888888</li>
              <li>+91 - 9988880000</li>
              <li>Email - email@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;