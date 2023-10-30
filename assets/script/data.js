/* const users = [
  {
    name: "John Doe",
    task: "Complete project",
    duration: "2 hours",
    contact: "john@example.com",
  },
  {
    name: "Jane Smith",
    task: "Review documents",
    duration: "1 hour",
    contact: "jane@example.com",
  },
  {
    name: "Bob Williams",
    task: "Prepare presentation",
    duration: "3 hours",
    contact: "bob@example.com",
  },
  {
    name: "John Doe",
    task: "Complete project",
    duration: "2 hours",
    contact: "john@example.com",
  },
  {
    name: "Jane Smith",
    task: "Review documents",
    duration: "1 hour",
    contact: "jane@example.com",
  },
  {
    name: "Bob Williams",
    task: "Prepare presentation",
    duration: "3 hours",
    contact: "bob@example.com",
  },
  {
    name: "John Doe",
    task: "Complete project",
    duration: "2 hours",
    contact: "john@example.com",
  },
  {
    name: "Jane Smith",
    task: "Review documents",
    duration: "1 hour",
    contact: "jane@example.com",
  },
  {
    name: "Bob Williams",
    task: "Prepare presentation",
    duration: "3 hours",
    contact: "bob@example.com",
  },
  {
    name: "John Doe",
    task: "Complete project",
    duration: "2 hours",
    contact: "john@example.com",
  },
  {
    name: "Jane Smith",
    task: "Review documents",
    duration: "1 hour",
    contact: "jane@example.com",
  },
  {
    name: "Bob Williams",
    task: "Prepare presentation",
    duration: "3 hours",
    contact: "bob@example.com",
  },
  {
    name: "John Doe",
    task: "Complete project",
    duration: "2 hours",
    contact: "john@example.com",
  },
  {
    name: "Jane Smith",
    task: "Review documents",
    duration: "1 hour",
    contact: "jane@example.com",
  },
  {
    name: "Bob Williams",
    task: "Prepare presentation",
    duration: "3 hours",
    contact: "bob@example.com",
  },
];

const parentDiv = document.getElementById("parent-div");
let counter = 1;

const userElements = users.map((user) => {
  const userDiv = document.createElement("div");

  userDiv.id = `user-${counter}`;

  userDiv.innerHTML = `
      <h2 id="userName-${counter}">Name: ${user.name}</h2>
      <p id="task-${counter}">Task: ${user.task}</p>
      <p id="duration-${counter}">Duration: ${user.duration}</p>
      <p id="contact-${counter}">Contact: ${user.contact}</p>
    `;

  const mainTarget = document.getElementById("mainTarget");
  mainTarget.appendChild(parentDiv);

  parentDiv.appendChild(userDiv);

  counter++;

  return userDiv;
});

console.log(userElements);
 */

const userList = document.getElementById("user-list");

const renderUsers = (users) => {
userList.innerHTML = "";
users.map((user) => {
const userItem = document.createElement("div");
userItem.classList.add("user-item");

const name = document.createElement("h3");
name.innerText = user.name;
userItem.appendChild(name);

const task = document.createElement("p");
task.innerText = `Task: ${user.task}`;
userItem.appendChild(task);

const duration = document.createElement("p");
duration.innerText = `Duration: ${user.duration}`;
userItem.appendChild(duration);

const contact = document.createElement("p");
contact.innerText = `Contact: ${user.contact}`;
userItem.appendChild(contact);

userList.appendChild(userItem);
});
};