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
  blankLi.innerText = theirTask
  taskList.append(blankLi)
})