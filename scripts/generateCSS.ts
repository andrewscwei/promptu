import { generate, parse } from 'css-tree'
import fs from 'fs'
import path from 'path'
import * as classes from '../src/classes'
import normalize from '../src/core/normalize'

const pwd = path.join(__dirname, '../')
const outDir = path.join(pwd, 'lib')
const css = `
  ${normalize()}
  ${generateClasses(classes)}
`

fs.mkdirSync(outDir)
fs.writeFileSync(path.join(outDir, 'promptu.css'), generate(parse(css)))

function generateClasses(module: Record<string, any>): string {
  let out = ''

  for (const key in module) {
    if (!Object.prototype.hasOwnProperty.call(module, key)) continue

    const submodule = module[key]

    if (typeof submodule === 'object') {
      out += `\n\n${generateClasses(submodule)}`
    }
    else if (typeof submodule === 'string') {
      out += `\n\n .${key} {
        ${submodule}
      }`
    }
  }

  return out
}
