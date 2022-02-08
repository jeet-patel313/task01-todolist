const addBtn = document.getElementById("add");
let inputVal = document.getElementById("userinput"); //fetch userinput

//function to add to the list
function addHandler() {
    //check if the input is empty
    if (inputVal.value == "") {
        return;
    }
    
    else {
        let unList = document.getElementById("unList");
        let newLi = document.createElement("li");
        newLi.textContent = inputVal.value;

        let a = document.createElement("a");
        a.textContent = "DELETE";
        a.href = "javascript:void(0)";
        newLi.append(a);

        unList.prepend(newLi);
    }
}

//function to remove from the list
function removeHandler(event) {
    let unList = document.getElementById("unList");
    let lis = event.target.parentNode;
    unList.removeChild(lis);
}

//calling the add function
addBtn.addEventListener("click", addHandler); 

//removing from the task list
let removeBtn = document.querySelector("ul"); 
removeBtn.addEventListener("click", removeHandler);