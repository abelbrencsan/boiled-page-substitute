/**
 * Substitute - v1.0
 * Copyright 2020 Abel Brencsan
 * Released under the MIT License
 */

var substitute = function(template, map, formatters){
	return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(match, key, format) {
		var value = map[key] || ("undefined" === typeof map[key] ? match : map[key]);
		if (format && formatters && typeof formatters[format] === 'function') {
			value = formatters[format](value, key);
		}
		return value.toString();
	});
}