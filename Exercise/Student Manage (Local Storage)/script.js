document.addEventListener("DOMContentLoaded", () => {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let editIndex = null;

  const studentForm = document.getElementById("studentForm");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const studentTableBody = document.getElementById("studentTableBody");
  const formTitle = document.getElementById("formTitle");

  // Render the student table
  function renderTable() {
    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {
      const row = `
              <tr>
                  <td class="border px-4 py-2">${student.name}</td>
                  <td class="border px-4 py-2">${student.age}</td>
                  <td class="border px-4 py-2">
                      <button class="bg-green-500 text-white px-4 py-1 rounded mr-2" onclick="editStudent(${index})">Edit</button>
                      <button class="bg-red-500 text-white px-4 py-1 rounded" onclick="deleteStudent(${index})">Delete</button>
                  </td>
              </tr>
          `;
      studentTableBody.innerHTML += row;
    });
  }

  // Add or update student
  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const student = {
      name: nameInput.value,
      age: ageInput.value,
    };

    if (editIndex !== null) {
      students[editIndex] = student;
      editIndex = null;
      formTitle.textContent = "Add Student";
    } else {
      students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));
    studentForm.reset();
    renderTable();
  });

  // Edit student
  window.editStudent = function (index) {
    const student = students[index];
    nameInput.value = student.name;
    ageInput.value = student.age;
    editIndex = index;
    formTitle.textContent = "Edit Student";
  };

  // Delete student
  window.deleteStudent = function (index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    renderTable();
  };

  // Initial table render
  renderTable();
});
