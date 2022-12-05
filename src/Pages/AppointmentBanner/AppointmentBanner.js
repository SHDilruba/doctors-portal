import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';
import appointment from '../../assets/images/appointment.png';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

  return (
    <div
       style={{
         background: `url(${appointment})`
       }}
    className='pb-8 pt-4 my-10'>
       <header className=''>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-28">
              <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="dentist chair"/>
              <div className='pb-8 rounded-lg bg-white'>
                <DayPicker
                     mode="single"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                />
                <p className='text-center text-secondary font-bold'>You have selected date: {format(selectedDate, 'PP')}</p>
              </div>
            </div>
          </div>   
       </header>
    </div>
  );
};

export default AppointmentBanner;