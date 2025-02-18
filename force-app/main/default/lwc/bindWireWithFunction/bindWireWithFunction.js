import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccList';


export default class BindWireWithFunction extends LightningElement {

    accounts;
    error;
    //When using wire with function, you dont have to use for:each={accounts.data} on the html, 
    //instead you can just use for:each={accounts},
    //because in this case we are binding the data to a function and the function will take care of assigning the data to the property
    // as you can see below because wire has 2 params data and error

    @wire(getAccounts)
    wiredAccounts({error, data}){
        if(data){
            this.accounts = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.accounts= undefined;
        }
    }
    

}