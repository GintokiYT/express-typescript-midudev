import diaryData from './diaries.json'

import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getDiaryFindById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(diarie => diarie.id === id)
  if (entry !== undefined) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addNewDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
