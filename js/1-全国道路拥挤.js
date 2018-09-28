option = {
    title: {
        text: '国庆假期全国道路拥堵情况',
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
            data: ['G15宝安区', '外环浦东', 'G94东莞', 'G15龙岗', 'G25德清县','外环宝山', 'G1512嵊州市', 'G9411东莞', '外环闵行', 'G20柳林']

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
            data: [8.51,6.48,6.23,6.05,6.01,5.96,5.50,5.46,5.34,4.96]
        },

        {
            name: '平均速度',
            type: 'line',
            yAxisIndex: 1,
            data: [46.54,43.82,49.27,41.45,28.55,24.91,52.09,20.14,27.53,31.03]
        }
    ]
};
