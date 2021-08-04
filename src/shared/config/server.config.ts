import { join, resolve } from 'path'

interface ServerConfig {
  rootDir: string
  port: number
}

const serverConfig: ServerConfig = {
  rootDir: resolve(join(process.cwd(), 'src/server/main')),
  port: 3000,
}

export default serverConfig
