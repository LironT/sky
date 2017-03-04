export function LbDistribution() {
  'ngInject';

  return {
    templateUrl: 'app/components/lbDistribution/lbDistribution.html',
    controllerAs: 'vm',
    bindToController: true,
    require: {
      tabsCtrl: '^lbDistributionContainer'
    },
    bindings: {
      maxRps: '<',
      group: '<'
    }
  };
}