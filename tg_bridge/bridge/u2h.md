# Unity to H5

::: info 目录
[[toc]]
:::

## 获取TG用户信息 [get_user_info]

获取用户的信息,包括用户ID，昵称，头像等,同时传递用于登陆的原始数据

### Request

| FieldName  |   type    | remark          |
| ---------- | :-------: | :-------------- |
| session_id | `uuid-v7` |                 |
| t          |  string   | `get_user_info` |
| d          |    any    |                 |

### Response

| FieldName  |           type           | remark |
| ---------- | :----------------------: | :----- |
| session_id |    Request[`uuid-v7`]    |        |
| ok         |           bool           |        |
| m          |          string          |        |
| d          | `get_user_info_response` |        |

### Response.get_user_info_response

| FieldName     |  type  | remark                |
| ------------- | :----: | :-------------------- |
| user_id       | string | 用户ID                |
| nickname      | string | 用户昵称              |
| init_data_raw | string | 原始数据 用于后端登陆 |

## 分享TG miniapp到会话 [share_mini_app_to_session]

分享app到某个会话里,需要传递mini app的url，文本和分享中传递的数据

比如分享一个邀请链接

### Request

| FieldName  |                type                 | remark                      |
| ---------- | :---------------------------------: | :-------------------------- |
| session_id |              `uuid-v7`              |                             |
| t          |               string                | `share_mini_app_to_session` |
| d          | `share_mini_app_to_session_request` |                             |

### Request.share_mini_app_to_session_request

| FieldName  |  type  | remark                         |
| ---------- | :----: | :----------------------------- |
| app_url    | string | TG Mini App的Url               |
| text       | string | 文本文案                       |
| share_data |  any   | 分享中传递的数据(例如邀请信息) |

### Response

| FieldName  |        type        | remark |
| ---------- | :----------------: | :----- |
| session_id | Request[`uuid-v7`] |        |
| ok         |        bool        |        |
| m          |       string       |        |
| d          |         -          |        |
