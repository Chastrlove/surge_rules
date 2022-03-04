const url = $request.url;

const modifiedPath = url.replace(/latlng=.*&sessionkey/, "latlng=30.21488850911458,120.1764021809896&addr=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E4%B8%8A%E5%9F%8E%E5%8C%BA%E4%B8%AD%E6%B2%B3%E5%8D%97%E8%B7%AF%E9%9D%A0%E8%BF%91%E5%A4%A7%E5%90%8D%E7%A9%BA%E9%97%B4%E5%95%86%E5%8A%A1%E5%A4%A7%E5%8E%A6&sessionkey")

$done({ url: modifiedPath });
