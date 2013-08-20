(function ($) {
    $.fn.serverFindDialog = function (parameters) {
        var options = {
            urlDataRequestAction: '',
            buttonRemoveCaption: '',
            buttonAcceptCaption: '',
            buttonCancelCaption: '',
            // override standard element style
            styles: {

            },
            selectedItemTemplate: '<span class="item" title="{{title}}"><button class="btn btn-mini btn-info" type="button" name="{{form-field}}" ><span class="item-text">{{title}}</span><i class="icon-remove" title="{{button-remove-caption}}"/></button></span>'
        };
        $.extend(options, parameters);
    };

})(jQuery);
