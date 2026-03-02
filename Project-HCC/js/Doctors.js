const doctors = [
  {name:"Dr. Rao", dept:"Cardiology", exp:"10 Years", status:"Available"},
  {name:"Dr. Meena", dept:"Dermatology", exp:"8 Years", status:"Available"},
  {name:"Dr. Kumar", dept:"Orthopedics", exp:"12 Years", status:"Busy"}
];

function displayDoctors(list){
  let container = document.getElementById("doctorContainer");
  container.innerHTML = "";
  list.forEach(doc => {
    container.innerHTML += `
      <div class="card">
        <h3>${doc.name}</h3>
        <p>Specialization: ${doc.dept}</p>
        <p>Experience: ${doc.exp}</p>
        <p>Status: ${doc.status}</p>
      </div>
    `;
  });
}

displayDoctors(doctors);
function searchDoctor(){
  let value = document.getElementById("search").value.toLowerCase();
  let filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(value) ||
    d.dept.toLowerCase().includes(value)
  );
  displayDoctors(filtered);
}