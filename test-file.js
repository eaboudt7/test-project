//Turn All Tickets White
elements = document.querySelectorAll("[ng-repeat='ticket in ticketsCollection']")
for(i = 0; i < elements.length; i++)
{
    elements[i].classList.remove('orange','red','yellow')
}

//Turn All Tickets Red
elements = document.querySelectorAll("[ng-repeat='ticket in ticketsCollection']")
for(i = 0; i < elements.length; i++)
{
    elements[i].classList.remove('orange','red','yellow')
}
for(i = 0; i < elements.length; i++){
	elements[i].classList.add('red')
}

//Turn All Tickets Yellow
elements = document.querySelectorAll("[ng-repeat='ticket in ticketsCollection']")
for(i = 0; i < elements.length; i++)
{
    elements[i].classList.remove('orange','red','yellow')
}
for(i = 0; i < elements.length; i++){
	elements[i].classList.add('yellow')
}

//Turn All Tickets Orange
elements = document.querySelectorAll("[ng-repeat='ticket in ticketsCollection']")
for(i = 0; i < elements.length; i++)
{
    elements[i].classList.remove('orange','red','yellow')
}
for(i = 0; i < elements.length; i++){
	elements[i].classList.add('orange')
}