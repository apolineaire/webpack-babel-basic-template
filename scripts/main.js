import init from './init'
import displayTodos from './todos/displayTodos'

const bootstrap = async () => {
  init()
  await displayTodos()
}

bootstrap()
