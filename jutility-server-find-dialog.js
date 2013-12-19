/// <reference path="_references.js" />

(function ($) {
    $.fn.serverDialog = function (parameters) {
        var options = {
            getCheckedItems: function ($dialog) { return null; },
            getItemValue: function ($item) { return $item.val(); },
            getItemName: function ($item) { return $item.data('name'); },
            templatePrefix: '',
            templateField: '',
            saveButtonSelector: '.save',
            selectedItemsContainer: ''
        };
        $.extend(options, parameters);
        var selectedItemTemplate = '<span class="outer {2}"><input type="hidden" name="{3}" value="{0}"/><span>{1}<i class="icon-remove" onclick="$(\'.{2}\').remove();" ></i></span></span>';

        var dialogWidget = this;
        var $dialog = $(this);
        var contentSelector = $dialog.selector + 'Content';

        var saveButtonSelectorAbsolute = $dialog.selector + ' ' + options.saveButtonSelector;
        $(document).on("click", saveButtonSelectorAbsolute, function () {
            var items = options.getCheckedItems($dialog);
            var itemsList = '';
            for (var index = 0; index < items.length; index++) {
                var $item = $(items[index]);
                var value = options.getItemValue($item);
                var text = options.getItemName($item);
                var itemId = options.templatePrefix + "Span" + value;
                itemsList += selectedItemTemplate.format(value, text, itemId, options.templateField);
            }
            var $itemsListHtml = $.parseHTML(itemsList);
            $(options.selectedItemsContainer).children().remove().end().append($itemsListHtml);
            $dialog.modal('hide');
            $(contentSelector).children().remove();
        });
    };
})(jQuery);