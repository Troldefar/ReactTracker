import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      &copy; 2021
      <Link 
        style={{ 
          marginLeft: '10px', 
          display: 'block', 
          textDecoration: 'none', 
          color: 'black' 
        }} 
        to="/about"
      >
        About
      </Link>
    </footer>
  ) 
}

export default Footer
