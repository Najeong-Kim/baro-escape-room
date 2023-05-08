import type { NextApiRequest, NextApiResponse } from 'next'
import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

import { storeList } from '@/static/storeList'
import { getThemeList } from '@/util/crawling'

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

  const themeList = await getThemeList(page, store.id)

  await browser.close();

  res.status(200).json(themeList)
}
