import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function CardList({ children }: Props) {
  return (
    <div className="flex overflow-x-auto space-x-4 w-full h-72">
      {children}
    </div>
  )
}
