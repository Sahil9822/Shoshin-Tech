import React, { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isToday, isYesterday, isTomorrow } from 'date-fns';
import './index.css'

const priorities = [
    { title: "Review candidate applications", time: "Yesterday, 12:30 PM" }
  ];

const others = [
    { title: "Interview with candidates", time: "Today - 10.30 AM" },
    { title: "Short meeting with product designer from IT Departement", time: "Today - 10.30 AM" },
    { title: "Review candidate applications", time: "Yesterday, 12:30 PM" }
];

const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="announcement-date-picker" onClick={onClick} ref={ref}>
      {value}
      <svg width="24" height="23" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7.5L9 11.5L14 7.5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
  ));

function UpComingSchedule() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  const getFormattedDate = (date) => {
    if (isToday(date)) return "Today, " + format(date, "d MMM yyyy");
    if (isYesterday(date)) return "Yesterday, " + format(date, "d MMM yyyy");
    if (isTomorrow(date)) return "Tomorrow, " + format(date, "d MMM yyyy");
    return format(date, "d MMM yyyy");
  };
  return (
    <div className='upcoming-container'>
        <div className="upcoming-header">
        <h3 >Upcoming Schedule</h3>
        <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={<CustomDateInput />}
        value={getFormattedDate(selectedDate)} 
      />
      </div>
      <div className='upcomingevents-item-container'>
        <p className='announcement-inner-heads'>Priority</p>
      {priorities.map((announcement, index) => (
        <div className="announcement-item" key={index}>
          <div className="announcement-text">
            <p>{announcement.title}</p>
            <span>{announcement.time}</span>
          </div>
          <div className="announcement-icons">
            <span className="pin-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9771 3C14.0618 2.99985 14.1457 3.01639 14.224 3.04867C14.3022 3.08095 14.3734 3.12834 14.4333 3.18814L20.8119 9.56669C20.9327 9.68752 21.0005 9.85137 21.0005 10.0222C21.0005 10.1931 20.9327 10.3569 20.8119 10.4777C20.1933 11.0963 19.4305 11.2354 18.8751 11.2354C18.647 11.2354 18.4434 11.2122 18.2823 11.1852L14.2439 15.2236C14.3502 15.652 14.4192 16.0887 14.4501 16.529C14.5093 17.4336 14.4088 18.7028 13.5223 19.5894C13.4014 19.7102 13.2376 19.778 13.0668 19.778C12.8959 19.778 12.7321 19.7102 12.6112 19.5894L8.96579 15.9452L4.86547 20.0456C4.6142 20.2968 3.29467 21.2079 3.0434 20.9566C2.79212 20.7053 3.70316 19.3845 3.95444 19.1345L8.05475 15.0342L4.4106 11.3888C4.28981 11.2679 4.22196 11.1041 4.22196 10.9332C4.22196 10.7624 4.28981 10.5986 4.4106 10.4777C5.29715 9.59118 6.56642 9.48938 7.47102 9.54994C7.91128 9.58079 8.34803 9.64977 8.77637 9.75612L12.8148 5.71894C12.7811 5.52271 12.7639 5.324 12.7633 5.1249C12.7633 4.5708 12.9025 3.80795 13.5223 3.18814C13.643 3.06769 13.8066 3.00004 13.9771 3Z" fill="#686868"/>
            </svg>
            </span>
            <span className="more-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
            </svg>

            </span>
          </div>
        </div>
      ))}
      <p className='announcement-inner-heads'>Other</p>
      {others.map((announcement, index) => (
        <div className="announcement-item" key={index}>
          <div className="announcement-text">
            <p>{announcement.title}</p>
            <span>{announcement.time}</span>
          </div>
          <div className="announcement-icons">
            <span className="pin-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9771 3C14.0618 2.99985 14.1457 3.01639 14.224 3.04867C14.3022 3.08095 14.3734 3.12834 14.4333 3.18814L20.8119 9.56669C20.9327 9.68752 21.0005 9.85137 21.0005 10.0222C21.0005 10.1931 20.9327 10.3569 20.8119 10.4777C20.1933 11.0963 19.4305 11.2354 18.8751 11.2354C18.647 11.2354 18.4434 11.2122 18.2823 11.1852L14.2439 15.2236C14.3502 15.652 14.4192 16.0887 14.4501 16.529C14.5093 17.4336 14.4088 18.7028 13.5223 19.5894C13.4014 19.7102 13.2376 19.778 13.0668 19.778C12.8959 19.778 12.7321 19.7102 12.6112 19.5894L8.96579 15.9452L4.86547 20.0456C4.6142 20.2968 3.29467 21.2079 3.0434 20.9566C2.79212 20.7053 3.70316 19.3845 3.95444 19.1345L8.05475 15.0342L4.4106 11.3888C4.28981 11.2679 4.22196 11.1041 4.22196 10.9332C4.22196 10.7624 4.28981 10.5986 4.4106 10.4777C5.29715 9.59118 6.56642 9.48938 7.47102 9.54994C7.91128 9.58079 8.34803 9.64977 8.77637 9.75612L12.8148 5.71894C12.7811 5.52271 12.7639 5.324 12.7633 5.1249C12.7633 4.5708 12.9025 3.80795 13.5223 3.18814C13.643 3.06769 13.8066 3.00004 13.9771 3Z" fill="#686868"/>
            </svg>
            </span>
            <span className="more-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#B2B2B2"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#B2B2B2"/>
                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#B2B2B2"/>
            </svg>

            </span>
          </div>
        </div>
      ))}
      </div> 
      <div className="see-all">
        <p>See All Announcement</p>
      </div>
    </div>
  )
}

export default UpComingSchedule