interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className="w-20 h-6 text-sm bg-gray-50 border border-slate-400 rounded-full text-slate-700 tracking-widest">
      {text}
    </button>
  )
}
