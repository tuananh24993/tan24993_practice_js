define(['requirejs'], function(ko, first, last) {
    class Ko {
        constructor() {
            this.init();
        }

        init() {
            // Here's my data model
			var ViewModel = function(first, last) {
			    this.firstName = ko.observable(first);
			    this.lastName = ko.observable(last);
			 
			    this.fullName = ko.pureComputed(function() {
			        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
			        return this.firstName() + " " + this.lastName();
			    }, this);
			};
			 
			ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
		}
    }

    return new Ko();
});
 