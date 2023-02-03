document.getElementById('food').style.color = 'green'

var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["recipesName"] = document.getElementById("recipesName").value;
    formData["ingredients"] = document.getElementById("ingredients").value;
    formData["calories"] = document.getElementById("calories").value;
    formData["dailyValue"] = document.getElementById("dailyValue").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.recipesName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.ingredients;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.calories;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.dailyValue;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("recipesName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ingredients").value = selectedRow.cells[1].innerHTML;
    document.getElementById("calories").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dailyValue").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.recipesName;
    selectedRow.cells[1].innerHTML = formData.ingredients;
    selectedRow.cells[2].innerHTML = formData.calories;
    selectedRow.cells[3].innerHTML = formData.dailyValue;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("recipesName").value = '';
    document.getElementById("ingredients").value = '';
    document.getElementById("calories").value = '';
    document.getElementById("dailyValue").value = '';
    selectedRow = null;
}