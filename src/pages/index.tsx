import { useState } from 'react';
import Head from 'next/head'

import CardListContainer from '@/containers/CardListContainer';
import ButtonList from '@/components/ButtonList'
import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")

  const toggleSelectedDate = (date: string) => {
    setSelectedDate(selectedDate === date ? "" : date)
  }

  return (
    <>
      <Head>
        <title>baro escape room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-5">
        <h1 className="font-bold text-3xl">바로방탈출</h1>
        <div className="flex my-5 justify-between">
          <ButtonList>
            <Button date="today" text="오늘" selectedDate={selectedDate} onClick={() => toggleSelectedDate("today")}/>
            <Button date="tomorrow" text="내일" selectedDate={selectedDate} onClick={() => toggleSelectedDate("tomorrow")}/>
            <Button date="thisweek" text="이번주" selectedDate={selectedDate} onClick={() => toggleSelectedDate("thisweek")}/>
          </ButtonList>
          <div className="flex gap-2 items-center">
            <Checkbox
              isChecked={isChecked}
              toggleIsChecked={() => setIsChecked(!isChecked)}
            />
            <p className='text-slate-700 text-sm'>예약 가능 시간만 보기</p>
          </div>
        </div>
        <div>
          <CardListContainer
            isChecked={isChecked}
            selectedDate={selectedDate}
          />
        </div>
      </main>
    </>
  )
}
