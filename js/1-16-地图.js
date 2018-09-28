option = {
    title: {
        text: '2016年全国各省份游客总人数（万人）',
        subtext: '数据来自网络',
        x:'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data: ['四川', '江西', '山东']
    },
    dataRange: {
        orient: 'horizontal',
        min: 0,
        max: 6000,
        text: ['高', '低'],           // 文本，默认为数值文本
        splitNumber: 0
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
                {name: '甘肃', value: 1137.5, selected: true},
                {name: '内蒙古', value: 853.16},
                {name: '海南', value: 350.28, selected: true},
                {name: '新疆', value: 601.6},
                {name: '广东', value: 976.48},
                {name: '宁夏', value: 247.56},

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
                {name: '四川', value: 5955.96},
                {name: '江西', value: 5360.34},
                {name: '山东', value: 5782.8}
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
