var myArray = [
  {
    name: "Ali Kinani",
    age: "24",
    date: "14/01/2023",
    time: "10:30pm",
  },
  {
    name: "Shamail haider",
    age: "22",
    date: "14/01/2023",
    time: "11:30pm",
  },
  {
    name: "Harsh Patel",
    age: "24",
    date: "14/01/2023",
    time: "12:30pm",
  },
  {
    name: "Yaru XU",
    age: "22",
    date: "14/01/2023",
    time: "1:30pm",
  },
];

buidTabele(myArray);

function buidTabele(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                    <td>${data[i].name}</td>
                    <td>${data[i].age}</td>
                    <td>${data[i].date}</td>
                    <td>${data[i].time}</td>
              </tr>`;
    table.innerHTML += row;
  }
}
