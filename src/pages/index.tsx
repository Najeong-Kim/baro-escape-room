import Head from 'next/head'
import CardList from '../components/CardList'
import Card from '../components/Card'
import ButtonList from '../components/ButtonList'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>baro escape room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-5">
        <h1 className="font-bold text-3xl">바로방탈출</h1>
        <div className="my-5">
          <ButtonList>
            <Button text="오늘" />
            <Button text="내일" />
            <Button text="이번주" />
          </ButtonList>
        </div>
        <div>
          <CardList />
        </div>
      </main>
    </>
  )
}
