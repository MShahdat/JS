
const hel = document.querySelector('p');
console.log(hel.innerText)


console.dir(document.getElementById('demo'))
const demo = document.getElementById('demo');
demo.innerHTML = 'this accessed by id'

const demo1 = document.getElementById('demo1')

demo1.innerHTML = 'changed';

const p1 = document.getElementsByTagName('p')
p1[0].style.color = 'red'
p1[0].style.backgroundColor = 'black'
// console.log(p1[0])

p1[1].style.color = 'green'
p1[1].style.fontWeight = 'bold'
p1[1].style.fontSize = '30px'

function myFunction() {
  const x = document.getElementById('demo2')
  // console.log(x)
  x.innerText = 'this is show after the click button';
}

const fs1 = document.forms['f1'];
console.dir(fs1)
let text = '';
for (let i = 0; i < fs1.length; i++) {
  // console.log(fs1.elements[i].value)
  text += fs1.elements[i].value + '</br>'
}

document.getElementById('fs1').innerHTML = text;


const p = document.querySelector('p')
console.log(p.innerHTML)

console.log(document.querySelectorAll('p'))

const anchorLen = document.anchors.length;
// console.log(anchorLen)

const anchor = document.getElementById('anchor')
anchor.innerHTML = 'Total lenght of anchor tag = ' + anchorLen



const li = document.querySelectorAll('li')
// console.log(li)

const colorTxt = [
  { color: 'red' },
  { color: 'purple' },
  { color: 'green' },
  { color: 'blue' }
]
console.log(colorTxt[1].color)

for (let i = 0; i < li.length; i++) {
  // console.log(li[i])
  li[i].style.color = colorTxt[i].color
  li[i].style.fontWeight = 'bold'
  li[i].style.fontSize = '20px'
}

const cImg = document.getElementById('cngImg')
// console.log(cImg)

function cngImgFun() {
  // console.log(cImg.src)
  cImg.src = 'https://plus.unsplash.com/premium_photo-1737455898443-2a5c4ad3197b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}



function formHandle() {
  const num = document.getElementById('num')
  let txt = num.value
  let text
  if (txt < 0 || isNaN(txt) || txt === '') {
    text = 'invalid input'
    alert('please enter the integer input')
  } else {
    text = 'input valid and input is: '
  }
  document.getElementById('output').innerHTML = text + `${txt}`
}


function changeColor() {
  const c1 = document.getElementById('e1')
  console.log(c1)
  c1.style.color = 'red'
  c1.style.cursor = 'default'
}


  const c2 = document.getElementById('e2')
  console.log(c2)
  
  c2.addEventListener('mouseover', () => {
    c2.style.backgroundColor = 'purple';
    c2.style.color = 'white'
    c2.style.cursor = 'default'
  })
  c2.addEventListener('mouseleave', () => {
    c2.style.backgroundColor = '';
    c2.style.color = '';
  })

function cha() {
  let val = document.getElementById('in')
  console.log(val.value)
  document.getElementById('o1').innerHTML = 'My name is ' + val.value
}

const co = document.querySelector('#co');
co.addEventListener('click', function(){
  fu('clicked')
});

function fu(c) {
  co.style.backgroundColor = 'purple';
  co.style.color = 'white'
  co.style.padding = '8px'
  console.log(c)
}


const bobbling = document.querySelector('.bob_cap');
const out = document.querySelector('.out')


bobbling.addEventListener('click', function(){
  fun('this is parent part output')
}) // if use true in the 3rd parameter it will be capturing.



const child = document.querySelector('.child');
child.addEventListener('click', function(e){
  e.stopPropagation(); // ignore this child part
  fun('this is child part output')
}) // 


function fun(o){
  out.innerHTML += o + '<br>'
}



const chi1 = document.querySelector('.chi1')
console.log(chi1)

console.log(chi1.innerHTML)
console.log(chi1.firstChild.nodeValue)
console.log(chi1.childNodes[0].nodeValue)
console.log(chi1.nextSibling)
