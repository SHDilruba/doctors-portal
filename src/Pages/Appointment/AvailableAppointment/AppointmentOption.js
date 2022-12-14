import React from 'react';

const AppointmentOption = ({appointmentOption, setTreatment}) => {

 const {name, slots} = appointmentOption;

  return (
     <div className="card mb-8 shadow-xl">
        <div className="card-body text-center">
            <h2 className="text-secondary text-2xl font-bold text-center font-2xl mb-1">{name}</h2>
            <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
            <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
         <div htmlFor="booking-modal" className="card-actions  justify-center mt-1">
            <label className='btn btn-secondary bg-gradient-to-r from-primary to-secondary'
                disabled={slots.length === 0}
                htmlFor="booking-modal"
                onClick={()=> setTreatment(appointmentOption)}
            >Book Appointment </label>
        </div>
     </div>
   </div>
  );
};

export default AppointmentOption;