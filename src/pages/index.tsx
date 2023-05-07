import { useState } from 'react';
import Head from 'next/head'
import CardList from '../components/CardList'
import ButtonList from '../components/ButtonList'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)

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
            <Button text="오늘" />
            <Button text="내일" />
            <Button text="이번주" />
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
          <CardList
            isChecked={isChecked}
          />
        </div>
      </main>
    </>
  )
}
