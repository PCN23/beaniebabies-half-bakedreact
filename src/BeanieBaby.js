import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, title, astroSign, image }) {
  return (
    <Link className='beanie-baby'to={`/beanie/${id}`}>
      <div className='showing'>
        <h2>{title}</h2>
        <p>{astroSign}</p>
        <img className='beanie-img'src={image}/>
      </div>
    </Link>
    
  );
}
  
  
  
  
  // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
  // it should also render the beanie baby's image and show the beanie baby's name

