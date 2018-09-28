~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            text: '2016年全国各省份游客总人数（万人）',
            subtext: '数据来自网络',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item'
        },
        dataRange: {
            orient: 'horizontal',
            min: 0,
            max: 6000,
            text: ['高', '低'],
            splitNumber: 5
        },
        series: [
            {
                name: '2016全国各省份游客人数（万人）',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 'left'
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '山东', value: 5782.8},
                    {name: '四川', value: 5955.96},
                    {name: '河南', value: 5187.4},
                    {name: '江西', value: 5360.34},
                    {name: '湖北', value: 3623.6},
                    {name: '山西', value: 3985.92},
                    {name: '湖南', value: 4383.57},
                    {name: '安徽', value: 4644.19},
                    {name: '陕西', value: 4673.65},
                    {name: '福建', value: 2124.64},
                    {name: '贵州', value: 3000.9},
                    {name: '云南', value: 1363.56},
                    {name: '河北', value: 2584.9},
                    {name: '上海', value: 927},
                    {name: '北京', value: 1119.5},
                    {name: '重庆', value: 2531.79},
                    {name: '天津', value: 805.98},
                    {name: '吉林', value: 1180.98},
                    {name: '甘肃', value: 1137.5},
                    {name: '内蒙古', value: 853.16},
                    {name: '海南', value: 350.28},
                    {name: '新疆', value: 601.6},
                    {name: '广东', value: 976.48},
                    {name: '宁夏', value: 247.56}
                ]
            }
        ],
        animation: false
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            text: '2017年全国各省份游客总人数（万人）',
            subtext: '数据来自网络',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
        tooltip: {
            trigger: 'item'
        },
        dataRange: {
            orient: 'horizontal',
            min: 0,
            max: 6000,
            text: ['高', '低'],
            splitNumber: 5
        },
        series: [
            {
                name: '2017全国各省份游客人数（万人）',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 'left'
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: '山东', value: 7065.5},
                    {name: '四川', value: 7145.79},
                    {name: '广东', value: 4820.8},
                    {name: '江西', value: 6087.21},
                    {name: '湖南', value: 6147.32},
                    {name: '湖北', value: 4620.69},
                    {name: '山西', value: 5341.47},
                    {name: '河南', value: 5296.34},
                    {name: '贵州', value: 4614.54},
                    {name: '陕西', value: 5636.82},
                    {name: '辽宁', value: 4544},
                    {name: '福建', value: 3002.19},
                    {name: '广西', value: 2539.75},
                    {name: '重庆', value: 3418.63},
                    {name: '新疆', value: 847.72},
                    {name: '上海', value: 1059},
                    {name: '吉林', value: 1558.14},
                    {name: '甘肃', value: 1540.2},
                    {name: '北京', value: 1237, selected: true},
                    {name: '天津', value: 932.04},

                    {name: '内蒙古', value: 1062.18},
                    {name: '宁夏', value: 289.31},


                ]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET3);
    var option = {
        title: {
            text: '国庆假期全国道路拥堵情况',
            subtext: '数据来自于百度地图',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
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
        legend: {
            y: 'bottom',
            data: ['高峰拥堵里程', '平均速度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['G15宝安区', '外环浦东', 'G94东莞', 'G15龙岗', 'G25德清县', '外环宝山', 'G1512嵊州市', 'G9411东莞', '外环闵行', 'G20柳林']
            }
        ],
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
                data: [8.51, 6.48, 6.23, 6.05, 6.01, 5.96, 5.50, 5.46, 5.34, 4.96]
            },

            {
                name: '平均速度',
                type: 'line',
                yAxisIndex: 1,
                data: [46.54, 43.82, 49.27, 41.45, 28.55, 24.91, 52.09, 20.14, 27.53, 31.03]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET4);
    var option = {
        title: {
            text: '国庆假期四川省道路拥堵情况',
            subtext: '数据来自于百度地图',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
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
        legend: {
            y: 'bottom',
            data: ['高峰拥堵里程', '平均速度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['G5武侯区', 'G5旌阳区', 'G85宜宾县', 'G5双流', 'G5新津县', 'G5青川县', 'G93青神县', 'G5013资阳', 'G65万源市', 'G5红油市']

            }],
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
                data: [0.55, 0.45, 0.45, 0.33, 0.33, 0.22, 0.22, 0.20, 0.20, 0.19]
            },

            {
                name: '平均速度',
                type: 'line',
                yAxisIndex: 1,
                data: [35.50, 92.05, 63.99, 86.96, 70.37, 80.55, 85.14, 82.42, 74.51, 89.92]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET5);
    var option = {
        title: {
            text: '国庆假期湖南省道路拥堵情况',
            subtext: '数据来自于百度地图',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
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
        legend: {
            y: 'bottom',
            data: ['高峰拥堵里程', '平均速度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['G56临湘市', 'G4长沙县', 'G4芙蓉区', 'G4雨花区', 'G72零陵区', 'G4岳阳县', 'G5513宁乡县', 'G4E汝城县', 'G4岳塘区', 'G5513资阳区']

            }],
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
                data: [1.24, 0.68, 0.57, 0.54, 0.48, 0.44, 0.41, 0.40, 0.35, 0.29]
            },

            {
                name: '平均速度',
                type: 'line',
                yAxisIndex: 1,
                data: [49.17, 85.58, 49.03, 55.69, 75.34, 77.38, 83.73, 67.86, 85.25, 91.27]
            }
        ]
    };
    myChart.setOption(option);
}();

~function () {
    var myChart = echarts.init(ET6);
    var option = {
        title: {
            text: '国庆假期山东省道路拥堵情况',
            subtext: '数据来自于百度地图',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
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
        legend: {
            y: 'bottom',
            data: ['高峰拥堵里程', '平均速度']
        },
        xAxis: [
            {
                type: 'category',
                data: ['G25青州市', 'G3W莘县', 'G3长清区', 'G3W阳谷县', 'G20城阳区', 'G2历程区', 'G18无棣县', 'G2沂南县', 'G18无棣县', 'G2济阳县段']

            }],
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
                data: [1.00, 0.83, 0.77, 0.55, 0.51, 0.46, 0.42, 0.37, 0.37, 0.36]
            },

            {
                name: '平均速度',
                type: 'line',
                yAxisIndex: 1,
                data: [65.65, 85.38, 89.64, 63.20, 54.14, 71.76, 85.24, 73.63, 90.90, 91.28]
            }
        ]
    };
    myChart.setOption(option);
}();
