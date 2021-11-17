#coding=utf-8

from flask import Flask, request, jsonify
import json
from database import MSSQL
from flask_cors import CORS

dblab = MSSQL(host="127.0.0.1:1433",user="sa",pwd="12345678",db="DBclass")

app = Flask(__name__)
CORS(app, supports_credentials=True)
@app.route('/db', methods=['POST'])
def db():
    data = request.get_data()
    query = json.loads(data.decode())
    msg = {}
    try:
        if query['query'] == 'query1':
            id = query["data"]
            sql = "select name, dept_name from student where ID = " + id
            stu = dblab.ExecQuery(sql)
            msg['student'] = stu[0][0]
            msg['dept'] = stu[0][1]
            sql = "select course.course_id, title, cast(credits as varchar), grade from takes, course where course.course_id = takes.course_id and ID = " + id
            msg['course'] = dblab.ExecQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'

        elif query['query'] == 'query2':
            word = query["data"]
            sql = "select course.course_id, title, dept_name, cast(credits as varchar) from course where title like '%" + word + "%'"
            msg['course'] = dblab.ExecQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'

        elif query['query'] == 'query3':
            sql = "select name from F join student on F.id=student.id group by name having count(grade)>=1"
            msg['name'] = dblab.ExecQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'

        elif query['query'] == 'query4':
            sql = "insert into student values (" + query['id'] + ", '" + query['name'] + "', '" + query['dept'] + "', 0)"
            print(sql)
            msg['name'] = dblab.ExecNonQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'
        
        elif query['query'] == 'query5':
            sql = query['data']
            msg['data'] = dblab.ExecQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'

        elif query['query'] == 'query6':
            sql = "insert into instructor values (" + query['id'] + ", '" + query['name'] + "', '" + query['dept'] + "', " + query['salary'] + ")"
            print(sql)
            msg['name'] = dblab.ExecNonQuery(sql)
            msg['status'] = 0
            msg['message'] = 'succeed'

        else:
            msg['status'] = -1
            msg['message'] = 'operation not allow'
    except Exception as e:
        msg['status'] = -1
        msg['message'] = str(e)
    ans = jsonify(msg)
    return ans
