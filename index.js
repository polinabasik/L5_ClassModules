import TomorrowHomework from './TomorrowHomework.js';

const homeworks = [
    new TomorrowHomework("Решить задачи по JS", 10, false, true),
    new TomorrowHomework("Прочитать про модули", 5, true, false)
];

homeworks.forEach((hw) => {
    hw.show();
    console.log("-----");
});