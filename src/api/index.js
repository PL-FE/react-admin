import server from './server'

// 获取中国累计疫情信息
export function getOnsInfo() {
  return server({
    url: '/api/g2/getOnsInfo?name=disease_h5',
    method: 'get',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
  })
}
