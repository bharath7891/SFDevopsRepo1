import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';
export default class TestComponent1 extends LightningElement {

    //Test123
    @wire(getAccountList)
    //DUMMY COMMIT TO TRIGGER
    /*wiredAccounts({error, data}){
        if(data){
            this.accounts = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.accounts = undefined;
        }

    }*/
}