let commentForm = document.querySelector("form#create-task-form")
let taskList = document.querySelector("ul#tasks")


commentForm.addEventListener("submit", function(evt){
  // to pause the refresh
  evt.preventDefault()
  // get their input and store it
  let theirTaskInput = commentForm["new-task-description"]
  let theirTask = theirTaskInput.value
  // console.log(theirTask)
  // create a list for it and then add it to the list 
  let blankLi = document.createElement("li") 
  let blankSpan = document.createElement('span')
  let buttonNode = document.createElement('button')

  blankSpan.innerText = theirTask
  taskList.append(blankLi)
  blankLi.appendChild(blankSpan)
  blankLi.appendChild(buttonNode)
  buttonNode.innerText = 'delete'
  console.log(taskList)
})

buttonNode.addEventListener("click", function (evt){
         
})

