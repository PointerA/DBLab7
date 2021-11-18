## 数据库系统实验7 Web Applications

### 编程环境

windows

前端语言：react

后端语言：python

数据库：sql server



### 运行

1、前端运行，进入lab文件夹，yarn start

2、后端运行，需要将labpy文件夹中的api文件第7行改为自己的mssql账号信息，

​      运行main文件

3、前端运行在3000端口，后端运行在5123端口

4、浏览器访问localhost:3000



### Code

lab文件夹中存储的是前端代码

labpy文件夹中存储的是后端代码



### Requirement

前端：需要安装react相应的包，在package.json中，直接yarn install

后端：需要的python库有flask、flask_cors、pymssql



### 后端接口

#### 输入格式

##### 第一题第1小题

```
{
    "query" : "query1",
    "data" : ""       //学号
}
```

##### 第一题第2小题

```
{
    "query" : "query2",
    "data" : ""      //关键词
}
```

##### 第一题第3小题

```
{
    "query" : "query3"
}
```

##### 第一题第4小题

```
{
    "query" : "query4",
    "id": ""
    "name": ""
    "dept": ""
}
```

##### 第二题

下拉列表初始化

```
{
    "query" : "query5"
    "data" : ""  //SQL语句
}
```

学生插入元组同第一题第4小题

导师插入元组

```
{
    "query" : "query6",
    "id": ""
    "name": ""
    "dept": ""
    "salary": ""
}
```

#### 返回格式

##### 第一题第1小题

```
{
    "status" : 0,
    "message": "succeed"
    "student": ""
    "dept": ""
    "course": [["course_id","title","credits","grade"]]
}
```



##### 第一题第2小题

```
{
    "status" : 0,
    "message": "succeed"
    "course": [["course_id","title","dept_name","credits"]]
}
```



##### 第一题第3小题

```
{
    "status" : 0,
    "message": "succeed"
    "name": []
}
```



##### 第一题第4小题

```
{
    "status" : 0,
    "message": "succeed"
}
```



##### 第二题

下拉列表初始化

```
{
    "status" : 0,
    "message": "succeed"
    "data":[] //sql语句返回的结果，这里是所有department name
}
```

学生插入元组

导师插入元组

```
{
    "status" : 0,
    "message": "succeed"
}
```

#### 数据库执行出错时返回的结果

```
{
    "status" : -1,
    "message": "Exception"
}
```

