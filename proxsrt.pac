function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "PROXY proxy.soax.com:10000";
var proxy_no = "DIRECT";
// if (shExpMatch(url, "https://*.whatismyip.org*")) { return proxy_yes; }
// if (shExpMatch(url, "https://fs30.formsite.com/LB2014/hzgpiczd6k/index.html*")) { return proxy_yes; }
// Proxy anything else
return proxy_yes;
}
