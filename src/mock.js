import Mock from 'mockjs';
Mock.mock('api/mock','get',
{
    "user|10-20": [{
        'name': '@cname',
        'id|+1': 1
    }]
}
)