import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanies }) {
  return (
    <div className='beanies'>
      {
        beanies.map((beanie, i) => <BeanieBaby key={beanie.title + i } {...beanie} />)
      }

      {/* render out the beanie babies as a list */}
    </div>);
}
