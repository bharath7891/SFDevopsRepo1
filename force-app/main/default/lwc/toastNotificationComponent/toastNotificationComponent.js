import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class ToastNotificationComponent extends LightningElement {
    showError() {
        console.log('###Click');
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'error'
        });
        this.dispatchEvent(evt);
    }
    showWarning() {
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'warning'
        });
        this.dispatchEvent(evt);
    }
    showSuccess() {
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
    showInfo() {
        const evt = new ShowToastEvent({
            title: 'Salesforce Toast',
            message: 'Salesforce Bolt LWC Stack Example',
            variant: 'info'
        });
        this.dispatchEvent(evt);
    }
}