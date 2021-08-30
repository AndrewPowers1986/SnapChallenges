let obj = {id: 0, event: "some event", location: "some place", description: "about this event"};
localStorage.setItem('eventList', JSON.stringify(obj));

let retrieveData = JSON.parse(localStorage.getItem('eventList'));
console.log(retrieveData);