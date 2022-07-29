import fs from 'fs-extra'
import path from 'path'
import jsonfile from 'jsonfile'
const createCsvWriter = require('csv-writer').createObjectCsvWriter
import { CactusData, CactusStudyData } from './interfaces'

export interface convertOptions {
  output: string
}

export interface csvHeader {
  id: string
  title: string
}

export async function convert(file: string, options: convertOptions) {
  if (!fs.existsSync(file)) {
    throw new Error(`JSON file does not exist: ${file}`)
  }
  const output = path.resolve(options.output)
  if (!fs.existsSync(path.dirname(output))) {
    fs.mkdirsSync(output)
  }

  const outputData: { [key: string]: string | number }[] = []
  const inputData: CactusData = jsonfile.readFileSync(file)
  const headers: { [key: string]: csvHeader } = {}
  inputData.study_data.forEach((studyData: CactusStudyData) => {
    const data = {}

    Object.keys(studyData.master).forEach((key) => {
      // @ts-ignore
      data[key] = studyData.master[key]
    })

    Object.keys(studyData.results.cost_type_cost).forEach((key) => {
      // @ts-ignore
      data[`cost_type_cost_${key}`] = studyData.results.cost_type_cost[key]
    })
    outputData.push(data)
    Object.keys(data).forEach((key) => {
      headers[key] = { id: key, title: key }
    })
  })

  const header = Object.keys(headers).map((key) => headers[key])
  const csvWriter = createCsvWriter({
    path: output,
    header: header,
  })
  await csvWriter.writeRecords(outputData)
}
