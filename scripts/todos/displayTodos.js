import fetchTodos from './fetchTodos'
import $ from 'jquery'
import '../../style.css'

const displayTodos = async () => {
  let listOfTodosFromServer = await fetchTodos()
  let listOfTodosToShow = []
  //   map todos to html
  if (listOfTodosFromServer) {
    listOfTodosFromServer.map(todo => {
      let string = `
    <li>
    <p class="inline">${todo.title}<p>
    <p class="inline">${todo.completed === true ? 'fait' : 'à faire'}</p>
    </li>`
      listOfTodosToShow.push(string)
    })
    // insert in DOM
    $('#app').append(listOfTodosToShow)
  } else {
    $('#app').append('<h3>Sorry, failed to load todos</h3>')
  }
}

export default displayTodos
