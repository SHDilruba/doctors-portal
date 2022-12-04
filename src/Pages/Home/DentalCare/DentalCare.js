import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
  return (
    <div className="hero">
    <div className="hero-content flex-col lg:flex-row md:flex-col gap-20 p-32 mt-8">
      <img src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl h-[500px] " alt=""/>
          <div className=''>
             <h2 className="text-4xl font-bold mb-8">Exceptional Dental Care, on Your Terms</h2>
              <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati repellendus ipsa aliquid possimus voluptatibus, delectus incidunt dolor molestiae quaerat aperiam ad commodi, debitis cum doloribus, inventore ducimus enim itaque doloremque aliquam facilis eos corporis. Nihil accusamus est atque laudantium ratione voluptates quam</p>
            <PrimaryButton>Getting Started</PrimaryButton>
       </div>
   </div>
</div>
  );
};

export default DentalCare;