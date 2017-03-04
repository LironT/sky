export class MainController {
  constructor(collectorProxy) {
    'ngInject';

    this.injections = { collectorProxy: collectorProxy };

    this.data = [];

    this.getLBData();
  }

  getLBData() {
    let that = this;
    this.injections.collectorProxy.getData().then(function (data) {
      that.data = data;
    });
  }
}
