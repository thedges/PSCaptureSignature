({
	doInit : function(cmp, event, helper) {
        console.log(cmp.get('v.recordId'));
        try 
        {
            var a=navigator.userAgent; 
            if((a.indexOf('Salesforce')!=-1)&&(a.indexOf('iPhone')!=-1||a.indexOf('iPad')!=-1)&&(a.indexOf('OS/10')!=-1||a.indexOf('OS 10')!=-1)&&(a.indexOf('Safari')==-1)) { 
                var s=document.createElement('style'); 
                s.innerHTML="html,html body{overflow: auto;-webkit-overflow-scrolling:touch;}body{position:absolute;left:0;right:0;top:0;bottom:0;}"; 
                document.getElementsByTagName('head')[0].appendChild(s);
            }
        } 
        catch(e) 
        {
            console.log(e);
        }
        
        var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
            penColor: 'rgb(0, 0, 0)'
        });
        
        window.addEventListener('resize', function(){helper.resizeCanvas(cmp);}, false);
        
        cmp.set('v.signaturePad', signaturePad);
        
        helper.resizeCanvas(cmp);
	},
    
    saveSig : function (cmp, event, helper) {
     	console.log("saving...");  
        helper.saveSignature(cmp);
    },
    clearSig : function (cmp, event, helper) {
     	console.log("saving...");  
        helper.clearSignature(cmp);
    }
})