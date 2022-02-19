import { enumType } from 'nexus'
import fs from 'fs'
import enums from './Enum.json'

let data = ''

export const Enums = Object.keys(enums).map(key => {
  let enumsGraphQLDefinition = ''
  Object.keys(enums[key]).forEach(
    enumKey =>
      (enumsGraphQLDefinition += `\n\t"${enums[key][enumKey]}"\n\t${enumKey}`)
  )

  data += `\nenum ${key} {${enumsGraphQLDefinition}\n}\n`

  return enumType({
    name: key,
    members: Object.keys(enums[key]).map(enumKey => ({
      name: enumKey,
      description: enums[key][enumKey],
    })),
  })
})

fs.writeFileSync(`${process.cwd()}/prisma/enum/Enum.graphql`, data)

