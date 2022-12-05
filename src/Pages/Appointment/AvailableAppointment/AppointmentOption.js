import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({appointmentOption}) => {

 const {name, slots} = appointmentOption;

  return (
    <div className="card mb-8 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-2xl font-bold text-center font-2xl mb-1">{name}</h2>
           <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
           <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
         <div htmlFor="booking-modal" className="card-actions  justify-center mt-1">
         <PrimaryButton> </PrimaryButton>
       </div>
     </div>
   </div>
  );
};

export default AppointmentOption;