import Homework from './Homework.js';

export default class TomorrowHomework extends Homework {
    constructor(title, maxScore, isDone, isUrgent) {
        super(title, maxScore, isDone);
        this._isUrgent = isUrgent;
    }

    get isUrgent() {
        return this._isUrgent;
    }
    set isUrgent(value) {
        this._isUrgent = value;
    }

    show() {
        super.show();
        console.log(`Срочное: ${this._isUrgent}`);
    }

    delete() {
        super.delete();
        console.log("Домашнее на завтра удалено");
    }

    static clone(homework) {
        return new TomorrowHomework(
            homework.title,
            homework.maxScore,
            homework.isDone,
            homework.isUrgent
        );
    }
}