
let myleads=[]
let oldLeads=[]
let inputEL=document.getElementById("input-el")
const list=document.getElementById("list")
const tabBtn=document.getElementById("tabBTN")

const deleteBTN=document.getElementById("deleteBtn")
let leadsLocal=JSON.parse(localStorage.getItem("myleads"))
console.log(leadsLocal)
if(leadsLocal){
  myleads=leadsLocal
  render(myleads)
}

tabBtn.addEventListener("click",function(){

chrome.tabs.query({active: true, currentWindow: true}, function(tabs1){
  myleads.push(tabs1[0].url)
  localStorage.setItem("myleads", JSON.stringify(myleads) )
  render(myleads)
})

})
deleteBTN.addEventListener("dblclick",function(){
  console.log("delete clicked ")
  localStorage.clear()
  myleads=[]
  render(myleads)
})
let inputBtn=document.getElementById("inputBtn")
inputBtn.addEventListener("click",function(){
    myleads.push(inputEL.value)
      inputEL.value=""
    
  localStorage.setItem("myleads",JSON.stringify(myleads))
render(myleads)
console.log(localStorage.getItem("myleads"))
})
function render(leads){
    let listItems=""
  for(let i=0;i<leads.length;i++)
{

    listItems+=`<li><a target='_blank' href='${leads[i]}'>${leads[i]}</li>`
} 
list.innerHTML=listItems
}
