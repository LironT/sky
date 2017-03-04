export function appConfig ($translateProvider) {
  'ngInject';

  $translateProvider.useStaticFilesLoader({
    prefix: './app/i18n/locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en-US');
  $translateProvider.useSanitizeValueStrategy('escaped');
}
