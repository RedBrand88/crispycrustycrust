const { useMemo, useState, useCallback } = require("react");
import { addDays, endOfMonth, startOfMonth, subDays } from "date-fns";
import {genMonth} from "../utility/date-generators";

const useSelectedMonth = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [selectedMonth, setSelectedMonth] = useState(genMonth(new Date()));

    const nextSelectedMonth = useCallback(() => {
        const day = addDays(endOfMonth(new Date()), 1);
        setSelectedMonth(genMonth(day));
    }, []);

    const prevSelectedMonth = useCallback(() => {
        const day = subDays(startOfMonth(new Date()), 1);
        setSelectedMonth(genMonth(day));
    }, []);

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
