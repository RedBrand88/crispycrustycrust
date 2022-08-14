import { format } from "date-fns";
import React from "react";
import useSelectedMonth from "../../hooks/useSelectedMonth";

export default function Calendar() {
    const {
        selectedMonth,
        nextSelectedMonth,
        prevSelectedMonth,
        selectedDay,
        setSelectedDate
    } = useSelectedMonth();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //todo figure out how to avoid unnecessary rerenders

    return (
        <div className="bg-gray-700 text-white h-screen pt-40">
            <div className="bg-black mx-40 rounded h-4/5">
                <button onClick={prevSelectedMonth}>prev</button>
                <button onClick={nextSelectedMonth}>next</button>
                <div className="h-1/5">
                    <div className="text-center font-bold text-2xl">{format(selectedDay, 'MMMM')} {format(selectedDay, 'yyyy')}</div>
                    <div className="flex justify-content">
                        {weekdays.map(day => {
                            return (
                                <div key={day} className="w-1/6 text-center border border-white">
                                    {day}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-7 grid-rows-{selectedMonth.length} h-4/5">
                    {selectedMonth.map(week => {
                        return (
                            <>
                                <div className="border border-white border-r-0" key={week[0]}>
                                    {format(week[0], "d")}
                                </div>
                                <div className="border border-white border-r-0" key={week[1]}>
                                    {format(week[1], "d")}
                                </div>
                                <div className="border border-white border-r-0" key={week[2]}>
                                    {format(week[2], "d")}
                                </div>
                                <div className="border border-white border-r-0" key={week[3]}>
                                    {format(week[3], "d")}
                                </div>
                                <div className="border border-white border-r-0" key={week[4]}>
                                    {format(week[4], "d")}
                                </div>
                                <div className="border border-white border-r-0" key={week[5]}>
                                    {format(week[5], "d")}
                                </div>
                                <div className="border border-white" key={week[6]}>
                                    {format(week[6], "d")}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
