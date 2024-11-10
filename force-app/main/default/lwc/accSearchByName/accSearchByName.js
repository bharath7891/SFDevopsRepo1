import { LightningElement,wire } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccList';

export default class AccSearchByName extends LightningElement {
    searchKeyword = '';
    @wire(findAccounts,{keyword : '$searchKeyword'})//{keyword => parameterName in Apex : '$searchKeyword' => js variable whose value is passed as parameter}
    accounts;
    //error;

    handleSearch(event) {
        this.searchKeyword = event.target.value;
    }


}