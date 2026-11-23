export default class Homework {
    constructor(title, maxScore, isDone) {
        this._title = title;
        this._maxScore = maxScore;
        this._isDone = isDone;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }

    get maxScore() {
        return this._maxScore;
    }
    set maxScore(value) {
        this._maxScore = value;
    }

    get isDone() {
        return this._isDone;
    }
    set isDone(value) {
        this._isDone = value;
    }

        show() {
        console.log(`Задание: ${this._title}`);
        console.log(`Макс. балл: ${this._maxScore}`);
        console.log(`Выполнено: ${this._isDone}`);
    }

    copy() {
        return this;
    }

    delete() {
        Object.keys(this).forEach((key) => {
            delete this[key];
        });
    }

        #markAsDone() {
        this._isDone = true;
    }

    static clone(homework) {
        return new Homework(homework.title, homework.maxScore, homework.isDone);
    }



}