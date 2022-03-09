let headers = $response.headers;
let url = $request.url
let body = $response.body;
body = JSON.parse(body);
body.content['vipType'] = "1"
body.content['vipForAll']['fzyqVip']['vipType'] = "1"
body.content['vipForAll']['valuationVip']['vipType'] = "1"
body.content['vipForAll']['valuationVip']['openVipFlag'] = true
body.content['vipForAll']['fzyqVip']['openVipFlag'] = true
headers['X-Modified-By'] = 'Surge';

$done({ headers, body: JSON.stringify(body) })