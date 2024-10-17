# H5 to Unity

::: info 目录
[[toc]]
:::

## HTML Ready[html_ready]

用于通知Unity HTML的状态已经ready了, 在ready之前不可和H5进行Bridge交互

如果有消息可以通过订阅/状态机等方式来延迟推送消息

### Request

| FieldName  |   type    | remark       |
| ---------- | :-------: | :----------- |
| session_id | `uuid-v7` |              |
| t          |  string   | `html_ready` |
| d          |     -     |              |

### Response

| FieldName  |        type        | remark       |
| ---------- | :----------------: | :----------- |
| session_id | Request[`uuid-v7`] |              |
| ok         |        bool        | init是否成功 |
| m          |       string       | init失败原因 |
| d          |         -          |              |