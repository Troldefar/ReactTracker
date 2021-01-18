import PropTypes from 'prop-types';

const Button = ({ color, text, buttonClick }) => {
  return (
    <button 
      style={{ backgroundColor: color }} 
      className='btn'
      onClick={ buttonClick }    
    >
      { text }
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  buttonClick: PropTypes.func
}

export default Button
