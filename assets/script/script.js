import days from "./db.js";

const btnDays = [...document.querySelectorAll('.days-container__items--btn')];
let dayTitle = document.querySelector(".day-planner__title");
let lessonTitle = document.querySelector(".day-planner__lessons")
let dinnerTime = document.querySelector(".day-planner__dinner")

const dayHandler = (dayIndex) =>{
   dayTitle.textContent = days[dayIndex].day;
   dinnerTime.textContent = `OBIAD: ${days[dayIndex].dinner}`

   while (lessonTitle.firstChild) {
    lessonTitle.removeChild(lessonTitle.firstChild);
  }

   for(let i = 0; i < days[dayIndex].lesson.length; i++) {
    let lessonName = document.createElement("p")
    let lessonHour = document.createElement("p")

    lessonTitle.appendChild(lessonHour)
    lessonTitle.appendChild(lessonName)
    

    lessonName.textContent = days[dayIndex].lesson[i]
    lessonHour.textContent = days[dayIndex].hour[i]
   
   }

}

btnDays.forEach((day, dayIndex) => {
 day.addEventListener('click', () => dayHandler(dayIndex));

})