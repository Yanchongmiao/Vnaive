// 判断是否是https
export const isHttps = (target: string) => /^https:\/\//.test(target)
export const isProtocol = (target: string) =>
  /^(https:\/\/|https:\/\/|www.)/.test(target)
/**
 *@params DeepCopy 递归深拷贝
 **/
export const DeepCopy = (source: any) => {
  let target: any = {}
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (const key in source) {
      // eslint-disable-next-line no-prototype-builtins
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = DeepCopy(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
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
function clearTimer(timer: any): null {
  if (timer) {
    clearTimeout(timer)
  }
  return null
}
/**
  @params debounce 防抖
  @params wait 间隔
  @params immediate 是否立即执行
**/
export const debounce = (func: Function, wait: number, immediate: Boolean) => {
  let timer: any
  return (...params: any[]) => {
    let now = !timer && immediate
    timer = clearTimer(timer)
    timer = setTimeout(() => {
      if (!immediate) {
        func.call(this, ...params)
      }
      timer = clearTimer(timer)
    }, wait)
    if (now) {
      func.call(this, ...params)
    }
  }
}
/**
  @params throttle 节流
  @params wait 间隔
**/
export const throttle = (func: Function, wait = 300) => {
  let timer: any = null
  let previous = 0 //记录上一次func触发的时间
  return (...params: any) => {
    timer = clearTimer(timer)
    let now = Number(new Date())
    let remaining = wait - (now - previous)
    if (remaining <= 0) {
      previous = Number(new Date())
      func.call(this, ...params)
      timer = clearTimer(timer)
    } else if (!timer) {
      timer = setTimeout(() => {
        func.call(this, ...params)
        previous = Number(new Date())
        timer = clearTimer(timer)
      }, remaining)
    }
  }
}
