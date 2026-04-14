

// function fun (name){
//   console.log(`how are you ${name || 'haha'} uncle`)
// }
// fun('rakib')




// const product = {
//   company: 'mango',
//   price : 89,
//   item_name: 't-shirt',
//   'discount-price': 30,
// }

// // console.log(product ['company'])
// console.log(product["discount-price"])
// product.company = 'banana';
// console.log(product)
// delete product["discount-price"]
// console.log(product)



// const product = {
//   company: 'mango',
//   price : 89,
//   item_name: 't-shirt',
//   'discount-price': 30,
//   rating: {
//     star: 4.5,
//     count: 84,
//   },
//   displayPrice: function (){
//     console.log(`price of the product is ${this.price}`)
//   }
// }
// product.displayPrice()




// console.log('this is rakib'.toUpperCase())
// console.log('this is rakib')
// console.log('this is rakib'.replace('rakib', 'shahdat'))



// const product = {
//   company: 'mango',
//   price : 89,
//   item_name: 't-shirt',
//   'discount-price': 30,
// }

// let {company, price, item_name} = product;
// console.log(company, price, item_name)




// let product = {
//   name: "jeans",
//   size: 'S',
//   fit: 'slim fit'
// }

// let cpyProduct = product;
// console.log(product)
// cpyProduct.size = 'M';
// console.log(product)
// product.size = 'XL';
// console.log(cpyProduct)




// let product1 = {
//   name: "jeans",
//   size: 'S',
//   fit: 'slim fit'
// }

// let product2 = {
//   name: "jeans",
//   size: 'M',
//   fit: 'slim fit',
//   price: 48,
// }

// function isIdenticalProduct(product1, product2){
//   if(typeof product1 !== 'object' || typeof product2 !== 'object'){
//     console.warn('parameters are not a object')
//     return false
//   }
//   if(product1 == product2){
//     return true
//   }

//   if(product1.name === product2.name && 
//     product1.size === product2.size
//   ){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isIdenticalProduct(product1, ''))
// console.log(isIdenticalProduct(product1, product2))
// console.log(isIdenticalProduct(product1, product1))




// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds())



// let button = document.createElement('Button');
// document.querySelector('.my-div').appendChild(button)
// button.innerText = 'click me'
// document.querySelector('.my-div').removeChild(button)



// let hour = 18;
// if(hour >=6 && hour <=12 ){
//   document.querySelector('#good').innerHTML = 'Good morning'
// }else if (hour > 13 && hour <21){
//   document.querySelector('#good').innerHTML = 'Good afternoon'
// }else if (hour >21 && hour <6){
//   document.querySelector('#good').innerHTML = 'Good night'
// }



    // let count = localStorage.getItem('count') || 0;
    // function pressed() {
    //   ++count
    //   localStorage.setItem('count', count)
    //   updateBtn()
    // }

    // function updateBtn () {
    //   let button = document.querySelector('.count');
    //   if (count % 2 === 0 ){
    //     console.log('even')
    //     button.classList.remove('js-odd')
    //     button.classList.add('js-even')
    //   }else{
    //     console.log('odd')
    //     button.classList.remove('js-even');
    //     button.classList.add('js-odd')
    //   }
    //   button.innerHTML = count
    // }
    // updateBtn()




    // const arr = [1,3,4,5]
    // console.log(arr)
    // arr.splice(1, 2)
    // console.log(arr)

    // let str = arr.toString()
    // console.log(typeof str)




    // let sum = function (num1, num2){
    //   return num1 + num2;
    // }

    // console.log(sum(5,4))


    // let sumThree = function(num1, num2, num3, sumTwo){
    //   let sum1 = sumTwo(num1, num2);
    //   return sumTwo(sum1, num3);
    // }

    // console.log(sumThree(3,4,5, sum))




    // const abc = () => {
    //   console.log('ok')
    // }
    // const a = () => console.log(new Date())
    // let timerId = setTimeout(abc, 5000);
    // console.log(`start timer with timerID: ${timerId}`)
    // // clearTimeout(timerId)

    // // let timerId2 = setTimeout(a, 1000);
    // // console.log(`start timer with timerId: ${timerId2}`)

    // let intervalId = setInterval(a, 1000);
    // setTimeout(() => {
    //   clearInterval(intervalId)
    // }, 4000);



    // let sum = () => {
    //   console.log('sum done')
    // }

    // let date = () => {
    //   console.log(new Date())
    // }
    // let button = document.querySelector('#my-btn');
    
    // button.addEventListener('click', sum)
    // button.addEventListener('click', date)
    // button.removeEventListener('click', sum)



    // let arr = [1, 3, 4, 3];
    // arr.forEach((item) => {
    //   console.log(item)
    // })


    // let key = prompt('enter your key');
    // let value = prompt('enter your value');

    // document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
    // console.log(document.cookie)



    // const arr = ([1, 2] + [3, 4])

    // console.log(arr)
    // console.log(arr[0])
    // console.log(arr[1])
    // console.log(arr[2])
    // console.log(arr[3])
    // console.log(arr[4])
    // console.log(arr[5])

    // console.log(typeof(arr))

    

    // console.log(0.3 + 0.5 === 0.)



    // const arr = [1, 3, 2, 1, 2, 3, 4, 5]
    // console.log(new Set ([...arr])) //type will be object
    // console.log([... new Set(arr)]) //type will be array



    // const ar = [1, 2, 3, 2, 1, 4, 2];
    // const unique = ar.filter((item, idx) => {
    //     return ar.indexOf(item) === idx;
    // })

    // console.log(unique)



    