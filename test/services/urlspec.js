define (['services/url'], function (url) {
	
	describe("Testing the Url service (service/url)", function() {
		
		it("Should generate trivial urls", function() {
			expect(url('index.html')).toBe('index.html');
			expect(url('https://google.com')).toBe('https://google.com');
			expect(url('http://google.com')).toBe('http://google.com');
		});
		
		it("Should generate parametrized urls", function() {
			expect(url('index.html', {q: 'abcd'})).toBe('index.html?q=abcd');
			expect(url('https://google.com', {q: '1234'})).toBe('https://google.com?q=1234');
			expect(url('https://google.com', {q: '12-34', woot: 'ok'})).toBe('https://google.com?q=12-34&woot=ok');
		});
		
		it("Should generate parametrized urls with reserved characters encoded", function() {
			expect(url('index.html', {q: '???'})).toBe('index.html?q=%3F%3F%3F');
			expect(url('https://google.com', {q: '  '})).toBe('https://google.com?q=%20%20');
			expect(url('https://google.com', {q: 'ąęś'})).toBe('https://google.com?q=%C4%85%C4%99%C5%9B');
		});
	});	
	
})
