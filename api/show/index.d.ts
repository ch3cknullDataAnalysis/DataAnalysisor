
// 元数据类型
type IRawData = number

// 统计数据类型，包含统计指标
interface IStat {
	count:number,
	sum:number,
	mean:number,
	median:number,
	max:number,
	min:number
	
}

// 展示数据接口
export interface IShowResponse {
	// 0 为成功，其他为失败
	code: number,
	// 错误信息
	message: string,
	data: {
		// 元数据
		raw: IRawData[],    //以,分隔开的一组数
		// 统计指标
		stat: IStat[]     //以,分隔开的键值对
	}
}

export interface IShowRequest {
	key: string,
	ids: number
}
