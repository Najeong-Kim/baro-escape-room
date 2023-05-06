import { useEffect, useState } from 'react';
import Card from './Card'
import Spinner from './Spinner'

interface ThemeList {
  [key: string]: {
    date: string;
    timeList: {
      time: string;
      isBooked: boolean;
    }[]
  }[]
}

export default function CardList() {
  const [themeList, setThemeList] = useState<ThemeList>({})
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
      {Object.entries(themeList).map(([theme, list]) => (
        list.map(({date, timeList}) => (
          timeList.map(item => (
            <Card
              key={`${theme}-${date}-${item.time}`}
              themeName={theme}
              date={date}
              time={item.time}
              isBooked={item.isBooked}
              cafeName="단편선"
            />)
          ))
        )
      ))}
    </div>
  )
}
