user.filter('startFrom', function() {
    return function(input, start) {
        start = +start; 
        return input.slice(start);
	}
});

user.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) {
        	text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    }
});

