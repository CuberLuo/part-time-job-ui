import isJSON from 'validator/lib/isJSON'

/**
 * 存储数据
 */
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    // 对象类型的数据需要转换成字符串才能存入localStorage
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
/**
 * 获取数据
 */
export const getItem = (key) => {
  const data = localStorage.getItem(key) || ''
  if (isJSON(data)) {
    // 检验data是否为符合json格式的字符串
    return JSON.parse(data)
  } else {
    return data
  }
}

/**
 * 删除数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = (key) => {
  window.localStorage.clear()
}
