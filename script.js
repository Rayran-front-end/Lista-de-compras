const btnClick = document.querySelector("#enviar")
const addInput = document.querySelector("#adding")
const output = document.querySelector(".output")
// const ulList = document.querySelector(".list-itens")


function removeItens() {
   const remove = document.createElement("div")
   remove.classList.add("remove", "flex")

   const iconsRemove = document.createElement("div")
   iconsRemove.classList.add("flex")

   const imgDelete = document.createElement("img")
   imgDelete.setAttribute("src", "./icons/atencao.svg")

   const spanRemove = document.createElement("span")
   spanRemove.textContent = "O item foi removido da lista"

   const deleteIcons = document.createElement("img")
   deleteIcons.setAttribute("src", "icons/delete.svg")

   iconsRemove.append(imgDelete,spanRemove)
   remove.append(iconsRemove, deleteIcons)
   output.append(remove)

   deleteIcons.addEventListener("click", () => {
      remove.remove()
   })
}


function addingItens() {
   if(addInput.value !== "") {
      const ulList = document.createElement("ul")
      ulList.classList.add("list-itens", "flex")
      
      const liList = document.createElement("li")
      liList.classList.add("flex")

      const divItens = document.createElement("div")
      divItens.classList.add("itens", "flex")

      const inputCheck = document.createElement("input")
      inputCheck.setAttribute("type", "checkbox")
      inputCheck.setAttribute("id", "item-check")

      const spanResult = document.createElement("span")
      spanResult.textContent = addInput.value

      const imgRemove = document.createElement("img")
      imgRemove.setAttribute("src", "./icons/lixeira.svg")
         
      imgRemove.addEventListener("click", () => {
        if(inputCheck.checked) {
           liList.remove()
           removeItens()
        } else {
           alert("Selecione o item que você deseja remover")
        }
      })
   
      divItens.append(inputCheck, spanResult)
      liList.append(divItens,imgRemove)
      ulList.append(liList)
   //    console.log(ulList)
      output.append(ulList)

      clearInput()
   } else {
      alert("Por favor, digite um nome")
   }
}

function clearInput() {
   addInput.value = ""
   addInput.focus()
}

btnClick.addEventListener("click", (e) => {
  e.preventDefault()
  
  addingItens()
})

