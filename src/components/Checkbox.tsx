interface Props {
  isChecked: boolean;
  toggleIsChecked: () => void;
}

export default function Checkbox({isChecked, toggleIsChecked}: Props) {
  return (
    <button onClick={toggleIsChecked}>
      {isChecked ? 
        <div className="flex items-center justify-center w-5 h-5 rounded-md bg-slate-300">
          <svg width="16" height="20" fill="#FFFFFF">
            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
        </div>
      : <div className="flex items-center justify-center w-5 h-5 rounded-md border-2 border-slate-300">
        </div>}
    </button>
  )
}
