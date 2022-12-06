import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
  const {name, slots} = treatment;
  const date = format(selectedDate, 'PP');


  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;

    const booking = {
      treatment: name,
      patient: name,
      slot, 
      email,
      phone
    }
    alert('booked successfully')
    setTreatment(null);
  }

  return (
    <>    
   <input type="checkbox" id="booking-modal" className="modal-toggle" />
       <div className="modal">
         <div className="modal-box relative">
           <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" disabled value={date} className="input w-full bordered" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                <option>Who shot first?</option>
                 {
                  slots.map(slot => <option value="slot">{slot}</option>)
                 }
            </select>
            <input name="name" type="text" placeholder="Your Name" className="input w-full input-bordered" />
            <input name="email" type="text" placeholder="Email Address" className="input w-full input-bordered" required />
            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
            <br />
            <input className='btn btn-accent w-full' type="submit" value="submit" />
            </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;