import { useEffect, useState } from 'react';
import Card from './Card'

export default function CardList() {
  const [themeList, setThemeList] = useState({})

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/resource/1")
      const data = await res.json() 
      setThemeList(data)
    })()
  }, [])

  return (
    <div className="flex overflow-x-auto space-x-4 w-full">
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
