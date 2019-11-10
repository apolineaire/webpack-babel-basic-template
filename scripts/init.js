import $ from 'jquery'
const init = () => {
  $(document.body).append('<div id="app"></div>')
  $('#app').append('<h1>Hello Webpack and Babel</h1>')
}

export default init
