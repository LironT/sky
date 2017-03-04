export function LbDistributionContainer() {
  'ngInject';

  return {
    templateUrl: 'app/components/lbDistribution/lbDistributionContainer.html',
    controller: LbDistributionContainerController,
    controllerAs: 'vm',
    bindToController: true,
    bindings: {
      data: '<'
    }
  };
}

class LbDistributionContainerController {
  constructor () {
    'ngInject';

    this.$onInit = function() {
      this.lastUpdated = 1;
      this.maxRps = 1;

      for (var i = 0; i < this.data.length; i++) {
        var group = this.data[i];
        for (var j = 0; j < group.instances.length; j++) {
          var instance = group.instances[j];
          if (this.maxRps < instance.rate){
            this.maxRps = instance.rate;
          }
        }
      }
    };
  }
}