option = {
    title: {
        text: '国庆假期湖南省道路拥堵情况',
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
            data: ['G56临湘市', 'G4长沙县', 'G4芙蓉区', 'G4雨花区', 'G72零陵区','G4岳阳县', 'G5513宁乡县', 'G4E汝城县', 'G4岳塘区', 'G5513资阳区']

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
            data: [1.24,0.68,0.57,0.54,0.48,0.44,0.41,0.40,0.35,0.29]
        },

        {
            name: '平均速度',
            type: 'line',
            yAxisIndex: 1,
            data: [49.17,85.58,49.03,55.69,75.34,77.38,83.73,67.86,85.25,91.27]
        }
    ]
};
