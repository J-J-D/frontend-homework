const Day = ({ dt, hi, lo }) => {
  const dtMilliseconds = dt * 1000;
  const dateObject = new Date(dtMilliseconds);
  const dayName = dateObject.toLocaleString("en-US", { weekday: "long" });
  return (
        <tr className ="w-200">
          <td className="w-1/3">{dayName}</td>
          <td className="w-1/3 text-center ">{hi}&#176;</td>
          <td className="w-1/3 text-center">{lo}&#176;</td>
        </tr> 
  );
};

export default Day;
