const url = $request.url;

const modifiedPath = url.replace(/latlng=.*&sessionkey/, "latlng=30.25458468967014,120.2135319010417&addr=%E6%B5%99%E6%B1%9F%E7%9C%81%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%B1%9F%E5%B9%B2%E5%8C%BA%E9%87%87%E8%8D%B7%E8%A1%97%E9%81%93%E5%BA%86%E6%98%A5%E4%B8%9C%E8%B7%AF%E7%B4%AB%E6%99%B6%E5%A4%A7%E9%85%92%E5%BA%97&sessionkey")

console.log(modifiedPath)

$done({ url: modifiedPath });
