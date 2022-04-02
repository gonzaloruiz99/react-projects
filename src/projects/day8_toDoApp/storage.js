



// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    const grocery= {id, value:value};
    let items = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    :[];
    //console.log(items);

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
    
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !==id){
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage(){
    return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    :[];
}