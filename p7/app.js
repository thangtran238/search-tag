let content = document.querySelector('.content')
let input = document.querySelector('.content input')
let btnRA = document.querySelector('.remove')
let tags = ['NodeJs', 'ReactJs']

function render() {
  content.innerHTML = ''
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i]
    content.innerHTML += `<li>
    ${tag}
    <i class="fa fa-close" onclick="removeTag(${i})"></i>
  </li>`
  }
  content.appendChild(input);
  input.focus();
  
}

function removeTag(i) {
  tags.splice(i,1);
  render()
}




render();

input.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    tags.push(input.value.trim())
    input.value = '';
    render();
  }
})

btnRA.addEventListener('click', function() {
  tags = []
  render()
})

