# Service

## 基础框架搭建

Golang开发服务器,PostgreSQL存储用户数据,Rides缓存

## 后台功能拆分

TODO 待补充

1. 需要哪些接口
2. 需要拆分哪些资源

## 安全通讯

后端的安全通讯

## 用户系统的开发 (用户信息)

[link to account manager](/service/accountManager.md)

## 邀请系统的开发 (邀请关系)

[link to referrer](/service/accountManager.html#邀请功能)

## 游戏数据系统的开发 (用户存档)

[link to asset manager](/service/assetManager)

## 报表数据 (关键数据/总用户新增/日活)

**低优先级**

是否可以接入三方服务? Google Analytics等

如果时间不允许前期可以利用sql导出基础数据

## 日志系统 (错误日志)

**低优先级**

是否可以接入三方服务? Sentry等

如果时间不允许在beta版本中,可以让Unity将错误暴露给用户,用户反馈给社区
