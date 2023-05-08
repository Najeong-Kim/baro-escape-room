import { useEffect, useState } from 'react';
import Card from './Card'
import Spinner from './Spinner'

import { compareDates, getSelectedDate } from '../util/date'

interface Theme {
  themeName: string;
  date: string;
  time: string;
  isBooked: boolean;
}

interface Props {
  isChecked: boolean;
  selectedDate: string;
}

export default function CardList({ isChecked, selectedDate }: Props) {
  const [themeList, setThemeList] = useState<Theme[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const res = await fetch("/api/resource/1")
      const data = await res.json() 
      setThemeList(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <div className="flex overflow-x-auto space-x-4 w-full h-72">
      {isLoading && <div className="flex w-full h-auto justify-center items-center"><Spinner /></div>}
      {themeList
        .filter(theme => isChecked ? theme.isBooked === false : true)
        .filter(theme => ["today", "tomorrow"].includes(selectedDate) ? compareDates(getSelectedDate(selectedDate), new Date(theme.date)) : true)
        .map(({themeName, date, time, isBooked}) => {
          return (
          <Card
            key={`${themeName}-${date}-${time}`}
            themeName={themeName}
            date={date}
            time={time}
            isBooked={isBooked}
            cafeName="단편선"
          />
      )})}
    </div>
  )
}
