function age(){
  const myBirthdayArray = birthday.value.split('-');
  
  let birthYear = myBirthdayArray[0];
  let birthMonth = myBirthdayArray[1];
  let birthDate = myBirthdayArray[2];

  let date = new Date();
  let currentDate = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (birthDate > currentDate) {
    currentDate = currentDate + month[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if(birthMonth > currentMonth){
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  let days = currentDate - birthDate;
  let months = currentMonth - birthMonth;
  let years = currentYear - birthYear;

  document.getElementById('age').innerHTML = `Your Age is ${years} Years ${months} Months ${days} Days`;

  let totalWeeks = (years * 52) + (months * 4) + Math.ceil(days / 7);
   let totalWeeksComma = totalWeeks.toLocaleString();

  document.getElementById('ageInWeeks').innerHTML = `You have been alive for about ${totalWeeksComma} Weeks`;

  var xValues = ["80 years", "You", "60 years", "40 years", "20 years"];
  var yValues = [4000, totalWeeks, 3000, 2000, 1000];
  var barColors = ["orange", "green", "blue", "purple", "red"];

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Age in Weeks"
      }
    }
  });



};

