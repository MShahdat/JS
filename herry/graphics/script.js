

// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// canvas.height = canvas.width;
// ctx.transform(1, 0, 0, -1, 0, canvas.height)

// const xArray = [50,60,70,80,90,100,110,120,130,140,150];
// const yArray = [7,8,8,9,9,9,10,11,14,14,15];

// ctx.fillStyle = "red";
// for (let i = 0; i < xArray.length-1; i++) {
//   let x = xArray[i]*400/150;
//   let y = yArray[i]*400/15;
//   ctx.beginPath();
//   ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
//   ctx.fill();
// }





// const line = document.getElementById('canvas1');
// const ctx1 = line.getContext('2d')
// ctx1.fillStyle = '#FF0000'
// line.height = canvas.width
// ctx1.transform(1, 0, 0, -1, 0, canvas.height)

// let xMax = line.height;
// let slope = 1
// let intercept = 0;


// ctx1.moveTo(0, intercept);
// ctx1.lineTo(xMax, f(xMax))
// ctx1.strokeStyle = 'black';
// ctx1.stroke();


// function f(x){
//   return x * slope + intercept;
// }




// scatter graph
let X = [50,60,70,80,90,100,110,120,130,140,150];
let Y = [7,8,8,9,9,9,10,11,14,14,15];

let data = [{
  x:X,
  y: Y,
  mode: 'markers'
}]

let layout = {
  xaxis: {range: [40, 160], title: 'Square Meters'},
  yaxis: {range: [5, 16], title: 'Price of Millions'},
  title: "House Prices vs Size"
};

Plotly.newPlot('scatter', data, layout)



// line graph
data = [{
  x: X,
  y: Y,
  mode: 'lines',
  type: 'scatter'
}]


layout = {
  xaxis: {range : [40, 160], title: 'Square Meters'},
  yaxis: {range : [4, 16], title: 'Price of Millions'},
  title: 'House Price vs Size'
}


Plotly.newPlot('line', data, layout)



// linear graph
let exp = 'x + 15';

let xVal = []
let yVal = []
for(let x = 0; x <= 10; x++){
  xVal.push(x);
  yVal.push(eval(exp))
}

data = [{
  x: xVal,
  y: yVal,
  mode: 'lines'
}]

layout = {title: 'y = ' + exp};

Plotly.newPlot('linear', data, layout)




// multiple line
let exp1 = "x";
let exp2 = "1.5*x";
let exp3 = "1.5*x + 7";


const x1Val = [];
const x2Val = [];
const x3Val = [];
const y1Val = [];
const y2Val = [];
const y3Val = [];

for (let x = 0; x <= 10; x += 1) {
  x1Val.push(x);
  x2Val.push(x);
  x3Val.push(x);
  y1Val.push(eval(exp1));
  y2Val.push(eval(exp2));
  y3Val.push(eval(exp3));
}

data = [
  {x: x1Val, y: y1Val, mode: 'lines'},
  {x: x2Val, y: y2Val, mode: 'lines'},
  {x: x3Val, y: y3Val, mode: 'lines'},
]

layout = {title: `[y = ${exp1}] [y = ${exp2}] [y = ${exp3}]`}

Plotly.newPlot('mLine', data, layout)




// bar graph

X = ["Italy", "France", "Spain", "USA", "Argentina"];
Y = [55, 49, 44, 24, 15];

 data = [{
  x: X,
  y: Y,
  type: 'bar',
  orientation: 'v',
  marker: {color: 'rgba(0,0,255,0.6)'}
}]

layout = {title: 'World Wide Wine Production'}
Plotly.newPlot('bar', data, layout)




 data = [{
  x: Y,
  y: X,
  type: 'bar',
  orientation: 'h',
  marker: {color: 'rgba(255,0,0,0.6)'}
}]

layout = {title: 'World Wide Wine Production'}
Plotly.newPlot('bar1', data, layout)




 data = [{
  labels: X,
  values: Y,
  type: 'pie'
}]

Plotly.newPlot('pie', data, layout)



 data = [{
  labels: X,
  values: Y,
  hole: .4, 
  type: 'pie'
}]

Plotly.newPlot('dountChart', data, layout)





exp = 'Math.sin(i)';

xVal = []
yVal = []

for (let i = 0 ; i <= 10; i += .1){
  xVal.push(i);
  yVal.push(eval(exp))
}

data = [{
  x: xVal,
  y: yVal,
  mode: 'lines'
}]

layout = {title: `y = ${exp}`}

Plotly.newPlot('sin', data, layout)







exp = 'Math.cos(i)';
xVal = [];
yVal = [];

for (let i = 0 ; i <= 10; i += .2){
  xVal.push(i);
  yVal.push(eval(exp))
}

data = [{
  x: xVal,
  y: yVal,
  mode: 'lines'
}]

layout = {title: `y = ${exp}`}

Plotly.newPlot('cos', data, layout)