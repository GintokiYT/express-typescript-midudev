import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Pong!' + new Date().toLocaleDateString())
  res.send('Pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
