const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const btnSelected = document.querySelector("#btn_copy")
const btnBack = document.querySelector("#btn_back")
const courseAll = [...document.querySelectorAll(".course")]
 
courseAll.map((el)=>{
  el.addEventListener("click", (evt)=>{
    let course= evt.target
    course.classList.toggle("selected")
    
  })
})

btnSelected.addEventListener("click", ()=>{
  const courseSelected = [...document.querySelectorAll(".selected")]
  // console.log(courseSelected);
  courseSelected.map((el)=>{
    box2.appendChild(el)
  })
})

btnBack.addEventListener("click",()=>{
  const courseBack =[...document.querySelectorAll(".selected")]
  //console.log(courseBack);
  courseBack.map((el)=>{
    box1.appendChild(el)
  })

})