interface Props {
  themeName: string;
  date: string;
  time: string;
  isBooked: boolean;
  cafeName: string;
}

export default function Card({themeName, date, time, isBooked, cafeName}: Props) {
  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-md w-56 h-64">
      <h1 className="text-lg font-semibold text-slate-900 w-44 truncate">
        {themeName}
      </h1>
      <div className="text-sm font-medium text-slate-600">
        {date}
      </div>
      <div className="text-sm font-medium text-slate-700">
        {time}
      </div>
      <div className="my-6 border-b border-slate-200">
      </div>
      {isBooked ? <button className="w-full h-10 mb-6 text-sm font-semibold rounded-md bg-slate-300">
        예약 불가
      </button> : <button className="w-full h-10 mb-6 text-sm font-semibold rounded-md bg-black text-white">
        예약 가능
      </button>}
      <p className="text-sm text-slate-700">
        {cafeName}
      </p>
    </div>
  )
}
