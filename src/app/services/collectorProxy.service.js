import { series1Data, series2Data, series3Data, series4Data } from './constData';


export class CollectorProxyService {
	constructor ($q) {
		'ngInject';

		this.injections = { $q: $q };
	}

	getData() {
		return this.injections.$q.when([
			{
				region: 'North America',
				totalRPS: 0,
				fromGroup: true,
				instances: [
					{
						lbName: 'http-collector-america-multi-preemp',
						name: 'US-central-a',
						healthyAmount: 0,
						totalAmount: 1,
						cpuUtilization: 10,
						maxCpuUtilization: 72,
						drained: 90,
						rate: 1000,
						color: '#FF7D1D',
						selected: false,
						visible: false,
						data: series4Data
					}
				]
			},
			{
				region: 'Asia',
				totalRPS: 19974.84955555,
				fromGroup: true,
				instances: [
					{
						lbName: 'http-collector-asia-multi-preemp',
						name: 'asia-east-a',
						healthyAmount: 1,
						totalAmount: 1,
						cpuUtilization: 21.33333,
						maxCpuUtilization: 72,
						drained: 90,
						rate: 3748.47,
						color: '#0000ff',
						selected: true,
						data: series1Data
					},
					{
						lbName: 'http-collector-asia-multi-preemp',
						name: 'asia-east-b',
						healthyAmount: 2,
						totalAmount: 2,
						cpuUtilization: 80.33333,
						maxCpuUtilization: 92,
						drained: 95,
						rate: 348.47,
						color: '#ff0f00',
						selected: false,
						visible: false,
						data: series2Data
					},
					{
						lbName: 'http-collector-asia-multi-preemp',
						name: 'asia-east-c',
						healthyAmount: 2,
						totalAmount: 3,
						cpuUtilization: 87.33333,
						maxCpuUtilization: 92,
						drained: 95,
						rate: 478.47,
						color: '#ff00f0',
						selected: false,
						visible: false,
						data: series2Data
					},
					{
						lbName: 'http-collector-asia-multi-preemp',
						name: 'asia-east-d',
						healthyAmount: 2,
						totalAmount: 2,
						cpuUtilization: 50.33333,
						maxCpuUtilization: 72,
						drained: 95,
						rate: 1748.47,
						color: '#fff000',
						selected: false,
						visible: false,
						data: series2Data
					}
				],
			},
			{
				region: 'Europe',
				totalRPS: 1997,
				fromGroup: true,
				instances: [
					{
						lbName: 'http-collector-europe-multi-preemp',
						name: 'eu-south-a',
						healthyAmount: 1,
						totalAmount: 2,
						cpuUtilization: 10,
						maxCpuUtilization: 72,
						drained: 90,
						rate: 2048.47,
						color: '#70ff30',
						selected: false,
						visible: false,
						data: series3Data
					},
					{
						lbName: 'http-collector-europe-multi-preemp',
						name: 'eu-south-b',
						healthyAmount: 1,
						totalAmount: 2,
						cpuUtilization: 10,
						maxCpuUtilization: 72,
						drained: 90,
						rate: 748.47,
						color: '#00fff0',
						selected: false,
						visible: false,
						data: series3Data
					}
				]
			},
			{
				region: '',
				totalRPS: 0,
				fromGroup: false,
				instances: [
					{
						lbName: 'http-collector-asia-multi-preemp',
						name: 'US-central-a',
						healthyAmount: 0,
						totalAmount: 0,
						cpuUtilization: 0,
						maxCpuUtilization: 72,
						drained: 90,
						rate: 0,
						color: '#4F7F1D',
						selected: false,
						visible: false,
						data: series4Data
					}
				]
			}
		]);
	}
}