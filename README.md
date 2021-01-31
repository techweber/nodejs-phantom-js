# nodejs-phantom-js
Create PDF from URL / Website

A) Install http://phantomjs.org/ and then

You can follow this tutorial to install phantomjs on ubuntu::

https://www.vultr.com/docs/how-to-install-phantomjs-on-ubuntu-16-04

B) install the phantom node module :

# npm install phatom

Here is an example of rendering a pdf

var phantom = require('phantom');   

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        page.open("http://www.google.com").then(function(status) {
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});
