module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/lib/angular/angular.js',
      'public/lib/angular/angular-route.js',
      'public/lib/angular/angular-mocks.js',
      'public/js/**/*.js',
      'test/front-end/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
