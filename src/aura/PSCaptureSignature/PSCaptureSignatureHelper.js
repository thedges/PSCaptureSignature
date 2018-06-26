({
	saveSignature : function(cmp,e) {
        var self = this;
        
        var canvas = document.getElementById('signature-pad');
        var context = canvas.getContext('2d');
		
        var w = canvas.width;
        var h = canvas.height;
        var data = context.getImageData(0,0,w,h);
        var compositeOperation = context.globalCompositeOperation;
        context.globalCompositeOperation = "destination-over";
        context.fillStyle = '#FFF';
        context.fillRect(0,0,w,h);
        
        var d = canvas.toDataURL();
        console.log(d);
        var split = d.split('base64,',2);
        console.log(split[1]);
        var test = split[1].toString();
        
        var action = cmp.get("c.uploadSignature");
        action.setParams({
            "parentId": cmp.get("v.recordId"),
            "content": test
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === 'SUCCESS'){
               cmp.set('v.message', 'Signature saved!');
            } else {
                cmp.set('v.message', 'Error:' + a.getError());
            }
            $A.get("e.force:closeQuickAction").fire();
        });
        $A.enqueueAction(action);
	},
    clearSignature : function(cmp) {
        var sigPad = cmp.get("v.signaturePad");
        sigPad.clear();
        cmp.set('v.message', '');
    },
    resizeCanvas : function(cmp) {
        var canvas = document.getElementById('signature-pad');
        var parent = document.getElementById('signature-wrapper');
        canvas.width = parent.offsetWidth;
    }
})