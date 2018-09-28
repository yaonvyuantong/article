option = {
    title: {
        text: '2017年全国各省份游客总人数（万人）',
        subtext: '数据来自网络',
        x:'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data: ['四川', '湖南', '山东']
    },
    dataRange: {
        orient: 'horizontal',
        min: 0,
        max: 6000,
        text: ['高', '低'],           // 文本，默认为数值文本
        splitNumber:5
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false}
        }
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
                {name: '河南', value:5296.34},
                {name: '贵州', value: 4614.54},
                {name: '陕西', value: 5636.82},
                {name: '辽宁', value: 4544},
                {name: '福建', value: 3002.19},
                {name: '广西', value: 2539.75},
                {name: '重庆', value: 3418.63},
                {name: '新疆', value: 847.72},
                {name: '上海', value: 1059},
                {name: '吉林', value:1558.14},
                {name: '甘肃', value: 1540.2},
                {name: '北京', value:1237, selected: true},
                {name: '天津', value: 932.04},

                {name: '内蒙古', value: 1062.18},
                {name: '宁夏', value:289.31},


            ]
        },
        {
            name: '2016全国个省份游客人数对比（万人）',
            type: 'pie',
            roseType: 'area',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            center: [document.getElementById('main').offsetWidth - 250, 225],
            radius: [30, 120],
            data: [
                {name: '四川', value:7145.79},
                {name: '湖南', value:6147.32},
                {name: '山东', value: 7065.5}
            ]
        }
    ],
    animation: false
};
var ecConfig = require('echarts/config');
myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
    var selected = param.selected;
    var mapSeries = option.series[0];
    var data = [];
    var legendData = [];
    var name;
    for (var p = 0, len = mapSeries.data.length; p < len; p++) {
        name = mapSeries.data[p].name;
        //mapSeries.data[p].selected = selected[name];
        if (selected[name]) {
            data.push({
                name: name,
                value: mapSeries.data[p].value
            });
            legendData.push(name);
        }
    }
    option.legend.data = legendData;
    option.series[1].data = data;
    myChart.setOption(option, true);
})
