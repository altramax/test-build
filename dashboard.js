// Initialize Line Chart for Patient Arrival

const patientBtn = document.getElementById("patient-btn");
const dashboardBtn = document.getElementById("dashboard-btn");
const mainContent = document.getElementById("main-content");
const doctorBtn = document.getElementById("doctor-btn");
const nursesBtn = document.getElementById("nurses-btn");
const menuLinks = document.querySelectorAll(".menu-link");
const addpatientbtn = document.getElementById("add-patient-btn");
const moduleArr = [patientBtn, dashboardBtn, doctorBtn, nursesBtn];

// doctorBtn.addEventListener("click", () => {
//   mainContent.innerHTML = `<h1>Doctor Dashboard</h1>`;
// });

// nursesBtn.addEventListener("click", () => {
//   mainContent.innerHTML = `<h1>Nurses Dashboard</h1>`;
// });

// patientBtn.addEventListener("click", () => {
//   mainContent.innerHTML = `<h1>Patient Dashboard</h1>`;
// });

// dashboardBtn.addEventListener("click", () => {
//   mainContent.innerHTML = `<h1>Dashboard</h1>`;
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select all sidebar links using the correct class

  // Get the current page URL path
  const currentPage = window.location.pathname.split("/").pop();

  // Check if the links were found

  console.log("Menu links found:", menuLinks);
  // Loop through links to find the active page
  moduleArr.forEach((link) => {
    console.log(link.getAttribute("href").split("./")[1], currentPage);
    if (link.getAttribute("href").split("./")[1] === currentPage) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

addpatientbtn.addEventListener("click", () => {
  document.getElementById("dataModal").style.display = "block";
  console.log("cliked");
});

const ctx1 = document.getElementById("lineChart").getContext("2d");
new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patient In",
        data: [300, 400, 350, 400, 350, 500],
        borderColor: "#2ecc71",
        fill: false,
      },
      {
        label: "Patient Out",
        data: [200, 150, 170, 180, 211, 190],
        borderColor: "#f39c12",
        fill: false,
      },
    ],
  },
});

// Initialize Bar Chart for Financial Flow
const ctx2 = document.getElementById("barChart").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Approved Claims", "Pending Claims"],
    datasets: [
      {
        label: "Revenue",
        data: [45123, 17470],
        backgroundColor: ["#3498db", "#f1c40f"],
      },
    ],
  },
});
