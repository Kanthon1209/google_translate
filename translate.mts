import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";


function constractQueryFetch(list_to_translate: string[]) {
    const proxyUrl = 'http://localhost:7890';
    var stringBuilder = "[";
    list_to_translate.forEach((element, idx, array) => {
        if (idx != array.length - 1){
            stringBuilder += `"${element}",`
        } else {
            stringBuilder += `"${element}"`
        }
    });
    stringBuilder += "]";

// 创建一个代理 agent
    const proxyAgent = new HttpsProxyAgent(proxyUrl); // 如果你的代理是 HTTP，使用 HttpProxyAgent
    return fetch("https://translate-pa.googleapis.com/v1/translateHtml", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6",
            "content-type": "application/json+protobuf",
            "priority": "u=1, i",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "none",
            "sec-fetch-storage-access": "active",
            "x-browser-channel": "stable",
            "x-browser-copyright": "Copyright 2025 Google LLC. All rights reserved.",
            "x-browser-validation": "DTaAFOAcbbd2xIkIWiLdbtAAhQc=",
            "x-browser-year": "2025",
            "x-client-data": "CIu2yQEIpLbJAQipncoBCLv/ygEIlqHLAQj7o8sBCIWgzQEI04fPAQ==",
            "x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520",
            "cookie": "NID=525=WGbXdmcsmzVvWmE7NcslGZu8uB2bKK5jXvp_KlGkYHH1FFCACZMvA7l26bGeFIIowqYWFP-dYCUC4nYZGYkuKbCAMGMDfszy6Lr7OKgUNIiRHpDGMPMzmjOZhGzNjjDYXMTsfNKx3BLyiORYIzlCjKIbMXrCR5Vx1M7S5t64RutL6wDl2U0"
        },
        "body": `[[${stringBuilder},\"zh-CN\",\"en\"],\"te_lib\"]`,
        "method": "POST",
        "agent": proxyAgent
    });
}
export default constractQueryFetch