

const opportunitiesList = document.getElementById('OpportunitiesList');
const cards = opportunitiesList.querySelectorAll('.card');
cards.appendChild(dealsCardContainer);


// Append the inner content to all of the cards.



contactCredentials().then((userdata) => {
  userdata.forEach((user) => {
    const dueTime = new Date(user.dueDate);

    const currentTime = new Date();
    const timeDifferenceInMilliseconds =
      dueTime.getTime() - currentTime.getTime();
    const hoursRemaining = Math.floor(
      Math.abs(timeDifferenceInMilliseconds) / (1000 * 60 * 60)
    );

    let remainingTime;
    if (timeDifferenceInMilliseconds < 0) {
      remainingTime = "Past due";
    } else if (hoursRemaining >= 24) {
      const daysRemaining = Math.floor(hoursRemaining / 24);
      remainingTime = `${daysRemaining} days`;
    } else {
      remainingTime = `${hoursRemaining} hours`;
    }

    let formattedTime = remainingTime;
    let textColor = "black";
    if (timeDifferenceInMilliseconds < 0) {
      textColor = "red";
    }

    formattedTime = `<span style="color: ${textColor};">${formattedTime}</span>`;

    console.log(`Remaining time: ${formattedTime}`);

    const dealsCard1 = document.createElement("div");
    dealsCard1.classList.add("deals__card");

    const dealsCardContent1 = document.createElement("div");
    dealsCardContent1.classList.add("dealscard__content");

    const dealsCardInner1 = document.createElement("div");
    dealsCardInner1.classList.add("dealscard__inner");

    const dealsName1 = document.createElement("div");
    dealsName1.classList.add("dealsName");
    dealsName1.id = "deals__Name";
    dealsName1.innerHTML = `<span>${user.opportunityNam}</span>`;

    const dealsDuration1 = document.createElement("div");
    dealsDuration1.classList.add("deals__Duration");
    dealsDuration1.innerHTML = `<input type="checkbox" name="dealsName" id="deals__timeChecker"><span class="dealTime" id="deals__WorkHours" style="color: ${textColor}">${remainingTime}</span>`;

    dealsCardInner1.appendChild(dealsName1);
    dealsCardInner1.appendChild(dealsDuration1);

    const Informationcontent = document.createElement("div");
    Informationcontent.classList.add("informationContent");
    Informationcontent.id = "informationContent";

    const assigneeInformation1 = document.createElement("div");
    assigneeInformation1.classList.add("assignee__information");
    assigneeInformation1.id = "assignee__information";
    assigneeInformation1.innerHTML = `${user.name}`;

    const assigneeAvatar1 = document.createElement("div");
    assigneeAvatar1.classList.add("assignee__avatar", "avatar");
    assigneeAvatar1.id = "assignee__avatar";

    const avatarIcon = document.createElement("i");
    avatarIcon.classList.add("fa-solid", "fa-user");

    assigneeAvatar1.appendChild(avatarIcon);

    const assigneeTaskValue = document.createElement("div");
    assigneeTaskValue.classList.add("assigneeTask__value");
    assigneeTaskValue.id = "assigneeTask__value";
    assigneeTaskValue.innerHTML = ` F${user.value}`;

    assigneeInformation1.appendChild(assigneeAvatar1);

    Informationcontent.appendChild(assigneeInformation1);
    Informationcontent.appendChild(assigneeTaskValue);

    dealsCardContent1.appendChild(dealsCardInner1);
    dealsCardContent1.appendChild(Informationcontent);

    dealsCard1.appendChild(dealsCardContent1);

    dealsCardContainer.appendChild(dealsCard1);
  
  });

});

