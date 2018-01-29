let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURL = 'localhost:9090'
} else if (process.env.type === 'test') {
  // 测试环境
  baseURL = 'localhost:9090'
} else {
  // 正式环境
  baseURL = 'localhost:9090'
}

export {
  baseURL
}