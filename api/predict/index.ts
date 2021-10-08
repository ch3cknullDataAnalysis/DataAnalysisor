// 数据预测接口

export interface IPredictResponse {
  // 0 为成功，其他为失败
  code: number
  // 错误信息
  message: string
  data: {
    num: number
  }
}

export interface IPredictRequest {
  key: string // 传递的对应属性名称
  cityNum: number //城市的id
}
