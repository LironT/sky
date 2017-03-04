export function RPSComponent() {
  'ngInject';

  return {
    templateUrl: 'app/components/rps/rps.html',
    controller: RPSController,
    controllerAs: 'vm',
    bindToController: true,
    bindings: {
      data: '<'
    }
  };
}

class RPSController {
  constructor () {
    'ngInject';

    this.$onInit = function() {
      let that = this;

      function getSeriesByName(name) {
        for (var i = 0; i < that.series.length; i++) {
          var series = that.series[i];
          if (series.name === name){
            return series;
          }
        }

        return null;
      }

      function getSeriesFromData(){
        let series = [];

        for (var i = 0; i < that.data.length; i++) {
          var group = that.data[i];
          for (var j = 0; j < group.instances.length; j++) {
            var instance = group.instances[j];
            series.push(instance);
          }
        }

        that.series = series;
        return series;
      }

      this.selectedTime = '7d';
      this.times = [
        { value: '1h', text: '1 hour'}, { value: '6h', text: '6 hours'}, { value: '12h', text: '12 hours'},
        { value: '1d', text: '1 day'}, { value: '2d', text: '2 days'}, { value: '4d', text: '4 days'},
        { value: '7d', text: '7 days'}, { value: '14d', text: '14 days'}, { value: '30d', text: '30 days'},
      ];

      this.myStoreChartConfiguration = {
        chart: { type: 'area', backgroundColor: 'transparent' },
        title: {
          align: 'left',
          style: {
            'font-size': '15px',
            fontWeight: 'regular'
          },
          text: 'RPS http-collector-lb-backend-service'
        },
        tooltip: {
          positioner: function () {
            return { x: this.chart.chartWidth - 100, y: 10 };
          },
          borderWidth: 0,
          backgroundColor: 'none',
          shadow: false,
          useHTML: true,
          padding: 0,
          pointFormat: '<b>{point.name}</b>',
          dateTimeLabelFormats: {
            millisecond: "%b %e, %H:%M:%S.%L",
            second: "%b %e, %H:%M:%S",
            minute: "%b %e, %H:%M",
            hour: "%b %e, %H:%M",
            day: "%b %e, %H:%M",
            week: "%m-%d-%Y",
            month: "%B %Y",
            year: "%Y"
          }
        },
        credits: { enabled: false },
        legend: {
          enabled: true,
          squareSymbol: true,
          symbolHeight: 12,
          symbolWidth: 12,
          symbolRadius: 0,
          itemMarginBottom: 2,
          labelFormatter: function () {
            let seriesData = getSeriesByName(this.name);
            let defualtPos = seriesData.data && seriesData.data[0] && seriesData.data[0][1] ?
                Math.round(seriesData.data[0][1]) : '';
            let pos = seriesData.selectedY ? ': ' + seriesData.selectedY : defualtPos;

            return seriesData.lbName +  '(' + seriesData.name + ')' + pos;
          }
        },
        exporting: { enabled:false },
        plotOptions: {
          series: {
            cursor: 'pointer',
            turboThreshold: 0,
            fillOpacity: 0.4,
            marker:{ enabled: false },
            lineWidth: 1,
            states: { hover: { lineWidth: 1 } },
            threshold: null,
            point: {
              events: {
                mouseOver: function () {
                  let seriesData = getSeriesByName(this.series.name);
                  seriesData.selectedY = this.y.toFixed(2);

                  this.series.update({selectedY: this.y})
                }
              }
            }
          }
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            second: '%M',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%b %e',
            week: '%b %e',
            month: '20%y %b',
            year: '%b'
          },
        },
        yAxis: {
          title: '',
          min: 0
        },
        series: getSeriesFromData()
      };
    };
  }
}