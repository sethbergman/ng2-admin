"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var lineChart_service_1 = require("./lineChart.service");
require("style-loader!./lineChart.scss");
var LineChart = (function () {
    function LineChart(_lineChartService) {
        this._lineChartService = _lineChartService;
        this.chartData = this._lineChartService.getData();
    }
    LineChart.prototype.initChart = function (chart) {
        var zoomChart = function () {
            chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
        };
        chart.addListener('rendered', zoomChart);
        zoomChart();
        if (chart.zoomChart) {
            chart.zoomChart();
        }
    };
    return LineChart;
}());
LineChart = __decorate([
    core_1.Component({
        selector: 'line-chart',
        templateUrl: './lineChart.html'
    }),
    __metadata("design:paramtypes", [lineChart_service_1.LineChartService])
], LineChart);
exports.LineChart = LineChart;
//# sourceMappingURL=lineChart.component.js.map