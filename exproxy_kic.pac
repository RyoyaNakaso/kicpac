function FindProxyForURL(url, host)
{
    if(shExpMatch(host, "kcldtsgw.japanwest.cloudapp.azure.com")){
        return "PROXY oskproxy.intra.tis.co.jp:8080";
    }
    
    if(shExpMatch(host, "*.googleapis.com")){
        return "PROXY oskproxy.intra.tis.co.jp:8080";
    }

    return "DIRECT";
}
