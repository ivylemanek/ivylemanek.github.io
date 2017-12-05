//ajax.js
function ajax(url, handler) {
    var req = new XMLHttpRequest();
    var method = "GET";
    var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
    
    var consumerSecret = "Qi8FF6tbbZB6XYXJf1z9b4WopsN16Ff1fMKJPtnsr66Ttalq82";
    var consumerKey = "gkxn8GqV1s6Hc1sjbXr2Tb06K";
    var accessToken = "936812848046489600-CMpxMGK7JsUW0UyK304sa83JVsyJqko";
    var secretToken = "3pqjfUm1h28Y2JaMIJneCZDB10IHrXLuqhzCdBFIXP7u9";
    var nonce = randomString(30);
    var timestamp = Math.floor(Date.now()/1000).toString();
    
    var parameter = "oauth_consumer_key=" + consumerKey + "&" + "oauth_nonce=" + nonce + "&" + "oauth_signature_method=HMAC-SHA1&oauth_timestamp=" + timestamp + "&" + "oauth_token=" + accessToken + "&" + "oauth_version=1.0";
    var signBase = method + "&" + encodeURIComponent(url) + "&" + encodeURIComponent(parameter);
    var secret = consumerSecret + "&" + secretToken;
    var hash = CryptoJS.HmacSHA1(signBase, secret);
    var signature = CryptoJS.enc.Base64.stringify(hash);
    
    
    if (!req) {
        alert('Browser not supported.');
        return;
    }

    req.onreadystatechange = function() {        
        var resp;        
        if (this.readyState === XMLHttpRequest.DONE) {           
            if (this.status === 200) {               
                resp = this.responseText;            
                handler(resp);            
            } else {               
                handler('Ajax error, status: ' + this.status);           
            }       
        }    
    };
    req.open('GET', url);
    req.withCredentials = true;
    req.setRequestHeader('Content-Type', 'Application/x-www-form-urlencoded');
    
    req.setRequestHeader('Authorization','OAuth oauth_consumer_key="gkxn8GqV1s6Hc1sjbXr2Tb06K", oauth_nonce="", oauth_signature="", oauth_signature_method="HMAC-SHA1", oauth_timestamp= "", oauth_token="1127121421-aPHZHQ5BCUoqfHER2UYhQYUEm0zPEMr9xJYizXl", oauth_version="1.0"');
  req.send();
}