describe('Testing the webdriver', function(){
	
  describe('Opening the google page', function(){
	  
    it('Should open google', function (done) {
    	driver.get('https://google.com/').then(function () {
    		driver.quit();
    		done();
    	});
    	this.timeout(10000);
    });
    
  });
  
});
