import { endpoints } from '../../resources/api'
import $ from 'jquery'

const fetchTodos = async () => {
  let arrayOfTodos = []

  await $.ajax({
    url: endpoints.todos,
    success: result => {
      arrayOfTodos = result
    }
  })

  return arrayOfTodos
}

export default fetchTodos
