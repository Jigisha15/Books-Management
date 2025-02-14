import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const MyDatePicker = () => {
    const [date, setDate] = useState(dayjs()); // Default to current date

    return (
        <DatePicker 
            value={date} 
            onChange={(newDate) => setDate(newDate)} 
            format="DD-MM-YYYY"
            disabled
        />
    );
};

export default MyDatePicker;