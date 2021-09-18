
// 元数据类型
type IRawData = number

// 统计数据类型，包含统计指标
interface IStat {
	[propName: string] : any
	//
}

// 展示数据接口
export interface IShowResponse {
	// 0 为成功，其他为失败
	code: number
	// 错误信息
	message: string
	data: {
		// 元数据
		raw: IRawData[],
		// 统计指标
		stat: IStat[]
	}
}