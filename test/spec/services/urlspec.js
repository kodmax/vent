define (['services/url'], function (url) {
	
	
	describe("Testing the Url service (service/url)", function() {
		
		it("Should generate trivial urls", function() {
			assert.equal(url('index.html'), 'index.html');
			assert.equal(url('https://google.com'), 'https://google.com');
			assert.equal(url('http://google.com'), 'http://google.com');
		});
		
		it("Should generate parametrized urls", function() {
			assert.equal(url('index.html', {q: 'abcd'}), 'index.html?q=abcd');
			assert.equal(url('https://google.com', {q: '1234'}), 'https://google.com?q=1234');
			assert.equal(url('https://google.com', {q: '12-34', woot: 'ok'}), 'https://google.com?q=12-34&woot=ok');
		});
		
		it("Should generate parametrized urls with reserved characters encoded", function(done) {
			assert.equal(url('index.html', {q: '???'}), 'index.html?q=%3F%3F%3F');
			assert.equal(url('https://google.com', {q: '  '}), 'https://google.com?q=%20%20');
			assert.equal(url('https://google.com', {q: 'ąęś'}), 'https://google.com?q=%C4%85%C4%99%C5%9B');
			done();
		});
	});	
	
})
