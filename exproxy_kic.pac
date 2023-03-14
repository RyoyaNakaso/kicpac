function FindProxyForURL(url, host)
{
    var lboproxy = 'DIRECT';
    var hostIp = dnsResolve(host);
    var tkyproxy = 'PROXY tkyproxy.intra.tis.co.jp:8080; PROXY oskproxy.intra.tis.co.jp:8080';
    var oskproxy = 'PROXY oskproxy.intra.tis.co.jp:8080; PROXY tkyproxy.intra.tis.co.jp:8080';
    var exproxy = 'PROXY ex-tkyproxy.intra.tis.co.jp:8080; PROXY oskproxy.intra.tis.co.jp:8080';
    var myipaddr = myIpAddress();


    if(shExpMatch(host, "gstatic.com")){
        return "DIRECT";
    }

    if(shExpMatch(host, "*.gpcloudservice.com")){
        return "DIRECT";
    }

    if(shExpMatch(host, "kcldtsgw.japanwest.cloudapp.azure.com")){
        return "PROXY oskproxy.intra.tis.co.jp:8080";
    }
    
    if(shExpMatch(host, "*.googleapis.com")){
        return "PROXY oskproxy.intra.tis.co.jp:8080";
    }
    
    if(hostIp=="127.0.0.1")){
        return "PROXY oskproxy.intra.tis.co.jp:8080";
    }

    return "DIRECT";
}
