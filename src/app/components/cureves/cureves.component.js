export function Cureves() {
  'ngInject';

  return {
    templateUrl: 'app/components/cureves/cureves.html',
    controllerAs: 'vm',
    bindToController: true,
    controller: CurevesController,
    bindings: {
      maxRps: '<',
      series: '<'
    }
  };
}

class CurevesController {
  constructor () {
    'ngInject';

    this.$onInit = function () {
      this.blockSize = 100;
    }
  }
}