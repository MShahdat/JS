
document.getElementById('btn').addEventListener('click', fun)

function fun(){
  $('#h1').text('updated JQuery')
}





document.getElementById('show').addEventListener('click', show)

function show(){
  $('#s1').html('<div>this is parent div <p style="color: red; font-weight: bold;">this is child tag</p></div>')
}




document.getElementById('append').addEventListener('click', append)

function append(){
  $('#add').append('=> add the new content')
}



document.getElementById('prepend').addEventListener('click', prepend)

function prepend(){
  $('#add1').prepend('add the new content ')
}




