define([], function() {
	'use strict';

	var BackboneDriver = function (name, idAttribute, Model, Collection, controller) {
		
		
		var Driver = function (vent) {
			
			var pool = {};
			var marshal = function (model) {
				var id = model.get(idAttribute);
				
				if (pool [id]) {
					pool [id].set(model.attributes);
					return pool [id];
					
				} else {
					return (pool [id] = model);
				}				
			};
			
			this.create = function (entity, success, fail) {
			};
			
			this.getById = function (id, success, fail) {
				var attrs = {};	attrs [idAttribute] = id;
				new Model(attrs).fetch({
					
					success: function (model) {
						success(marshal(model));
					},
					
					error: function (bb, xhr, req) {
						if (xhr.status === 0) {
							vent.trigger('offline');
						}
						fail.apply(this, arguments);
					}
				});
			};

			this.update = function (entity, success, fail) {
				
			};
			
			this.destroy = function (entity, success, fail) {
				
			};
			
			this.query = function (query, success, fail) {
				new Collection([], query).fetch({
					
					success: function (collection) {
						var marshaled = [];
						for (var i = 0; i < collection.models.length; i++) {
							marshaled.push(marshal(collection.models [i]));
						}
						success(new Collection(marshaled, query));
					},
					
					error: function (bb, xhr, req) {
						if ((xhr.status === 0) || (xhr.status === 408)) {
							vent.trigger('offline');
						}
						fail.apply(this, arguments);
					}
				});
			};
			
			this.describe = function () {
				return { name: name };			
			};
			
			var disposeOne = function (id) {
				pool [id].clear();
				delete pool [id];
			};
			
			this.dispose = function (id) {
				if (id === '*') {
					Object.keys(pool).forEach(function (id) {
						disposeOne(id);
					});
					
				} else {
					disposeOne(id);
				}
			};
			
			this.fish = function (id) {
				return pool [id];
			};
			
			controller.call(this, vent);
		};
		

		return Driver;
	};
	
	return BackboneDriver;
});
