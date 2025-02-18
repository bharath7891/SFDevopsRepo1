import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccList';


export default class BindWireWithProperty extends LightningElement {

    @wire(getAccounts) accounts;
    

}