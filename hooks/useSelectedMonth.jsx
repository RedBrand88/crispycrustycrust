const { useMemo, useState, useCallback } = require("react");
import { addDays, endOfMonth, startOfMonth, subDays } from "date-fns";
import { getMonth } from "../utility/date-generators";

const useSelectedMonth = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(getMonth(new Date()));

    const nextSelectedMonth = useCallback(() => {
        const day = addDays(endOfMonth(selectedDay), 1);
        setSelectedMonth(getMonth(day));
        setSelectedDay(day);
    });

    const prevSelectedMonth = useCallback(() => {
        const day = subDays(startOfMonth(selectedDay), 1);
        setSelectedMonth(getMonth(day));
        setSelectedDay(day);
    });

    const values = useMemo(
        () => ({
            selectedMonth,
            nextSelectedMonth,
            prevSelectedMonth,
            selectedDay,
            setSelectedDay
        }),
        [selectedMonth, nextSelectedMonth, prevSelectedMonth, selectedDay, setSelectedDay]
    );

    return values;
}

export default useSelectedMonth;
