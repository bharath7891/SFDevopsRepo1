trigger CaseTrigger on Case (before insert, before update, after insert, after update) {

    // Before Insert
    if (Trigger.isBefore && Trigger.isInsert) {
        for (Case c : Trigger.new) {
            // Add logic here, for example, set a default value for a field
            if(c.Status == null) {
                c.Status = 'New';
            }
        }
    }

    // Before Update
    if (Trigger.isBefore && Trigger.isUpdate) {
        for (Case c : Trigger.new) {
            // Add logic here, for example, validate or modify data before saving
            if(c.Priority == null) {
                c.Priority = 'Medium';
            }
        }
    }

    // After Insert
    if (Trigger.isAfter && Trigger.isInsert) {
        for (Case c : Trigger.new) {
            // Add logic here, for example, create related records
            // You might create a task or send an email
        }
    }

    // After Update
    if (Trigger.isAfter && Trigger.isUpdate) {
        for (Case c : Trigger.new) {
            // Add logic here, for example, update related records
            // Or log changes to another object
        }
    }
}
