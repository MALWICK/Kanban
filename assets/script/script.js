// Create the main div element with class "card__holder1" and "card"
const cardHolder = document.createElement('div');
cardHolder.classList.add('card__holder1', 'card');

// Create the inner div element with class "innercard__holder"
const innerCardHolder = document.createElement('div');
innerCardHolder.classList.add('innercard__holder');

// Create the div element with class "cardholder__header"
const cardHeader = document.createElement('div');
cardHeader.classList.add('cardholder__header');

// Create the div element with class "hl-card-content" and "card__h1content"
const hlCardContent = document.createElement('div');
hlCardContent.classList.add('hl-card-content', 'card__h1content');

// Create the div element with class "cardh__event" and id "Opportunities__columnName"
const cardEvent = document.createElement('div');
cardEvent.classList.add('cardh__event');
cardEvent.id = 'Opportunities__columnName';
cardEvent.innerHTML = '<span>Call 2 (Day 2)</span>';

// Create the div element with class "headerIcon__container"
const headerIconContainer = document.createElement('div');
headerIconContainer.classList.add('headerIcon__container');

// Create the i element with class "fa-solid fa-gear"
const gearIcon = document.createElement('i');
gearIcon.classList.add('fa-solid', 'fa-gear');

// Append the gear icon to the header icon container
headerIconContainer.appendChild(gearIcon);

// Append the card event and header icon container to the hl-card-content
hlCardContent.appendChild(cardEvent);
hlCardContent.appendChild(headerIconContainer);

// Append the hl-card-content to the card header
cardHeader.appendChild(hlCardContent);

// Create the div element with class "numberOf__leads"
const numberOfLeads = document.createElement('div');
numberOfLeads.classList.add('numberOf__leads');

// Create the div element with class "leadsTotalNumber" and id "leads__TotalNumber"
const leadsTotalNumber = document.createElement('div');
leadsTotalNumber.classList.add('leadsTotalNumber');
leadsTotalNumber.id = 'leads__TotalNumber';
leadsTotalNumber.innerHTML = '<span>43 Leads</span>';

// Create the div element with class "lead__Totalvalue" and id "lead__Totalvalue"
const leadTotalValue = document.createElement('div');
leadTotalValue.classList.add('lead__Totalvalue');
leadTotalValue.id = 'lead__Totalvalue';
leadTotalValue.innerHTML = '<span>$F21,910.00Uad</span>';

// Append the leadsTotalNumber and leadTotalValue to the numberOfLeads
numberOfLeads.appendChild(leadsTotalNumber);
numberOfLeads.appendChild(leadTotalValue);

// Create the div element with class "card dealsCardContainer"
const dealsCardContainer = document.createElement('div');
dealsCardContainer.classList.add('card', 'dealsCardContainer');

// Create the first deals__card div element
const dealsCard1 = document.createElement('div');
dealsCard1.classList.add('deals__card');

// Create the dealscard__content div element
const dealsCardContent1 = document.createElement('div');
dealsCardContent1.classList.add('dealscard__content');

// Create the dealscard__inner div element
const dealsCardInner1 = document.createElement('div');
dealsCardInner1.classList.add('dealscard__inner');

// Create the div element with class "dealsName" and id "deals__Name"
const dealsName1 = document.createElement('div');
dealsName1.classList.add('dealsName');
dealsName1.id = 'deals__Name';
dealsName1.innerHTML = '<span>Test Deal</span>';

// Create the div element with class "deals__Duration" and id "deals__Duration"
const dealsDuration1 = document.createElement('div');
dealsDuration1.classList.add('deals__Duration');
dealsDuration1.innerHTML = '<input type="checkbox" name="dealsName" id="deals__timeChecker"><span class="dealTime" id="deals__WorkHours">2 hours</span>';

// Append the dealsName and dealsDuration to the dealsCardInner1
dealsCardInner1.appendChild(dealsName1);
dealsCardInner1.appendChild(dealsDuration1);

//Deals Informationcontent

const Informationcontent = document.createElement('div');
Informationcontent.classList.add('informationContent');
Informationcontent.id = 'informationContent';

// Create the div element with class "assignee__information" and id "assignee__information"
const assigneeInformation1 = document.createElement('div');
assigneeInformation1.classList.add('assignee__information');
assigneeInformation1.id = 'assignee__information';
assigneeInformation1.innerHTML= 'John Smith';

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
assigneeTask__value.innerHTML = 'F769.00';


// Append the assigneeAvatar1 to the assigneeInformation1
assigneeInformation1.appendChild(assigneeAvatar1);

//append Information and assigneeTask__value to Informationcontent
Informationcontent.appendChild(assigneeInformation1);
Informationcontent.appendChild(assigneeTask__value);


// Append the dealsCardInner1 and assigneeInformation1 to the dealsCardContent1
dealsCardContent1.appendChild(dealsCardInner1);
dealsCardContent1.appendChild(Informationcontent)
/* dealsCardContent1.appendChild(assigneeInformation1);
dealsCardContent1.appendChild(assigneeTask__value); */


// Append the dealsCardContent1 to the dealsCard1
dealsCard1.appendChild(dealsCardContent1);

// Append the dealsCard1 to the dealsCardContainer
dealsCardContainer.appendChild(dealsCard1);

// Append cardHeader, numberOfLeads, and dealsCardContainer to innerCardHolder
innerCardHolder.appendChild(cardHeader);
innerCardHolder.appendChild(numberOfLeads);
innerCardHolder.appendChild(dealsCardContainer);

// Append innerCardHolder to cardHolder
cardHolder.appendChild(innerCardHolder);

// Append cardHolder to mainTarget
const mainTarget = document.getElementById('mainTarget');
mainTarget.appendChild(cardHolder);