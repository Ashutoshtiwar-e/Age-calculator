   const inputElement = document.querySelector("input");
   const buttonElement = document.querySelector("button");
   const displayElement = document.querySelector("p")

   function calculateAge(){
    const now = new Date;
    const then = new Date(inputElement.value);
    const diff = now - then;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    let remainingMilliseconds = diff - years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12)));

    remainingMilliseconds -= months * (1000 * 60 * 60 * 24 * (365.25 / 12));

    const days = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));

    displayElement.innerHTML = ` &#x2022;  You are ${years} years , ${months} months and ${days} days old.`;;
   }