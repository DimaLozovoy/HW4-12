//Напишіть функцію, яка приймає URL зображення і повертає проміс,
//  який завантажує це зображення. Якщо завантаження успішне,
//  проміс виконується з завантаженим зображенням, а в разі помилки - відхиляється з повідомленням про помилку
// function getImg(src) {
//   const promise = new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.onload = resolve(img);
//     img.onerror = reject("isakopidojawopjdpowjaopdkqpmsjwi0d");
//     img.src = src;
//   });
//   return promise;
// }
// getImg("https://picsum.photos/id/237/250")
//   .then((result) => {
//     document.body.appendChild(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const people = [
//   { name: "John", age: 25 },
//   { name: "Anna", age: 30 },
//   { name: "Peter", age: 40 },
//   { name: "Mary", age: 35 },
// ];

// function sortArray(arr) {
//   const promise = new Promise((resolve, reject) => {
//     let newArr = [];
//     arr.forEach((item) => {
//       newArr.push(item.name);
//     });
//     newArr.sort((a, b) => a.localeCompare(b));
//     resolve(newArr);
//   });
//   return promise;
// }

// sortArray(people).then((sortedNames) => {
//   console.log(sortedNames);
// });
// function randomPromise() {
//   const promise = new Promise((resolve, reject) => {});
// }
// function itsName(text, delay) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(text);
//     }, delay);
//   });
//   return promise;
// }

// const first = itsName("ZA WARUDOOOOOO", 3700);
// const sec = itsName("CHAY ZAWARIIIII", 2700);
// const third = itsName("JOJO", 1700);
// Promise.all([first, sec]).then((result) => {
//   console.log(result);
// });
// Promise.race([first, sec, third]).then((result) => {
//   console.log(result);
// });
let raceNumber = 0;
const refs = {
  startBtn: document.querySelector(".startBtn"),
  raceTime: document.querySelector(".time"),
  raceNumber: document.querySelector(".raceNumber"),
  raceWinner: document.querySelector(".winner"), //домік)))))))
};

function race(horseName, delay) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ horseName, delay });
    }, delay);
  });
  return promise;
} // проміс для коника та часу)))

refs.startBtn.addEventListener("click", () => {
  //магічна кнопка старту))
  raceNumber += 1;

  const horses = [
    race("Secretariat", Math.floor(Math.random() * 15000) + 5000),
    race("Eclipse", Math.floor(Math.random() * 15000) + 5000),
    race("West Australian", Math.floor(Math.random() * 15000) + 5000),
    race("Flying Fox", Math.floor(Math.random() * 15000) + 5000),
    race("Seabiscuit", Math.floor(Math.random() * 15000) + 5000), //круті рандоми для коней
  ];

  Promise.race(horses).then(({ horseName, delay }) => {
    refs.raceTime.textContent = `Race time: ${delay / 1000}s`; // ну і тут прикольний проміс щоб показувало переможця, час і номер гонки))))
    refs.raceWinner.textContent = `Winner: ${horseName}`;
  });
  refs.raceNumber.textContent = `Race number: ${raceNumber}`;
});
