import React from 'react';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/clock.svg';
import clock from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

const cardData = [
  {
     id: 1,
     name: 'Opening Hours',
     description: 'Open 9.00 am to 5.00 pm everyday',
     icon: clock,
     bgClass: 'bg-primary' 
  },
  {
     id: 2,
     name: 'Our locations',
     description: 'Open 9.00 am to 5.00 pm everyday',
     icon: marker,
     bgClass: 'bg-accent' 
  },
  {
     id: 3,
     name: 'Contact us',
     description: 'Open 9.00 am to 5.00 pm everyday',
     icon: phone,
     bgClass: 'bg-primary' 
  }
]

  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-32'>
       {
        cardData.map(card => <InfoCard
          key={card.id}
          card={card}
        ></InfoCard>)
       }
    </div>
  );
};

export default InfoCards;