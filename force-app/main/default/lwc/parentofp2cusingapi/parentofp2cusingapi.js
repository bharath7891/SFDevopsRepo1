import { LightningElement } from 'lwc';

export default class Parentofp2cusingapi extends LightningElement {
    versatile=20;

    handleonchange(event){
        this.versatile = event.target.value;
    }


}