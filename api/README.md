现提供两个 API

1. 数据展示/数据分析
2. 数据预测

## 数据展示/数据分析

该接口接受两个参数

| 参数名  | 说明                                             |
| ------- | ------------------------------------------------ |
| key     | JSON 中对应的键                                  |
| cityNum | 城市的 ID, 支持多个, 多个 ID，ID 之间以 `,` 分隔 |

### Key 对应关系(待完善)

| 参数值 | 对应键值             |
| ------ | -------------------- |
| gdpSum | 地区生产总值（亿元） |

### 请求样例

```http
GET http://domain.name/api/show?key=gdpSum&cityNum=110000,120000
```

### 响应样例

```json
{
  "code": 0,
  "message": "OK",
  "keyName": "gdpSum",
  "data": [
    {
      "cityName": "北京",
      "raw": [
        [2013, 2014, 2015, 2016, 2017],
        [10010, 9100, 12020, 13000, 14100, 11550]
      ],
      "stat": {
        "max": 10000,
        "min": 1000,
        "median": 10,
        "mean": 10,
        "sum": 10
      }
    },
    {
      "cityName": "天津",
      "raw": [
        [2013, 2014, 2015, 2016, 2017],
        [10810, 9180, 12320, 12800, 12800, 12550]
      ],
      "stat": {
        "max": 10000,
        "min": 1000,
        "median": 10,
        "mean": 10,
        "sum": 10
      }
    }
  ]
}
```

## 数据预测

该接口接受两个参数

| 参数名  | 说明                  |
| ------- | --------------------- |
| key     | JSON 中对应的键       |
| cityNum | 城市的 ID, 不支持多个 |

### Key 对应关系(待完善)

| 参数值 | 对应键值             |
| ------ | -------------------- |
| gdpSum | 地区生产总值（亿元） |

### 请求样例

```http
GET http://domain.name/api/show?key=gdpSum&cityNum=110000
```

### 响应样例

```json
{
  "code": 0,
  "message": "OK",
  "data": {
    "num": 10000
  }
}
```
