function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for(const state of states){

            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }
    } )

}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value;
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true;

    fetch( url )
    .then( res => res.json() )
    .then( cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;

    } )
    
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// Itens de Coleta

//Busquei todos os itens no Grid.
const itemsToColletc = document.querySelectorAll(".items-grid li")

//Escuto o evento click em todos os items e chamo a função HandleSelected
for(const item of itemsToColletc){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")

//Array dos items que estão selecionados
let selectedItems = []

function handleSelectedItem(event){

    //Item que foi clicado.
    const itemLi = event.target

    //Removo ou adicionar a classe selected
    itemLi.classList.toggle("selected");

    //Id do item que foi clicado
    const itemId = event.target.dataset.id

    //O item ja foi selecionado?
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId

        return itemFound
    })
    
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferente = item != itemId
            return itemIsDifferente
        })

        selectedItems = filteredItems;
    }else{
        selectedItems.push(itemId);
    }

    collectedItems.value = selectedItems;
    
}