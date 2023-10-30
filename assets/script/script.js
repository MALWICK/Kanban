// Example array of tasks with due dates

import users from "./users.js";

users.map((user) => {
  const cardHolder = document.createElement('div');
  cardHolder.classList.add('card__holder1', 'card');

  const innerCardHolder = document.createElement('div');
  innerCardHolder.classList.add('innercard__holder');

  // Create the div element with class "cardholder__header"
  const cardHeader = document.createElement('div');
  cardHeader.classList.add('cardholder__header');

  // Create the div element with class "hl-card-content" and "card__h1content"
  const hlCardContent = document.createElement('div');
  hlCardContent.classList.add('hl-card-content', 'card__h1content');

  // Create the div element with class "cardhevent" and id "OpportunitiescolumnName"
  const cardEvent = document.createElement('div');
  cardEvent.classList.add('cardh__event');
  cardEvent.id = 'Opportunities__columnName';
  cardEvent.innerHTML = '<span>Call 2 (Day 2)</span>';

  const headerIconContainer = document.createElement('div');
  headerIconContainer.classList.add('headerIcon__container');

  hlCardContent.appendChild(cardEvent);
  hlCardContent.appendChild(headerIconContainer);

  // Append the hl-card-content to the card header
  cardHeader.appendChild(hlCardContent);

  // Create the div element with class "numberOf__leads"
  const numberOfLeads = document.createElement('div');
  numberOfLeads.classList.add('numberOf__leads');

  const leadsTotalNumber = document.createElement('div');
  leadsTotalNumber.classList.add('leadsTotalNumber');
  leadsTotalNumber.id = 'leads__TotalNumber';
  leadsTotalNumber.innerHTML = '<span>43 Leads</span>';

  const leadTotalValue = document.createElement('div');
  leadTotalValue.classList.add('lead__Totalvalue');
  leadTotalValue.id = 'lead__Totalvalue';
  leadTotalValue.innerHTML = '<span>$F21,910.00Uad</span>';

  // Append the leadsTotalNumber and leadTotalValue to the numberOfLeads
  numberOfLeads.appendChild(leadsTotalNumber);
  numberOfLeads.appendChild(leadTotalValue);

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
  assigneeInformation1.id = 'assignToName';
  assigneeInformation1.innerHTML= `${user.name}`;
  
  // Create the div element with class "assignee__avatar" and id "assignee__img"
  const assigneeAvatar1 = document.createElement('div');
  assigneeAvatar1.classList.add('assignee__avatar', 'avatar');
  assigneeAvatar1.id = 'assignee__avatar';
  
  //create avartar Icons
  const avartarIcon = document.createElement('i');
  avartarIcon.classList.add('fa-solid', 'fa-user');
  
  
  //append avartar Icons to assigneeAvartar1
  assigneeAvatar1.appendChild(avartarIcon);
  
  //Create assigneeTask__value
  const assigneeTask__value = document.createElement('div');
  assigneeTask__value.classList.add('assigneeTask__value');
  assigneeTask__value.id = 'assigneeTask__value';
  assigneeTask__value.innerHTML = `${user.value}`;
  
  
  // Append the assigneeAvatar1 to the assigneeInformation1
  assigneeInformation1.appendChild(assigneeAvatar1);
  
  //append Information and assigneeTask__value to Informationcontent
  Informationcontent.appendChild(assigneeInformation1);
  Informationcontent.appendChild(assigneeTask__value);
  
  
  // Append the dealsCardInner1 and assigneeInformation1 to the dealsCardContent1
  dealsCardContent1.appendChild(dealsCardInner1);
  dealsCardContent1.appendChild(Informationcontent)

  dealsCard1.appendChild(dealsCardContent1);
  dealsCardContainer.appendChild(dealsCard1);

  innerCardHolder.appendChild(cardHeader);
  innerCardHolder.appendChild(numberOfLeads);
  innerCardHolder.appendChild(dealsCardContainer);

  cardHolder.appendChild(innerCardHolder);

  // Append the cardHolder to the desired element in your document
  // For example:
  const mainTarget = document.getElementById('mainTarget');
mainTarget.appendChild(cardHolder);

});