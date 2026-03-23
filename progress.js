const table = document.getElementById("courseTable");
// Get completed courses
let completed = JSON.parse(localStorage.getItem("completed")) || [];
// Fill course table
courses.forEach(function(c) {
  table.innerHTML +=
    "<tr>" +
    "<td>" + c.name + "</td>" +
    "<td>" + c.lessons.length + "</td>" +
    "<td>" + (completed.includes(c.name) ? "✔ Completed" : "Pending") + "</td>"
    "</tr>";
});
// Calculate progress
let percent = 0;
if (courses.length > 0) {
  percent = Math.round((completed.length / courses.length) * 100);
}
// Update progress bar
document.getElementById("progressBar").value = percent;
document.getElementById("progressText").innerText = percent + "% completed";
