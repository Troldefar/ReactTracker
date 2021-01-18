import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
  const buttonClick = (e) => {
    console.log(e);
  }
  return (
    <header className='header'>
      <h1>
        {title}
      </h1>
      <Button 
        color='green' 
        text='Add'
        buttonClick={buttonClick} 
      />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;