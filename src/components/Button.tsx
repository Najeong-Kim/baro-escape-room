interface Props {
  date: string;
  onClick: () => void;
  text: string;
  selectedDate: string;
}

export default function Button({ date, onClick, text, selectedDate }: Props) {
  return (
    <button onClick={onClick} className={`w-20 h-6 text-sm border border-slate-400 rounded-full text-slate-700 tracking-widest ${date === selectedDate ? "bg-slate-200" : "bg-gray-50"}`}>
      {text}
    </button>
  )
}
