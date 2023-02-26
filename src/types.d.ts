import { Weather, Visibility } from './enums'

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'storny'

// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
