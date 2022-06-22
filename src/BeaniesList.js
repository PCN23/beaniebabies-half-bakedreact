import BeanieBaby from './BeanieBaby.js';
import { Link } from 'react-router-dom';

export default function BeaniesList({ beanies }) {
  return (
    <div className='beanies'>
      {
        beanies.map((beanie, i) =>
          <Link key={beanie.title = i + beanie.id} to={`/beanies/${beanie.id}`}>
            <div className='beanie'>
              <h3>{beanie.title}</h3>
              <p>{beanie.astroSign}</p>
              <img src={beanie.image}></img>
            </div>
          </Link>)
      }

      {/* render out the beanie babies as a list */}
    </div>);
}
