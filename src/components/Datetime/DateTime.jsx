import { useEffect, useState } from "react";

  
const DateTime = () => {
     const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means useEffect runs once after the initial render

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

  const formattedTime = currentDateTime.toLocaleTimeString();
  const day = days[currentDateTime.getDay()];
  const month = months[currentDateTime.getMonth()];
  const year = currentDateTime.getFullYear();
  const date = currentDateTime.getDate();
  return (
    <div className="mb-4 text-center w-full">
      <div className="flex mb-2 justify-center sm:mb-4" > 
          <p className="mr-2 text-[#546270] text-2xl sm:mr-4 sm:text-4xl font-bold">{day}</p>
          <p className="text-[#546270] text-2xl sm:text-4xl font-bold">{formattedTime}</p>
      </div>
      <div className="flex mb-2 justify-center sm:mb-4">
        <p className="mr-2 text-[#546270]  text-2xl sm:text-4xl sm:mr-4 font-light">{month}</p>
        <p className="mr-2 text-[#546270]  text-2xl sm:text-4xl sm:mr-4 font-light">{date},</p>
        <p className="mr-2 text-[#546270]  text-2xl sm:text-4xl sm:mr-4 font-light">{year}</p>
      </div>
      
    </div>
  );
}

export default DateTime;