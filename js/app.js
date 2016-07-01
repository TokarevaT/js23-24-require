requirejs.config({
	paths:{
		'jquery':'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1'
	},
	shin:{
		'jquery':{
			exports: 'jQuery'
		}
	}
});

require(
     [
	'jquery',
	'tmpl',
     'module1',
     'module2',
     'module3',
	 'main'
     ],
  function( $, tmpl, module1, module2, module3, main){

    console.log('$',$);
	
	console.log('tmpl',tmpl);
	
    console.log('module1', module1);
    module1.sayHello();
	
	console.log('module2',module2);
	module2.nextMethod();
	 
	console.log('module3',module3);
	module3.showHelp();
	
	
	console.log('main',main);
	main.ShowResult();
   }
);