export default function Card() {
  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-md w-56 h-64">
      <h1 className="text-lg font-semibold text-slate-900">
        방탈출 테마명
      </h1>
      <div className="text-sm font-medium text-slate-600">
        날짜
      </div>
      <div className="text-sm font-medium text-slate-700">
        시간
      </div>
      <div className="my-6 border-b border-slate-200">
      </div>
      <button className="w-full h-10 mb-6 text-sm font-semibold rounded-md bg-black text-white">
        예약 가능
      </button>
      <p className="text-sm text-slate-700">
        방탈출 카페명
      </p>
    </div>
  )
}
