import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

const servicesData = [
  {
     id: 1,
     name: 'Fluoride Treatment',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sit aliquid, aliquam hic corporis',
     img: fluoride
  },
  {
     id: 2,
     name: 'Cavity Filing',
     description: 'itaque libero in optio soluta ratione praesentium provident ab ipsum exercitationem tempora sapiente sunt quam deleniti?',
     img: cavity
  },
  {
     id: 3,
     name: 'Teeth Whitening',
     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sit aliquid, aliquam hic corporis',
     img: whitening
  },

]

  return (
    <div className='mt-32'>
        <div className='text-center'>
            <h3 className='font-xl font-bold text-primary upercase'> Our Services </h3>
            <h2 className='text-3xl'>Services We Provide</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 '>
           {
              servicesData.map(service =><Service
                   key={service.id}
                   service={service}
              ></Service>)
           }  
        </div>
    </div>
  );
};

export default Services;