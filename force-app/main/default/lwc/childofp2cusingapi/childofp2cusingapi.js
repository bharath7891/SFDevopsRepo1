import { LightningElement,api } from 'lwc';

export default class Childofp2cusingapi extends LightningElement {
    @api percentage;

    get style(){
        return `background-color:red; height:50px; width: ${this.percentage}%; min-width:100px; border:1px solid black `;
    }


}