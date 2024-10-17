# Database

::: info 目录
[[toc]]
:::

## 记录数据库基础规范

基于您提供的信息，以下是一份关系型数据库PostgreSQL的基础规范，包括了数据库初始化、表设计、数据一致性、索引策略、备份与恢复、安全性等方面：

1. **数据库初始化规范**：
   - 数据库服务器时间应设置为UTC+0。
   - 创建数据库时，字符集设置为UTF8，排序规则（collation）设置为UTF8通用排序规则。

2. **表设计规范**：
   - 每个表必须有一个主键（`primary key`），建议使用自增序列作为主键。
   - 每个表应该包含创建时间（`create_time`）和更新时间（`update_time`）字段，自动记录数据的创建和最后更新时间。
   - 使用`BaseModel`管理`primary key`、`create_time`、`update_time`字段。
   - 表名和字段名应使用小写字母和下划线分隔，避免使用保留字。
   - 避免使用过多的JOIN操作，设计时应考虑查询性能。

3. **数据一致性和完整性**：
   - 使用事务（Transactions）来保证数据操作的原子性、一致性、隔离性和持久性（ACID）。
   - 对于外键关系，应使用级联更新和删除来维护引用完整性。
   - 使用适当的数据类型和长度，避免数据溢出或不必要的空间浪费。

4. **索引策略**：
   - 对于经常作为查询条件的字段，应创建索引以提高查询效率。
   - 避免在频繁更新的列上创建索引，因为索引会降低更新性能。
   - 考虑使用复合索引来优化多列查询。

## BaseModel

```go
type BaseModel struct {
   ID        int64     `gorm:"primary_key;AUTO_INCREMENT;column:id" json:"id"`
   CreatedAt time.Time `json:"-" gorm:"type:timestamp;autoCreateTime"`
   UpdatedAt time.Time `json:"-" gorm:"type:timestamp;autoUpdateTime"`
}
```

其中`created_at`和`updated_time`自动更新,业务逻辑尽量不使用这两个字段作为判断

## docs 数据库模版实例

| name       | type      | uniqueIndex | not null | default | description |
| ---------- | --------- | ----------- | :------: | :------ | ----------- |
| id         | int       |             |    1     |         | 自增ID      |
| created_at | timestamp |             |          |         | 创建时间    |
| updated_at | timestamp |             |          |         | 更新时间    |
