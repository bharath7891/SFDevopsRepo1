import { LightningElement } from 'lwc';

export default class BindExpressionsFromJS extends LightningElement {

    fullName = '';
    email = '';
    phone ='';
    handleChange(event) {
        const field = event.target.name;
        //this[field] = event.target.value;
        if(field == 'fullName'){
            this.fullName =  event.target.value;
        }
        if(field == 'email'){
            this.email = event.target.value;
        }
        if(field == 'phone'){
            this.phone = event.target.value;
        }     
    }
    get upperCase() {
        return `${this.fullName}`.toUpperCase();
    }

}