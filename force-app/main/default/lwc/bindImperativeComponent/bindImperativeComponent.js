import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';

export default class BindImperativeComponent extends LightningElement {

    accounts;
    error;

    buttonClick(){
        getAccountList()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
                this.accounts = undefined;
            });
   }

}