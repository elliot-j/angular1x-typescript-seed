module.exports =  {
	src:{
		ts:[
			'src/main.ts',
			'src/**/*.ts'
		],
		css:'src/**/*.css',
		html:'src/**/*.html',
		specs:'test/**/*.ts',
		thirdPartyJS:[
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/angular/angular.js',
			'node_modules/underscore/underscore-min.js'
		]
	},
	dist:{
		main:'dist/',
		test:'test/'		
	},
	outFiles:{
		css:'app.css',
		js:'app.js',
		thirdPartyJS:'assets.min.js'
	},
	clean:[
		'dist/**/*.js',
		'dist/**/*.html', 
		'dist/**/*.css',
		'test/**/*.spec.js'
	]
};