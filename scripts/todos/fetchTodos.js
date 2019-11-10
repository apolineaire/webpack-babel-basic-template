import { endpoints } from '../../resources/api'
import $ from 'jquery'

const fetchTodos = async () => {
  let arrayOfTodos = []

  await $.ajax({
    url: endpoints.todos,
    success: result => {
      console.log('we did it ', result)
      arrayOfTodos = result
    }
  })

  console.log('arrayOfTodos', arrayOfTodos)
  return arrayOfTodos
}

export default fetchTodos
