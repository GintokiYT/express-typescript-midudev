import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.status(200).send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.getDiaryFindById((Number(req.params.id)))
  return diary !== undefined
    ? res.status(200).send(diary)
    : res.status(404).send({ msg: 'Error404' })
})

router.post('/', (req, res) => {
  try {
    const newDairyEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addNewDiary(newDairyEntry)

    res.status(201).json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
