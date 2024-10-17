# Account Manager

用户管理,存放用户相关信息,包括基础信息，签到信息，等级，装备以及加成...

::: info 目录
[[toc]]
:::

## 基础信息/功能

用户的基础信息,在登陆的时候需要初始化用户信息

1. 不需要存TG头像
2. 存TG_id的nickname,第一次登陆的时候需要初始化,后续不需要更新
3. 在第一次登陆的时候生成invite_code, 创建邀请者关系,邀请奖励

### 数据库 Account

| name        |     type     | uniqueIndex | not null | default | description |
| ----------- | :----------: | :---------: | :------: | :------ | :---------: |
| telegram_id | int64/string |      1      |          |         | TelegramID  |
| account_id  | int64/string |      1      |          |         |   账号ID    |
| nickname    |    string    |             |          |         |    昵称     |
| avatar      |    string    |             |          |         |    头像     |
| invite_code |    string    |             |          |         |   邀请码    |
| enable      |     bool     |             |          |         |    启用     |

### 数据库 AccountBoundWallet

| name       |            type             |     uniqueIndex     | not null | default | description |
| ---------- | :-------------------------: | :-----------------: | :------: | :------ | :---------: |
| account_id |        int64/string         | bound_wallet_unique |    1     |         |   账号ID    |
| ecology    | `AccountBoundWalletEcology` | bound_wallet_unique |    1     |         |  钱包生态   |
| chain      |           string            |                     |    1     |         |   钱包链    |
| chain_id   |            int64            |                     |    1     |         |  钱包链ID   |
| address    |           string            | bound_wallet_unique |    1     |         |  钱包地址   |

### 枚举 AccountBoundWalletEcology

| index | value  |
| ----- | ------ |
| 0     | ETH    |
| 1     | SOLANA |

## Token

维护用户的登陆`token`,保证`实效性`,`唯一性`.  

使用`jwt`生成token, `衍生: config.jwtSecret`

1. 利用`jwt`过期时间自校验实效性`衍生:config.jwtTimeout`
2. 利用`Redis`维持每个token的唯一登陆`衍生:Redis`

### jwt中的内容

| name       | description |
| ---------- | ----------- |
| account_id | 用户ID      |
| exp        | 过期时间    |
| iat        | 签发时间    |

## 签到信息

用户的`签到信息`，包括总签到`次数`，`连续签到天数`.

需要维护一个`签到奖励表`,表示已`N`天为一个循环,连续签到每天的奖励,断签或者N+1都相当于第一天的奖励

签到奖励在签到的时候根据`签到奖励表`，给予不同奖励.

### 数据库 account_checkin

TODO..

### 数据库 account_checkin_reward

TODO..

## 邀请功能

用户在登陆的时候如果携带`invite_code`,需要创建邀请者关系

绑定关系是一对多的关系,一个用户可以邀请任意人,但是只能被邀请一次

邀请关系是弱关联,通过数据库查询绑定者/被绑定着的`account_id`来获取邀请者/被邀请者列表

### 邀请奖励

邀请奖励在被邀请的时候根据`邀请配置`和是否是`会员`，给予不同奖励,奖励是实时发放

::: info
当前奖励是固定奖励,双方都会获得奖励,没有上限
:::

### 数据库 account_referral

TODO...

### 数据库 account_referral_config

TODO...

## 等级

用户等级,包括`当前等级`，`当前经验`，`下一等级经验`

`衍生: 等级奖励`

## 装备以及加成

用户能装备那些装备?

用户的加成都收到那些影响?
