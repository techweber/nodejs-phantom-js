var phantom = require('phantom');

phantom.create().then(function(ph){
	ph.createPage().then(function(page){
		page.open('https://nodejs.org/en/').then(function(status){
			page.render('nodejsorg.pdf').then(function() {
				console.log('Page Rendered');
				ph.exit();
			});
		});
	});
});