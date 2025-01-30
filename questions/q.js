const empDetails = [
  {
    empId: "1",
    empName: "Laxman Reddy",
    empCompany: "AWS",
    empSalary: "2L",
    empAddress: { area: "Moosapet", city: "Hyderabad" },
  },
  {
    empId: "2",
    empName: "Laxman",
    empCompany: "Microsoft",
    empSalary: "3L",
    empAddress: { area: "KPHB", city: "Hyderabad" },
  },
  {
    empId: "3",
    empName: "Anand Sai",
    empCompany: "ASL",
    empSalary: "2L",
    empAddress: { area: "Howrah", city: "Kolkata" },
  },
];

const empTable = document.getElementById("empData");

empDetails.forEach((emp) => {
  let row = document.createElement("tr");
  row.draggable = true;
  row.id = `row-${emp.empId}`;
  row.ondragstart = dragpoint;

  row.innerHTML = `
    <td>${emp.empId}</td>
    <td>${emp.empName}</td>
    <td>${emp.empCompany}</td>
    <td>${emp.empSalary}</td>
    <td>${emp.empAddress.area}</td>
    <td>${emp.empAddress.city}</td>
  `;
  empTable.appendChild(row);
});

function droppoint(event) {
  event.preventDefault();
  let draggedRowId = event.dataTransfer.getData("text");
  let draggedRow = document.getElementById(draggedRowId);
  let targetRow = event.target.closest("tr");

  if (targetRow && targetRow !== draggedRow) {
    let tbody = targetRow.parentNode;
    tbody.insertBefore(draggedRow, targetRow.nextSibling);
  }
}

function allowDropOption(event) {
  event.preventDefault();
}

function dragpoint(event) {
  event.dataTransfer.setData("text", event.target.id);
}
