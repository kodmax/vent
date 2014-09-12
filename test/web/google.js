var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

describe('Testing the webdriver', function(){
	
  describe('Opening the google page', function(){
    it('Should open google', function (done) {
    	driver.get('https://google.com/').then(done);
    	this.timeout(10000);
    });
  });
});
