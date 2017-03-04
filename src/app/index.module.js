import { routerConfig } from './index.route';
import { appConfig } from './index.config';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RPSComponent } from './components/rps/rps.component';
import { LbDistributionContainer } from './components/lbDistribution/lbDistributionContainer.component';
import { LbDistribution } from './components/lbDistribution/lbDistribution.component';
import { Cureves } from './components/cureves/cureves.component';

import { CollectorProxyService } from './services/collectorProxy.service';

import { MainController } from './main/main.controller';


angular.module('sky', ['restangular', 'ui.router', 'ui.bootstrap', 'highcharts-ng', 'pascalprecht.translate'])

	//configuration
	.config(routerConfig)
	.config(appConfig)

	//services
	.service('collectorProxy', CollectorProxyService)

	//directives
  .component('navbar', NavbarComponent())
  .component('rps', RPSComponent())
  .component('lbDistribution', LbDistribution())
  .component('lbDistributionContainer', LbDistributionContainer())
  .component('cureves', Cureves())

	//controllers
	.controller('MainController', MainController);
