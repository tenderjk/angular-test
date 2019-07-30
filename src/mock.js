import Mock from 'mockjs';
Mock.mock('api/mock','get',
{
    "user|10-20": [{
        'name': '@cname',
        'id|+1': 1
    }]
}
)

Mock.mock('api/getname','get',{
    'username|5': [{
        'name': '@cname',
        'age|10-20':0,
        'id|+1':1,
        'sex|0-1':0,
        'img': Mock.Random.dataImage()
    }]
})