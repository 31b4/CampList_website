read();
async function read() {
    console.log("On belepett.");
    const value = await fetch('storage/camplist.txt').then(response => response.text())
    let array = value.split(/( \(|\)|,\n)/);
    removeItemAll(array," (");
    removeItemAll(array,")");
    console.log(array)
    var div = document.getElementById("listaaa");
    for (let index = 0; index < array.length; index++) {
        var newElement = document.createElement("P");
        if (index%2==0) {
            if (array[index]=="\r\nShrug EU") {
                newElement.className ="blue";
            }
            else{
                newElement.className ="red";           
            }
        }
        else{
            newElement.className ="info"; 
        }
        newElement.innerText = array[index];              
        div.appendChild(newElement);
    }
}
function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
