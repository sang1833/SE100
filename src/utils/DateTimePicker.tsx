import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface DateTimePickerProps {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateTimePicker = ({
  startDate,
  setStartDate,
}: DateTimePickerProps) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
    />
  );
};

export default DateTimePicker;
