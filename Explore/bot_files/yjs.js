var boss_ad_host="yboss.yahooapis.com";var boss_ad_uri="/ysearch/ads?";var serveURL="";var BOSS_DEBUG=false;function boss_get_ad_url(){var a="http://"+boss_ad_host+boss_ad_uri;if(window.location.protocol=="https:"){a="https://"+boss_ad_host+boss_ad_uri}return a}function set_debug_mode(){BOSS_DEBUG=true}function boss_debug_log(b){try{if(BOSS_DEBUG){if(console!==undefined){console.log(b)}}}catch(a){}}function pre_search(){boss_debug_log("Entering pre_search");try{}catch(a){boss_debug_log(a)}finally{boss_debug_log("Exiting pre_search")}}function post_search(a){boss_debug_log("Entering post_search");try{}catch(b){boss_debug_log(b)}finally{boss_debug_log("Exiting post_search");return a}}function post_search_display(){boss_debug_log("Entering post_search_display");try{serveURL="http://"+window.location.hostname;if(window.location.protocol=="https:"){serveURL="https://"+window.location.hostname}}catch(a){boss_debug_log(a)}finally{boss_debug_log("Exiting post_search_display")}}function pre_ads(){boss_debug_log("Entering _pre_ads");var a="KXt0CaR6EyxP";var e="";try{var b="http://"+window.location.hostname;if(window.location.protocol=="https:"){b="https://"+window.location.hostname}var d=document.referrer;e="ur="+encodeURIComponent(d)+"&url="+encodeURIComponent(b)+"&serveURL="+encodeURIComponent(serveURL)+"&ads.random="+a}catch(c){boss_debug_log(c)}finally{boss_debug_log("Exiting _pre_ads");return e}}function fetch_ads(f,b,c){boss_debug_log("Entering fetch_ads");try{c=c||"";var h=boss_get_ad_url()+b+"&callback="+f+"&"+pre_ads()+"&"+c;var e=document.getElementById("YAHOO_BOSS_API");if(e){var a=document.getElementsByTagName("head")[0];a.removeChild(e)}var g=document.createElement("script");g.setAttribute("id","YAHOO_BOSS_API");g.setAttribute("src",h);document.getElementsByTagName("head")[0].appendChild(g)}catch(d){boss_debug_log(d)}finally{boss_debug_log("Exiting fetch_ads")}}function post_ads(b){boss_debug_log("Entering post_ads");try{}catch(a){boss_debug_log(a)}finally{boss_debug_log("Exiting post_ads");return b}}function post_ads_display(){boss_debug_log("Entering post_ads_display");try{}catch(a){boss_debug_log(a)}finally{boss_debug_log("Exiting post_ads_display")}};