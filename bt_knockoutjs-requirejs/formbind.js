define(['lib/knockout-2.2.0.debug'], function (ko) {
	return function AppViewModel() {
		window.dataModel = this;
	    	this.firstName = ko.observable("hoa");
	    	this.lastName = ko.observable("hong");
		this.fullName = ko.computed(function() {
	    		return this.firstName() + " " + this.lastName();    
		}, this);
	}
});

