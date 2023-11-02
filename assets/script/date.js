const date = [
  {
    id: "kTpyzq4JvJgi8dv0Sx7r",
    title: "voluptatem",
    description:
      "Qui recusandae quam nihil vel placeat commodi velit alias at tenetur provident excepturi dolor doloribus qui ab a rerum et ad accusantium praesentium placeat aut sed eos quae odio alias accusantium dolores qui.",
    assignedTo: "2kmSSouNyjaZZRbYXzsi",
    dueDate: "2020-10-25T10:00:00.000Z",
    isCompleted: true,
    name: "James",
    value: "20000"
  },
  {
    id: "HAypozboHFoK7sqta7K5",
    title: "at",
    description:
      "Minima quis et vero architecto ea rerum rerum molestiae id et nostrum ut quas omnis similique eaque numquam consequuntur sit non laborum voluptates officiis autem repellendus optio.",
    assignedTo: "2kmSSouNyjaZZRbYXzsi",
    dueDate: "2020-10-25T19:00:00.000Z",
    isCompleted: true,
    name: "J",
    value: "20000"
  },
  {
    id: "e5YQoLWd3wHSpBGYjxTz",
    title: "ea",
    description:
      "Voluptas et neque molestias sunt praesentium omnis aut ut enim dolores eos repellat autem ducimus pariatur vero reiciendis corrupti et non dolor eum sint facere provident doloribus hic quia voluptatem consequatur veniam eligendi ad hic molestiae earum voluptatem.",
    assignedTo: "2kmSSouNyjaZZRbYXzsi",
    dueDate: "2020-10-25T10:00:00.000Z",
    isCompleted: true,
    name:"jerry",
    value: "20000"
  },
];

const dealsCardContainer = document.createElement("div");
dealsCardContainer.classList.add( "dealsCardContainer");
const mainTarget = document.querySelector("#OpportunitiesList .card");

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




