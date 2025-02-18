import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccList';
import createAccount from '@salesforce/apex/AccountController.createAccount';
import updateAccount from '@salesforce/apex/AccountController.updateAccount';
import deleteAccount from '@salesforce/apex/AccountController.deleteAccount';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class AccountCrudLwc extends LightningElement {
    accounts = [];
    newAccount = { Name: '', Phone: '', Industry: '' };
    editAccount = {};
    isEditing = false;
    wiredAccounts;

    @wire(getAccounts)
    wiredAccountsHandler(result) {
        this.wiredAccounts = result; // Store the result for refreshApex
        const { data, error } = result;
        if (data) {
            this.accounts = [...data]; // Spread operator to ensure reactivity
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    handleInputChange(event) {
        const field = event.target.name;
        if (this.isEditing) {
            this.editAccount = { ...this.editAccount, [field]: event.target.value };
        } else {
            this.newAccount = { ...this.newAccount, [field]: event.target.value };
        }
    }

    createAccountHandler() {
        createAccount({ acc: this.newAccount })
            .then(() => {
                this.refreshAccounts();
                this.newAccount = { Name: '', Phone: '', Industry: '' }; // Reset the form
            })
            .catch(error => console.error('Error creating account:', error));
    }

    editAccountHandler(event) {
        const accountId = event.target.dataset.id;
        this.editAccount = { ...this.accounts.find(acc => acc.Id === accountId) }; // Clone account data
        this.isEditing = true;
    }

    async updateAccountHandler() {
        try {
            await updateAccount({ acc: this.editAccount });
            await this.refreshAccounts();
            this.editAccount = {}; // Clear the edit form
            this.isEditing = false; // Switch back to view mode
    
            // Show success toast
            const successToast = new ShowToastEvent({
                title: 'Success',
                message: 'Account updated successfully',
                variant: 'success',
                mode: 'dismissable',
            });
            console.log('Before dispatching success toast');
            this.dispatchEvent(successToast);
            console.log('Success toast dispatched');
        } catch (error) {
            // Handle error and ensure the toast displays correctly
            const errorMessage =
                error.body && error.body.pageErrors && error.body.pageErrors.length
                    ? error.body.pageErrors[0].message
                    : 'Unexpected error occurred';
    
            const errorToast = new ShowToastEvent({
                title: 'Error',
                message: errorMessage,
                variant: 'error', // Correct variant type
                mode: 'dismissable',
            });
            this.dispatchEvent(errorToast);
    
            console.error('Error updating account:', error);
        }
    }
    

    deleteAccountHandler(event) {
        const accountId = event.target.dataset.id;
        deleteAccount({ accountId })
            .then(() => {
                this.refreshAccounts();
            })
            .catch(error => console.error('Error deleting account:', error));
    }

    refreshAccounts() {
        if (this.wiredAccounts) {
            refreshApex(this.wiredAccounts);
        }
    }

    cancelEdit() {
        this.isEditing = false;
    }
}