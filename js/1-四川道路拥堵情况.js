option = {
    title: {
        text: '国庆假期四川省道路拥堵情况',
        subtext: '数据来自于百度地图',
        x:'center'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {

            magicType: {show: true, type: ['line', 'bar']},

        }
    },
    calculable: true,
    legend: {
        orient : 'vertical',
        x : 'left',
        data: ['高峰拥堵里程', '平均速度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['G5武侯区', 'G5旌阳区', 'G85宜宾县', 'G5双流', 'G5新津县','G5青川县', 'G93青神县', 'G5013资阳', 'G65万源市', 'G5红油市']

        }    ],
    yAxis: [
        {
            type: 'value',
            name: '高峰拥堵里程',
            axisLabel: {
                formatter: '{value} km'
            }
        },
        {
            type: 'value',
            name: '平均速度',
            axisLabel: {
                formatter: '{value} km/h'
            }
        }
    ],
    series: [

        {
            name: '高峰拥堵里程',
            type: 'bar',
            data: [0.55,0.45,0.45,0.33,0.33,0.22,0.22,0.20,0.20,0.19]
        },

        {
            name: '平均速度',
            type: 'line',
            yAxisIndex: 1,
            data: [35.50,92.05,63.99,86.96,70.37,80.55,85.14,82.42,74.51,89.92]
        }
    ]
};
