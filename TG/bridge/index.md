# Bridge

开发Bridge主要是打通前端和Unity的桥梁

Bridge可以帮助Unity调用TG的功能,Bridge同样也可以帮助Unity调用前端的一些功能 具体的功能会持续添加到docs里

## 双端如何交互

我们的实现一定是要基于双向通讯,消息可以从H5传递给Unity,反过来Unity的消息同样可以传递给H5

由于在Unity中部分字是系统预留,所以部分子段取名会简写到首字母

- `data`->`d`
- `type`->`t`
- `message`->`m`

::: danger
需要Unity开发人员,调研如何和H5进行交互, 建议调研方向[WebGL: Interacting with browser scripting](https://docs.unity3d.com/560/Documentation/Manual/webgl-interactingwithbrowserscripting.html)
:::

### Send Message

需要Unity/H5共同实现一个 SendMessage方法.

H5挂载在`window.bridge.sendMessage`上，Unity挂载在公共`GameObject`上`sendMessage`方法上

当接收方接收到消息后会通过`message`中的`type`枚举来处理对应逻辑,并且不管是否成功处理都要返回数据给发送方

## Data Interface

:::danger
TODO :如果利用`JSON`传递消息的话是`string`传递,并且会伴随`Object`序列化反序列化的性能损耗问题,需要看是否`C#?`的`Object`是否直接能映射到javaScript中
:::

### 1. Request

| FieldName  |  type  | remark                                       |
| ---------- | :----: | :------------------------------------------- |
| session_id | string | 会话ID                                       |
| t          | string | [type]message类型 通过类型区分消息的具体内容 |
| d          |  any   | [data]传递的具体数据                         |

```json
// Request数据示例
{
    "session_id":"01928f6b-0a88-70d7-8ac1-780c0672bbf0",
    "t": "share_url_to_session",
    "d": {
        "text": "hello world",
        "url": "https://google.com"
    }
}
```

### 2. Response

| FieldName  |  type  | remark               |
| ---------- | :----: | :------------------- |
| session_id | string | 会话ID               |
| ok         |  bool  | 是否成功             |
| m          | string | [message]失败message |
| d          |  any   | [data]具体数据       |

```json
// Response数据示例
{
    "session_id":"01928f6b-0a88-70d7-8ac1-780c0672bbf0",
    "ok": true,
    "m":"",
    "d": {}
}
```
