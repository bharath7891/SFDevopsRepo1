import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';

export default class BindWirewithProperty extends LightningElement {
    @wire(getAccountList) accounts;
}