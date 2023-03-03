document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',( event) => {
  event.preventDefault()
  postIt(event.target.children[1].value)
  form.reset()

})
});

function postIt(list){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click',listDelete)
   btn.textContent = 'X'
  p.textContent = `${list} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function listDelete(event){
event.target.parentNode.remove()
}