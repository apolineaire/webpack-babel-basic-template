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
      <ul>
    <li>${todo.title}<li>
    <li>${todo.completed === true ? '✅' : '⟤'}
    </li>
    </ul>`
      listOfTodosToShow.push(string)
    })
    // insert in DOM
    document
      .querySelector('#app')
      .insertAdjacentHTML('afterend', listOfTodosToShow)
  } else {
    $('#app').append('<h3>Sorry, failed to load todos</h3>')
  }
}

export default displayTodos
