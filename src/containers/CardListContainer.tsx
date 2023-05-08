import { useEffect, useState } from 'react';

import Card from '@/components/Card'
import CardList from '@/components/CardList'
import Spinner from '@/components/Spinner'

import { storeList } from '@/static/storeList'
import { Theme } from '@/types/theme'

import { compareDates, getSelectedDate } from '@/util/date'

interface Props {
  isChecked: boolean;
  selectedDate: string;
}

export default function CardListContainer({ isChecked, selectedDate }: Props) {
  const [themeList, setThemeList] = useState<Theme[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const res = await fetch(`/api/resource/${storeList[0].id}`)
      const data = await res.json() 
      setThemeList(data)
      setIsLoading(false)
    })()
  }, [])

  return (
    <CardList>
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
            cafeName={storeList[0].name}
          />
      )})}
    </CardList>
  )
}
