
import users from "./users.js";

const cardHolder = document.createElement('div');
cardHolder.classList.add('card__holder1', 'card');

console.log(1);
const innerCardHolder = document.createElement('div');
innerCardHolder.classList.add('innercard__holder');
console.log(2);
// Create the div element with class "cardholder__header"
const cardHeader = document.createElement('div');
cardHeader.classList.add('cardholder__header');
console.log(3);
// Create the div element with class "hl-card-content" and "card__h1content"
const hlCardContent = document.createElement('div');
hlCardContent.classList.add('hl-card-content', 'card__h1content');
console.log(4);
// Create the div element with class "cardhevent" and id "OpportunitiescolumnName"
const cardEvent = document.createElement('div');
cardEvent.classList.add('cardh__event');
cardEvent.id = 'Opportunities__columnName';
cardEvent.innerHTML = '<span>Call 2 (Day 2)</span>';
console.log(5);
const headerIconContainer = document.createElement('div');
headerIconContainer.classList.add('headerIcon__container');
console.log(6);
hlCardContent.appendChild(cardEvent);
hlCardContent.appendChild(headerIconContainer);
console.log(7);
// Append the hl-card-content to the card header
cardHeader.appendChild(hlCardContent);
console.log(8);
// Create the div element with class "numberOf__leads"
const numberOfLeads = document.createElement('div');
numberOfLeads.classList.add('numberOf__leads');
console.log(9);
const leadsTotalNumber = document.createElement('div');
leadsTotalNumber.classList.add('leadsTotalNumber');
leadsTotalNumber.id = 'leads__TotalNumber';
leadsTotalNumber.innerHTML = '<span>43 Leads</span>';
console.log(10);
const leadTotalValue = document.createElement('div');
leadTotalValue.classList.add('lead__Totalvalue');
leadTotalValue.id = 'lead__Totalvalue';
leadTotalValue.innerHTML = '<span>$F21,910.00Uad</span>';

// Append the leadsTotalNumber and leadTotalValue to the numberOfLeads
numberOfLeads.appendChild(leadsTotalNumber);
numberOfLeads.appendChild(leadTotalValue);

users.forEach((user) => {
  const dealsCardContainer = document.createElement('div');
  dealsCardContainer.classList.add('card', 'dealsCardContainer');

  const dealsCard1 = document.createElement('div');
  dealsCard1.classList.add('deals__card');

  // Create the dealscard__content div element
  const dealsCardContent1 = document.createElement('div');
  dealsCardContent1.classList.add('dealscard__content');

  const dealsCardInner1 = document.createElement('div');
  dealsCardInner1.classList.add('dealscard__inner');

  const dealsName1 = document.createElement('div');
  dealsName1.classList.add('dealsName');
  dealsName1.id = 'deals__Name';
  dealsName1.innerHTML = `<span>${user.task}</span>`;

  const dealsDuration1 = document.createElement('div');
  dealsDuration1.classList.add('deals__Duration');
  dealsDuration1.innerHTML = `<input type="checkbox" name="dealsName" id="deals__timeChecker"><span class="dealTime" id="deals__WorkHours">${user.duration}</span>`;

  dealsCardInner1.appendChild(dealsName1);
  dealsCardInner1.appendChild(dealsDuration1);

  // Deals Informationcontent
  const Informationcontent = document.createElement('div');
  Informationcontent.classList.add('informationContent');
  Informationcontent.id = 'informationContent';

  // Create the div element with class "assignee__information" and id "assignee__information"
  const assigneeInformation1 = document.createElement('div');
  assigneeInformation1.classList.add('assignee__information');
  assigneeInformation1.id = 'assignee__information';
  assigneeInformation1.innerHTML = `${user.name}`;

  // Create the div element with class "assignee__avatar" and id "assignee__img"
  const assigneeAvatar1 = document.createElement('div');
  assigneeAvatar1.classList.add('assignee__avatar', 'avatar');
  assigneeAvatar1.id = 'assignee__avatar';

  // Create avatar Icons
  const avatarIcon = document.createElement('i');
  avatarIcon.classList.add('fa-solid', 'fa-user');

  // Append avatar Icons to assigneeAvatar1
  assigneeAvatar1.appendChild(avatarIcon);
  console.log(18);
  // Create assigneeTask__value
  const assigneeTaskValue = document.createElement('div');
  assigneeTaskValue.classList.add('assigneeTask__value');
  assigneeTaskValue.id = 'assigneeTask__value';
  assigneeTaskValue.innerHTML = `${user.value}`;

  // Append assigneeAvatar1 to assigneeInformation1
  assigneeInformation1.appendChild(assigneeAvatar1);
  console.log(20);
  // Append Informationcontent and assigneeTaskValue to Informationcontent
  Informationcontent.appendChild(assigneeInformation1);
  Informationcontent.appendChild(assigneeTaskValue);
  console.log(28);
 // Append dealsCardInner1 and Informationcontent to dealsCardContent1
 dealsCardContent1.appendChild(dealsCardInner1);
 dealsCardContent1.appendChild(Informationcontent);

 // Append dealsCardContent1 to dealsCard1
 dealsCard1.appendChild(dealsCardContent1);

 // Append dealsCard1 to dealsCardContainer
 dealsCardContainer.appendChild(dealsCard1);

 // Append dealsCardContainer to innerCardHolder
 innerCardHolder.appendChild(dealsCardContainer);
});

// Append cardHeader, numberOfLeads, and innerCardHolder to cardHolder
cardHolder.appendChild(cardHeader);
cardHolder.appendChild(numberOfLeads);
cardHolder.appendChild(innerCardHolder);

// Append cardHolder to the desired container in your HTML

const mainTarget = document.getElementById('mainTarget');
mainTarget.appendChild(cardHolder);