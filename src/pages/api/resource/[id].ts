import type { NextApiRequest, NextApiResponse } from 'next'
import { storeList } from '@/static/storeList'
import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core' 

interface Td {
  date: string;
  boxTimeList: {
    time: string;
    isBooked: boolean;
  }[];
  happyTimeList: {
    time: string;
    isBooked: boolean;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const store = storeList.find(store => store.id === Number(id))

  if (!store) {
    res.status(404).json({ message: 'nonexistent store' })
    return
  }

  const LOCAL_CHROMIUM_PATH = '/opt/homebrew/bin/chromium'

  const executablePath = await chromium.executablePath || LOCAL_CHROMIUM_PATH;

  const browser = await puppeteer.launch({
    executablePath,
  })
  const page = await browser.newPage();

  await page.goto(store.link);

  const tdList: Td[] = await page.$$eval('td.booking_day.pc_day', tdList => {
    return tdList.filter(td => !td.classList.contains('full_day')).map(_td => {
      const td = _td as HTMLElement
      const date = td.dataset['date']

      const getTimeList = (element: HTMLElement, keyword: string) => {
        return Array.from(element.querySelectorAll('div.booking_list'))
          .filter(selected => selected.textContent?.includes(keyword))
          .map(selected => {
            const time = /\d{2}:\d{2}/.exec(selected.textContent || "")
            return {
              time: time ? time[0] : "",
              isBooked: selected.classList.contains('disable')
            }
          })
      }

      const boxTimeList = getTimeList(td, '상자')
      const happyTimeList = getTimeList(td, '행복')

      return { date: date || '-', boxTimeList, happyTimeList }
    })
  });

  const result = {
    '그림자 없는 상자': tdList.map(td => {
      return { date: td.date, timeList: td.boxTimeList }
    }),
    '사람들은 그것을 행복이라 부르기로 했다': tdList.map(td => {
      return { date: td.date, timeList: td.happyTimeList }
    })
  }

  await browser.close();

  res.status(200).json(result)
}
