const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6ImtRNXlRRnMzcnlPWVJ2T3VNSkV6IiwiY29tcGFueV9pZCI6Ikw0bkdZYkdrbFdFc3NuYmt2dmZrIiwidmVyc2lvbiI6MSwiaWF0IjoxNjk4NDIyNzcwNjkxLCJzdWIiOiJMdkN6Vk5wYzN3THd2YWJmOEZQSCJ9.obYm3dIQzCGEGsaN5zlpy309jK7-j44wBFuOaABvqUQ";

async function contactCredentials() {
  const fullData = document.getElementById("app").__vue__;

  const data = fullData.$store.getters["users/getAll"];
  let employee;
  let employer;
  let monetaryVal = 0;
  let opportunityName = "";
  let taskArray = [];
  let assigToName = "";
  let tasksWithMostRecentDueDate = [];
  let DisplayTask = [];
  let _headers = new Headers();
  _headers.append("Authorization", `Bearer ${token} `);

  var requestOptions = {
    method: "GET",
    headers: _headers,
    redirect: "follow",
  };

  await fetch(
    ` https://rest.gohighlevel.com/v1/pipelines/MPQxitGYgwKI10JCKJKM/opportunities/EpHvWNslTNNBzOD6ry2c`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      employee = result.assignedTo;
      employer = result.contact.id;
      monetaryVal = result.monetaryValue;
      opportunityName = result.name;
    })
    .catch((error) => console.log("error", error));

  const filteredObjects = data.find((obj) => obj._data.id === employee);

  if (filteredObjects) {
    assigToName = filteredObjects._data.name;
  } else {
    console.log("Employee not found");
  }

  await fetch(
    `https://rest.gohighlevel.com/v1/contacts/${employer}/tasks/`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      taskArray = result;
    })
    .catch((error) => console.log("error", error));

  const assignedToTaskArray = taskArray.tasks.filter(
    (task) => task.isCompleted === false
  );
  console.log("assignedToTaskArray", assignedToTaskArray);
  if (assignedToTaskArray.length == 1) {
    DisplayTask = assignedToTaskArray;
  } else {
    const mostRecentDueDate = assignedToTaskArray.reduce(
      (maxDueDate, assignedToTaskArray) => {
        return new Date(assignedToTaskArray.dueDate) < maxDueDate
          ? new Date(assignedToTaskArray.dueDate)
          : maxDueDate;
      },
      new Date(assignedToTaskArray[0].dueDate)
    );

    tasksWithMostRecentDueDate = assignedToTaskArray.filter(
      (task) => new Date(task.dueDate).getTime() === mostRecentDueDate.getTime()
    );
  }
  DisplayTask = tasksWithMostRecentDueDate.slice(0, 1);

  console.log("Display", DisplayTask, typeof DisplayTask);
  const UserInfo = DisplayTask.map((item) => {
    return {
      ...item,
      value: monetaryVal,
      name: assigToName,
      opportunityNam: opportunityName,
    };
  });
  console.log(UserInfo);
  return UserInfo;
}
const UserInfo = contactCredentials();
const cards = document.querySelector("#OpportunitiesList .card");

contactCredentials().then((userdata) => {
  userdata.forEach((user,) => {
    const dueTime = new Date(user.dueDate);

  const currentTime = new Date();
  const timeDifferenceInMilliseconds =
    dueTime.getTime() - currentTime.getTime();
  const hoursRemaining = Math.floor(
    Math.abs(timeDifferenceInMilliseconds) / (1000 * 60 * 60)
  );
  console.log(7);
  let remainingTime;
  if (timeDifferenceInMilliseconds < 0) {
    remainingTime = "Past due";
  } else if (hoursRemaining >= 24) {
    const daysRemaining = Math.floor(hoursRemaining / 24);
    remainingTime = `${daysRemaining} days`;
  } else {
    remainingTime = `${hoursRemaining} hours`;
  }
  console.log(8);
  let formattedTime = remainingTime;
  let textColor = "black";
  if (timeDifferenceInMilliseconds < 0) {
    textColor = "red";
  }
  console.log(9);
  formattedTime = `<span style="color: ${textColor};">${formattedTime}</span>`;

  console.log(`Remaining time: ${formattedTime}`);

  const dealsCard1 = document.createElement("div");
  dealsCard1.classList.add("deals__card");
  console.log(10);

  const dealsCardContent1 = document.createElement("div");
  dealsCardContent1.classList.add("dealscard__content");

  const dealsCardInner1 = document.createElement("div");
  dealsCardInner1.classList.add("dealscard__inner");

  const dealsName1 = document.createElement("div");
  dealsName1.classList.add("dealsName");
  dealsName1.id = "deals__Name";
  dealsName1.innerHTML = `<span>${user.title}</span>`;
  console.log(12);
  const dealsDuration1 = document.createElement("div");
  dealsDuration1.classList.add("deals__Duration");
  dealsDuration1.innerHTML = `<input type="checkbox" name="dealsName" id="deals__timeChecker"><span class="dealTime" id="deals__WorkHours" style="color: ${textColor}">${remainingTime}</span>`;

  dealsCardInner1.appendChild(dealsName1);
  dealsCardInner1.appendChild(dealsDuration1);

  const Informationcontent = document.createElement("div");
  Informationcontent.classList.add("informationContent");
  Informationcontent.id = "informationContent";
  console.log(14);

  const assigneeInformation1 = document.createElement("div");
  assigneeInformation1.classList.add("assignee__information");
  assigneeInformation1.id = "assignee__information";
  assigneeInformation1.innerHTML = `${user.name}`;

  const assigneeAvatar1 = document.createElement("div");
  assigneeAvatar1.classList.add("assignee__avatar", "avatar");
  assigneeAvatar1.id = "assignee__avatar";
  console.log(19);

  const avatarIcon = document.createElement("i");
  avatarIcon.classList.add("fa-solid", "fa-user");

  assigneeAvatar1.appendChild(avatarIcon);
  console.log(18);

  const assigneeTaskValue = document.createElement("div");
  assigneeTaskValue.classList.add("assigneeTask__value");
  assigneeTaskValue.id = "assigneeTask__value";
  assigneeTaskValue.innerHTML = ` F${user.value}`;

  assigneeInformation1.appendChild(assigneeAvatar1);
  console.log(20);

  Informationcontent.appendChild(assigneeInformation1);
  Informationcontent.appendChild(assigneeTaskValue);
  console.log(28);

  dealsCardContent1.appendChild(dealsCardInner1);
  dealsCardContent1.appendChild(Informationcontent);

  dealsCard1.appendChild(dealsCardContent1);

  dealsCardContainer.appendChild(dealsCard1);
  });

 
});

const spanDatas = document.querySelectorAll("#OpportunitiesList .hl-card-content span a") 

const dealsCardContainer = document.createElement("div");
dealsCardContainer.classList.add( "dealsCardContainer");
const mainTarget = document.querySelector("#OpportunitiesList .card .hl-card-content");

mainTarget.appendChild(dealsCardContainer);

date.forEach((user) => {
  const dueTime = new Date(user.dueDate);

  const currentTime = new Date();
  const timeDifferenceInMilliseconds =
    dueTime.getTime() - currentTime.getTime();
  const hoursRemaining = Math.floor(
    Math.abs(timeDifferenceInMilliseconds) / (1000 * 60 * 60)
  );
  console.log(7);
  let remainingTime;
  if (timeDifferenceInMilliseconds < 0) {
    remainingTime = "Past due";
  } else if (hoursRemaining >= 24) {
    const daysRemaining = Math.floor(hoursRemaining / 24);
    remainingTime = `${daysRemaining} days`;
  } else {
    remainingTime = `${hoursRemaining} hours`;
  }
  console.log(8);
  let formattedTime = remainingTime;
  let textColor = "black";
  if (timeDifferenceInMilliseconds < 0) {
    textColor = "red";
  }
  console.log(9);
  formattedTime = `<span style="color: ${textColor};">${formattedTime}</span>`;

  console.log(`Remaining time: ${formattedTime}`);

  const dealsCard1 = document.createElement("div");
  dealsCard1.classList.add("deals__card");
  console.log(10);

  const dealsCardContent1 = document.createElement("div");
  dealsCardContent1.classList.add("dealscard__content");

  const dealsCardInner1 = document.createElement("div");
  dealsCardInner1.classList.add("dealscard__inner");

  const dealsName1 = document.createElement("div");
  dealsName1.classList.add("dealsName");
  dealsName1.id = "deals__Name";
  dealsName1.innerHTML = `<span>${user.title}</span>`;
  console.log(12);
  const dealsDuration1 = document.createElement("div");
  dealsDuration1.classList.add("deals__Duration");
  dealsDuration1.innerHTML = `<input type="checkbox" name="dealsName" id="deals__timeChecker"><span class="dealTime" id="deals__WorkHours" style="color: ${textColor}">${remainingTime}</span>`;

  dealsCardInner1.appendChild(dealsName1);
  dealsCardInner1.appendChild(dealsDuration1);

  const Informationcontent = document.createElement("div");
  Informationcontent.classList.add("informationContent");
  Informationcontent.id = "informationContent";
  console.log(14);

  const assigneeInformation1 = document.createElement("div");
  assigneeInformation1.classList.add("assignee__information");
  assigneeInformation1.id = "assignee__information";
  assigneeInformation1.innerHTML = `${user.name}`;

  const assigneeAvatar1 = document.createElement("div");
  assigneeAvatar1.classList.add("assignee__avatar", "avatar");
  assigneeAvatar1.id = "assignee__avatar";
  console.log(19);

  const avatarIcon = document.createElement("i");
  avatarIcon.classList.add("fa-solid", "fa-user");

  assigneeAvatar1.appendChild(avatarIcon);
  console.log(18);

  const assigneeTaskValue = document.createElement("div");
  assigneeTaskValue.classList.add("assigneeTask__value");
  assigneeTaskValue.id = "assigneeTask__value";
  assigneeTaskValue.innerHTML = ` F${user.value}`;

  assigneeInformation1.appendChild(assigneeAvatar1);
  console.log(20);

  Informationcontent.appendChild(assigneeInformation1);
  Informationcontent.appendChild(assigneeTaskValue);
  console.log(28);

  dealsCardContent1.appendChild(dealsCardInner1);
  dealsCardContent1.appendChild(Informationcontent);

  dealsCard1.appendChild(dealsCardContent1);

  dealsCardContainer.appendChild(dealsCard1);
});
