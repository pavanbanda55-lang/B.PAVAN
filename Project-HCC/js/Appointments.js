let userData = JSON.parse(localStorage.getItem("loggedInUser"));
if(userData){
  document.getElementById("patientName")?.value = userData.name;
}

document.getElementById("appointmentForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  let doctor = document.getElementById("doctorSelect").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let reason = document.getElementById("reason").value;

  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push({doctor,date,time,reason,patient:userData.name});
  localStorage.setItem("appointments", JSON.stringify(appointments));

  displayAppointments();
});

function displayAppointments(){
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  let table = document.getElementById("appointmentTable");
  if(!table) return;

  table.innerHTML = "";

  appointments.forEach((app,index)=>{
    table.innerHTML += `
      <tr>
        <td>${app.patient}</td>
        <td>${app.doctor}</td>
        <td>${app.date}</td>
        <td>${app.time}</td>
        <td><button onclick="cancelApp(${index})">Cancel</button></td>
      </tr>
    `;
  });
}

function cancelApp(index){
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.splice(index,1);
  localStorage.setItem("appointments", JSON.stringify(appointments));
  displayAppointments();
}

displayAppointments();