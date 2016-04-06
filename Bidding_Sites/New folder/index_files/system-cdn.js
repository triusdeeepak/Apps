/**
 * Adds CDN support to the SystemJS loader by overriding the System.fetch
 * hook. By design, all the modules must be downloaded from our CDN, i.e.
 * external URLs (although supported by SystemJS) are not allowed for
 * performance reasons.
 */
(function() {
  'use strict';

  // CDN hostnames are read from the `flns` global var.
  // Let's make them actual URLs first.
  var CDN_URLS = window.flns.config.cdn_urls.map(function(url) {
    return 'https://' + url;
  });

  // Very basic checksum implementation.
  // We don't care about colisions here, just speed & code size.
  function checksum(str) {
    var result = 0, i, len;
    for (i = 0, len = str.length; i< len; i++) {
          result += str.charCodeAt(i);
    }
    return Math.abs(result);
  }

  // Override the System.fetch hook to download all the modules from the CDN
  var systemFetch = window.System.fetch;
  window.System.fetch = function(load) {
    var path = load.address.split(window.System.baseURL)[1];
    load.address = CDN_URLS[checksum(path) % CDN_URLS.length] + '/' + path;
    return systemFetch.call(this, load);
  };

})();
