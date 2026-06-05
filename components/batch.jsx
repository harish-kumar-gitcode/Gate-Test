//  Icon's Import
import { CalendarDays, BookText } from "lucide-react";

export default function Batch() {
  const batches = [
    {
      date: "05",
      dept: "CS / EE / ME / CV / DS & AI",
      time: "5:00 PM to 7:00 PM",
      subject: "Engineering Mathematics",
    },
    {
      date: "07",
      dept: "DS / AI / CS",
      time: "4:30 PM to 6:30 PM",
      subject: "Data Structures & DBMS",
    },
    {
      date: "17",
      dept: "CS / AI / EE / EC / ME / CV",
      time: "4:00 PM to 6:00 PM",
      subject: "General Aptitiude",
    },
  ];
  return (
    <>
      <div className="mx-4">
        {batches.map((batch, index) => (
          <div className="h-40 w-90 shadow-lg rounded-md my-4" key={index}>
            <div className="grid grid-cols-3 h-full">
              {/* Date of Batch */}
              <div className="flex items-center justify-center mx-5 my-10 rounded-md bg-red-700">
                <h1 className="text-center font-bold text-2xl text-white">
                  May <br />
                  {batch.date}
                </h1>
              </div>
              {/* Info of Batch */}
              <div className="col-span-2 flex items-center">
                <div className="text-left ">
                  {/* Department Block */}
                  <h1 className="pb-2 font-bold text-lg">{batch.dept}</h1>
                  {/* Time Block */}
                  <h1 className="flex text-gray-600 text-sm">
                    <CalendarDays className="text-black scale-75" />
                    {batch.time}
                  </h1>
                  {/* Subject Block */}
                  <h1 className="flex text-gray-600 text-sm">
                    <BookText className="text-black scale-75" />
                    {batch.subject}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
