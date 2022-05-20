// 数据类型
const is = (val: any, type: string) => {
  return toString.call(val) === `[object ${type}]`
}
// 是否对象
export const isObj = (val: any) => {
  return is(val, 'Object')
}
// 指定长度和基数
export const uuid = (len?: number, radix?: number) => {
  const chars: Array<string> =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid: Array<string> = []
  let i = 0
  radix = radix || chars.length
  if (len) {
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)]
    }
  } else {
    // rfc4122, version 4 form
    let r
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}
/**
 * 平铺节点转换树结构
 * @parentId 父节点id
 * @id 自己的weiyiid
 **/
export const flatTree = (treeArr: Array<any>) => {
  const map: Record<string, any> = []
  const arr = []
  for (const key of treeArr) {
    map[key.id] = key
  }
  for (const key of treeArr) {
    if (key.parentId === 0) {
      arr.push(key)
    } else if (!map[key.parentId]?.children) {
      map[key.parentId].children = [key]
    } else {
      map[key.parentId].children.push(key)
    }
  }
  return arr
}
export const jsonStr = (json: object) => {
  return JSON.stringify(json)
}
export const jsonObj = (json: string) => {
  return JSON.parse(json)
}
// 判断是否是https
export const isHttps = (target: string) => /^https:\/\//.test(target)
