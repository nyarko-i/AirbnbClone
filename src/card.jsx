import './style.css'
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className='card'>
      <img src={props.img} alt="Card Image" />
      <div>
        <img src='./star.png' className='card--star'/>
        <span> {props.rating} </span>
        <span className='grey'> ({props.reviewCount})▪️ </span>
        <span className='grey'>{props.country} </span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'> from ${props.price} </span> / person </p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
