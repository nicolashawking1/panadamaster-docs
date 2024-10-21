# Telegram mini app

## TG Bridge

Unity/TG/Service端的桥接的需求整理,基础逻辑的开发

[link to TG Bridge](/tg_bridge/intro.html)

## 登陆功能

```mermaid
graph TB
    A[用户登录] --> B[Unity环境Ready]
    B --> C[从Bridge获取登录信息]
    C --> D[加密通讯]
    D --> E[发送接口]
    E --> F[获取登录信息]
```

## 分享功能

```mermaid
graph TD
    A[用户进入游戏] --> B{用户登录}
    B -->|有邀请码| C[绑定邀请关系]
    C -->|绑定成功| Z[创建邀请关系]
    Z -->  D[正常流程]
    B -->|无邀请码| D[正常流程]
    D --> E[用户在游戏中]
    E -->|点击分享| F[调用bridge分享到群组]
    F --> G[群组点击链接]
    G -->|跳转游戏入口| A
```

## 适配Unity

适配用户在TG中出现的Unity的**兼容问题**,比如不能运行,适配失败等问题.

因为我们自己的**测试/机型**有限,所以依赖**用户反馈**才能进行适配.

优先在**第一个版本**中尽量保证兼容性,然后等待测试期间反馈

## 安全通讯

TODO待补充 需要TG、Unity、Service端三方搭配,利用密码学实现通讯的加解密