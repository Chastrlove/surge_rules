// const url = `https://oa.ruiwingroup.com:89/client.do?method=checkin&type=checkin&latlng=30.25458468967014,120.2135319010417&addr=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%B1%9F%E5%B9%B2%E5%8C%BA%E9%87%87%E8%8D%B7%E8%A1%97%E9%81%93%E5%BA%86%E6%98%A5%E4%B8%9C%E8%B7%AF%E7%B4%AB%E6%99%B6%E5%A4%A7%E9%85%92%E5%BA%97&sessionkey=abcoIk9E-Mc3lcbUE_Lkx&wifiMac=&identityCredential=QkDsYPA3fWpoE0S6PU5H%252FaKy1dE%252B0Epa`;
// const method = `GET`;
// const headers = {
// 'Host' : `oa.ruiwingroup.com:89`,
// 'Connection' : `keep-alive`,
// 'Accept-Encoding' : `gzip`,
// 'Cookie' : `ClientCountry=CN; ClientLanguage=zh-Hans; ClientMobile=; ClientToken=; ClientType=iPhone; ClientUDID=9DFAEC81-4DA9-49B6-B070-C75F9184BE9E; ClientVer=6.6.6; JSESSIONID=abcoIk9E-Mc3lcbUE_Lkx; Pad=false; setClientOS=iOS; setClientOSVer=13.6; userKey=9f0b381d-83a6-48b6-b4e6-d97642b81c68; userid=23`,
// 'Timezone' : `GMT+8`,
// 'User-Agent' : `E-MobileE-Mobile 6.6.6 (iPhone; iOS 13.6; zh_CN)`
// };
// const body = ``;

// const myRequest = {
//     url: url,
//     method: method,
//     headers: headers,
//     body: body
// };

// $task.fetch(myRequest).then(response => {
//     console.log(response.statusCode + "\n\n" + response.body);
// }, reason => {
//     console.log(reason.error);
// });

// const url = $request.url;

//const url = `https://oa.ruiwingroup.com:89/client.do?method=checkin&type=checkin&latlng=30.25458468967014,120.2135319010417&addr=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%B1%9F%E5%B9%B2%E5%8C%BA%E9%87%87%E8%8D%B7%E8%A1%97%E9%81%93%E5%BA%86%E6%98%A5%E4%B8%9C%E8%B7%AF%E7%B4%AB%E6%99%B6%E5%A4%A7%E9%85%92%E5%BA%97&sessionkey=abcoIk9E-Mc3lcbUE_Lkx&wifiMac=&identityCredential=QkDsYPA3fWpoE0S6PU5H%252FaKy1dE%252B0Epa`;

const url = $request.url;

const modifiedPath = url.replace(/latlng=.*&sessionkey/, "latlng=30.25458468967014,120.2135319010417&addr=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%B1%9F%E5%B9%B2%E5%8C%BA%E9%87%87%E8%8D%B7%E8%A1%97%E9%81%93%E5%BA%86%E6%98%A5%E4%B8%9C%E8%B7%AF%E7%B4%AB%E6%99%B6%E5%A4%A7%E9%85%92%E5%BA%97&sessionkey")

console.log(modifiedPath)

$done({ url: modifiedPath });
