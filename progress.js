const table = document.getElementById("courseTable");
// Fill course table
courses.forEach(function(c) {
  table.innerHTML +=
    "<tr>" +
    "<td>" + c.name + "</td>" +
    "<td>" + c.lessons.length + "</td>" +
    "<td>0%</td>" +
    "</tr>";
});
// Get completed courses from localStorage
let completed = JSON.parse(localStorage.getItem("completed")) || [];
// Calculate progress
let percent = 0;
if (courses.length > 0) {
  percent = Math.round((completed.length / courses.length) * 100);
}
// Update progress bar
document.getElementById("progressBar").value = percent;
document.getElementById("progressText").innerText = percent + "% completed";