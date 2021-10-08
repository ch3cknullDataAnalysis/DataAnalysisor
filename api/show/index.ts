// 元数据类型
type IRawCityData = [number[], number[]]

type IRawData = {
  name: string // 城市名称
  keyName: string // 对应指标 和传递的key一致
  data: IRawCityData //统计数据 数组
}

// 统计数据类型，包含统计指标
interface IStat {
  city: string
  sum: number
  mean: number
  medium: number
  max: number
  min: number
}

// 单个城市的接口
interface CityData {
  // 元数据
  raw: IRawData[] //数组
  // 统计指标
  stat: IStat //一组map
}

// 展示数据接口
export interface IShowResponse {
  // 0 为成功，其他为失败
  code: number
  // 错误信息
  message: string
  data: CityData[]
}

export interface IShowRequest {
  key: string // 传递的对应属性名称
  id: string //城市的id, 支持多选
}
