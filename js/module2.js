define(
'module2',
['jquery'],
function(module2){
	
function View(model) {
    var self = this;

    function init() {
        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };
        self.renderList(model.data);
    };
    self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), { data: data });
        self.elements.listContainer.html(list);
    }

    init();
}

	return {
	  nextMethod: function () {
		console.log('Hello module2!');
	  }	
	};
}
);

