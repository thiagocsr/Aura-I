public class listaContasController {
    @AuraEnabled
    public static List<Account> getAcc() {
        return [Select Name, AnnualRevenue, Phone, Rating From Account order by Name];
    }

    @AuraEnabled
    public static List<Lead> getLeadsContatados(){
        try {
            return [Select Name, Company, Status From Lead where Status like '%- Contacted%' and Negociacao__c = true];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Lead> getLeadsNaoContatados(){
        try {
            return [Select Name, Company, Status From Lead where Status like '%- Not Contacted%' and Negociacao__c = true];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}