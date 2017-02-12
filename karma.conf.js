module.exports = function(config) {
	config.set({

		basePath: '',
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'kjhtml','spec'],    
	  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],
		singleRun: false,
		autoWatch: false,
		concurrency: 1,
		port: 9876,    
		colors: true,
		logLevel: config.LOG_INFO,
		exclude: [],
		// list of files / patterns to load in the browser
		files: [
			'dist/assets.min.js',
			'dist/app.js',
			'test/**/*.spec.js'
		],    
		client: {
			clearContext: false // leave Jasmine Spec Runner output visible in browser         
		},
		//Plugin configurations
		plugins:[
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-spec-reporter')                    
		],
		specReporter: {
						maxLogLines: 7,         // limit number of lines logged per test
						suppressErrorSummary: true,  // do not print error summary
						suppressFailed: false,  // do not print information about failed tests
						suppressPassed: false,  // do not print information about passed tests
						suppressSkipped: true,  // do not print information about skipped tests
						showSpecTiming: true // print the time elapsed for each spec
				}
	});
};
