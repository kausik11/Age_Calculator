// const months = [31,28,31,30,31,30,31,31,30,31,30,31];
// let selectDate = document.getElementById('date-input');

// const ageCalculate = ()=>{
//     let today = new Date();
//     let inputDate = new Date(selectDate.value);
//     // console.log(inputDate);
//     let birthMonth,birthYear,birthDate;

//     let birthDetails = {
//         date: inputDate.getDate(),
//         month: inputDate.getMonth()+1,
//         year: inputDate.getFullYear()
//     }

    
//     if(isNaN(inputDate)){
//      console.log('please input proper date');   
//     }else{
//         let currentYear = today.getFullYear();
//         let currentMonth = today.getMonth();
//         let currentDate = today.getDate();
//         console.log(birthDetails);


//         leapchecker(currentYear);
//     }
// }
    
//     const leapchecker = (year)=>{
//       if((year%4 === 0 && year % 100 !== 0)||(year%400 ===0)){
//         months[1]=29;
//         console.log(months);
//         console.log('leapyear');
//       }else{
//         months[1]=28;
//         console.log(months);
//         console.log('not leapyear');
//       }
//     }

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year){
    if(year % 4 === 0){
        months[1] = 29;
        console.log(months)
        
    }
    else{
        months[1] = 28;
        console.log(months);
      
    }
}