import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ButtonList({ children }: Props) {
  return (
    <div className="flex space-x-2">
      {children}
    </div>
  )
}
