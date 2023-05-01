import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function CardList({ children }: Props) {
  return (
    <div className="flex space-x-4">
      {children}
    </div>
  )
}
