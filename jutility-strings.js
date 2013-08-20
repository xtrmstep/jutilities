// See details http://stackoverflow.com/questions/1199352/smart-way-to-shorten-long-strings-with-javascript
String.prototype.trunc =
    function (n, useWordBoundary) {
        var toLong = this.length > n,
            s_ = toLong ? this.substr(0, n - 1) : this;
        s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
        return toLong ? s_ + '&hellip;' : s_;
    };

// flag that this is a string
String.prototype.isString = true;

// string format function
// usage: "text {0}-{1}".format("blah1", "blah2") => "text blah1-blah2"
String.prototype.format = function () {
    var formatted = this;
    if (formatted.isString) {
        for (var i = 0; i < arguments.length; i++) {
            var regexp = new RegExp('\\{' + i + '\\}', 'gi');
            formatted = formatted.replace(regexp, arguments[i]);
        }
    }
    return formatted;
};

// add or update URL query parameter with respect to number of parameters and its position
// usage: 'http://www.website.com/'.urlQueryParameter('id', 2) => http://www.website.com/?id=2
//        'http://www.website.com/?type=1'.urlQueryParameter('id', 2) => http://www.website.com/?type=1&id=2
String.prototype.urlQueryParameter = function (key, value) {
    var uri = this;
    if (uri.isString) {
        var regEx = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(regEx))
            uri = uri.replace(regEx, '$1' + key + "=" + value + '$2');
        else
            uri = uri + separator + key + "=" + value;
    }
    return uri;
};