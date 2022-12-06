import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {

  const [appointmentOPtions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() =>{
      fetch('appointmentOption.json')
      .then(res => res.json())
      .then(data => setAppointmentOptions(data))
  }, [])

  return (
    <section className='my-20'>
        <p className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-10 mx-20'>
            {
              appointmentOPtions.map(option =><AppointmentOption
                key={option._id}
                appointmentOption={option}
                setTreatment={setTreatment}
              ></AppointmentOption>)
            }
        </div>
             {
              treatment &&
               <BookingModal
               selectedDate={selectedDate}
                 treatment={treatment}
                 setTreatment={setTreatment}
              ></BookingModal>
             }
    </section>
  );
};

export default AvailableAppointment;

