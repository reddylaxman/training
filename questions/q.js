const empDetails = [
  {
    empId: "1",
    empName: "Laxman Reddy",
    empCompany: "AWS",
    empSalary: "2L",
    empAddress: {
      area: "Moosapet",
      city: "Hyderabad",
    },
  },
  {
    empId: "2",
    empName: "Laxman",
    empCompany: "Microsoft",
    empSalary: "3L",
    empAddress: {
      area: "KPHB",
      city: "Hyderabad",
    },
  },
  {
    empId: "3",
    empName: "Anand sai",
    empCompany: "ASL",
    empSalary: "2L",
    empAddress: {
      area: "Howrah",
      city: "Kolkata",
    },
  },
];

empDetails.map((emp) => {
  let data = document.getElementById("empData");
  data.innerHTML += `
    <tr draggable="true"
          ondragstart="dragpoint(event) " id="${emp.empId}">
    <th>${emp.empId}</th>
    <th>${emp.empName}</th>
    <th>${emp.empCompany}</th>
    <th>${emp.empSalary}</th>
    <th>${emp.empAddress.area}</th>
    <th>${emp.empAddress.city}</th>
     </tr>
    `;
});

function droppoint(event) {
  let data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  event.preventDefault();
}
function allowDropOption(event) {
  event.preventDefault();
}
function dragpoint(event) {
  event.dataTransfer.setData("Text", event.target.id);
}
