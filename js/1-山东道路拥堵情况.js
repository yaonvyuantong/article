option = {
    title: {
        text: '国庆假期山东省道路拥堵情况',
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
            data: ['G25青州市', 'G3W莘县', 'G3长清区', 'G3W阳谷县', 'G20城阳区','G2历程区', 'G18无棣县', 'G2沂南县', 'G18无棣县', 'G2济阳县段']

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
            data: [1.00,0.83,0.77,0.55,0.51,0.46,0.42,0.37,0.37,0.36]
        },

        {
            name: '平均速度',
            type: 'line',
            yAxisIndex: 1,
            data: [65.65,85.38,89.64,63.20,54.14,71.76,85.24,73.63,90.90,91.28]
        }
    ]
};
