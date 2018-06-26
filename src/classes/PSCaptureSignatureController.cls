public class PSCaptureSignatureController {
    @AuraEnabled 
    public static void uploadSignature(String parentId, Blob content) {
        
        System.debug('Body: ' + content.toString());        
        String myString = content.toString();
        
        ContentVersion cv = new ContentVersion();
        cv.ContentLocation = 'S';
        cv.VersionData = EncodingUtil.base64Decode(myString);
        cv.Title = 'Signature';
        cv.PathOnClient = 'Signature.png';
        
        insert cv;
        
        ContentDocumentLink cdl = new ContentDocumentLink();
        cdl.ContentDocumentId = [SELECT Id, ContentDocumentId FROM ContentVersion WHERE Id =: cv.Id].ContentDocumentId;
        cdl.LinkedEntityId = parentId;
        cdl.ShareType = 'V';
        insert cdl;
        
    }
}