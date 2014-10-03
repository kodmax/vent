define(['vent'], function(EventBus) {
	'use strict';

	describe('event-bus test', function () {
		it('should instantinate', function () {
			new EventBus();
		});
		
		it('should pass an event synchroniusly', function () {
			var vent = new EventBus();
			var ok;
			
			vent.on('ok', function () { ok = true; });
			vent.trigger('ok');
			assert.equal(ok, true);
		});
		
		it('should pass an event asynchroniusly', function (done) {
			var vent = new EventBus();
			var end = false;
			
			vent.on('ok', function () { 
				assert.equal(end, true);
				done(); 
			});
			
			vent.notify('ok');
			end = true;
		});
	})
});