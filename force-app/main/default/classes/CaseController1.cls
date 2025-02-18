public with sharing class CaseController1 {
    @AuraEnabled(cacheable=true)
    public static List<CaseWrapper> getCases() {
        List<Case> cases = [
            SELECT Id, CaseNumber, Reason, Type 
            FROM Case 
            ORDER BY CaseNumber DESC 
            LIMIT 100
        ];
        
        List<CaseWrapper> caseWrappers = new List<CaseWrapper>();
        for (Case c : cases) {
            caseWrappers.add(new CaseWrapper(c));
        }
        
        return caseWrappers;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Map<String, String>> getPicklistValues(String objectName, String fieldName) {
        List<Map<String, String>> picklistValues = new List<Map<String, String>>();
        
        Schema.SObjectType objType = Schema.getGlobalDescribe().get(objectName);
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
        
        Schema.DescribeFieldResult fieldDescribe = objDescribe.fields.getMap().get(fieldName).getDescribe();
        
        List<Schema.PicklistEntry> picklistEntries = fieldDescribe.getPicklistValues();
        
        for (Schema.PicklistEntry entry : picklistEntries) {
            Map<String, String> picklistValue = new Map<String, String>{
                'label' => entry.getLabel(),
                'value' => entry.getValue()
            };
            picklistValues.add(picklistValue);
        }
        
        return picklistValues;
    }
    
    public class CaseWrapper {
        @AuraEnabled public String Id;
        @AuraEnabled public String CaseNumber;
        @AuraEnabled public String Reason;
        @AuraEnabled public String Type;
        
        public CaseWrapper(Case c) {
            this.Id = c.Id;
            this.CaseNumber = c.CaseNumber;
            this.Reason = c.Reason;
            this.Type = c.Type;
        }
    }
}