import puppeteer from 'puppeteer-core' 
import { Theme } from '@/types/theme'

export const getThemeList = async (page: puppeteer.Page, id: number) => {
  switch (id) {
    case 1:
      const themeList: Theme[] = await page.$$eval('td.booking_day.pc_day', tdList => {
        return tdList.filter(td => !td.classList.contains('full_day')).map(_td => {
          const td = _td as HTMLElement
          const date = td.dataset['date']
    
          return Array.from(td.querySelectorAll('div.booking_list'))
            .filter(selected => selected.textContent?.includes('상자') || selected.textContent?.includes('행복'))
            .map(selected => {
              const time = /\d{2}:\d{2}/.exec(selected.textContent || "")
              return {
                themeName: selected.textContent?.includes('상자') ? '그림자 없는 상자' : '사람들은 그것을 행복이라 부르기로 했다',
                date: date || '',
                time: time ? time[0] : '00:00',
                isBooked: selected.classList.contains('disable')
              }
            })
        }).flat()
      });
      return themeList
  }

}
