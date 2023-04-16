import fs from 'fs'
import path from 'path'
import normalize from '../src/core/normalize'

const pwd = path.join(__dirname, '../')
const outDir = path.join(pwd, 'lib')
const css = normalize()

fs.mkdirSync(outDir)
fs.writeFileSync(path.join(outDir, 'normalize.css'), css)
