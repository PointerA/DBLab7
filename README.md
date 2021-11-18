## 数据库系统实验7 Web Applications



### 本次实验的所有代码都已经放在了GitHub上，敬请各位批评指正

### Github链接https://github.com/PointerA/DBLab7



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





## 运行示例与结果

### 1、运行代码

前端代码运行![](picture\1.png?raw=true)

后端代码![](\picture\2.png)

浏览器打开

![](\picture\3.png)

网页的呈现![](\picture\4.png)



### 2、运行结果

#### 第一题第1小问

输入正确学号

![](\picture\1.1.png)

输入的学生没有学过课程![](\picture\1.13.png)

如果输入没有的学号![](D:\大三上学期\数据库\作业\实验课作业\Lab7\picture\1.12.png)

非法输入![](\picture\1.14.png)



#### 第一题第2小问

当查询有结果![](\picture\1.21.png)

当查询无结果![](\picture\1.22.png)



#### 第一题第3小问

由于数据库中不存在挂科两门以上的学生（见以前的作业），这里只查询了挂科一门的学生。![](\picture\1.3.png)

#### 第一题第4小问

正常插入一条记录![](\picture\1.41.png)

插入不存在的系名，违反外键约束![](\picture\1.43.png)

插入重复的学号，违反主键约束![](\picture\1.42.png)



#### 第二题第1小问

在lab\src\pages\SThree.js中

#### ![](\picture\2.1.png)



#### 第二题第2小问

在lab\src\pages\SThree.js中

![](\picture\2.2.png)



#### 第二题第3小问

这里的Department下拉列表用到了第1、2小问的函数

![](\picture\2.3.png)

插入学生记录

![](\picture\2.31.png)

插入导师记录

![](\picture\2.32.png)