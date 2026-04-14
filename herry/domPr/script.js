
const milestoneData = data.data
console.log(milestoneData)

const milestones = document.querySelector('.milestones')
console.log(milestones)

function loadMilestones() {
  milestones.innerHTML = `${milestoneData.map(function (milestone) {

    return `<div class="milestone border-b" id = '${milestone._id}'>
            <div class="flex">
              <div class="checkbox"><input onclick = 'myChecked(this, ${milestone._id})' type="checkbox" /></div>
              <div onclick= 'myElements(this, ${milestone._id})'>
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
                
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function(module) {
                
                return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
              }).join("")}
            </div>
          </div>`
  }).join("")}`
}


function myElements(item, id){
  console.log(item)
  const currentElem = item.parentNode.nextElementSibling
  const showPanel = document.querySelector('.show')

  const showActive = document.querySelector('.active');

  if(!item.classList.contains('active') && showActive){
    showActive.classList.remove('active')
  }
  
  item.classList.toggle('active')


  if(!currentElem.classList.contains("show") && showPanel){
    showPanel.classList.remove('show');
  }
  currentElem.classList.toggle('show')


  myMileston(id)
}


function myMileston(id){
  console.log(id)
  const milestoneImg = document.querySelector('.milestoneImage')
  milestoneImg.src = milestoneData[id].image
  milestoneImg.style.opacity = '0'
  const title = document.querySelector('.title')
  title.innerText = milestoneData[id].name

  const des = document.querySelector('.details')
  des.innerText = milestoneData[id].description
  
}

const milestoneImg = document.querySelector('.milestoneImage')
milestoneImg.onload = function(){
  this.style.opacity = '1'
}

function myChecked(checkbox, id){
  console.log('checked ' + id)
  const doneList = document.querySelector('.doneList')
  const milestonesList = document.querySelector('.milestones') 
  const item = document.getElementById(id)

  console.log(doneList, milestonesList, item)

  if(checkbox.checked){
    console.log(checkbox.checked)
    insertSort(doneList, item)
  }else{
    insertSort(milestonesList, item)
  }
}

function insertSort (parent, elem){
  const items = parent.querySelectorAll('.milestone')
  console.log(items)
  
  let inserted = false;

  items.forEach(function(item){
    console.log(item)
    const currentId = Number(item.id)
    const newId = Number(elem.id)

    if(newId < currentId && !inserted){
      parent.insertBefore(elem, item)
      inserted = true
    }
  });
  if(!inserted){
    parent.appendChild(elem)
  }
}


loadMilestones()