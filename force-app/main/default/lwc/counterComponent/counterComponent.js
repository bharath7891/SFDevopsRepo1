import { LightningElement, track } from 'lwc';

export default class CounterComponent extends LightningElement {
    count = 0;

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }
}
