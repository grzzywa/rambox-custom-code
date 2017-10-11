var excludeFolder = 'SpamBox';
function checkUnread() {
    var unreadMail = 0;
    jQuery.each($('div[role*=treeitem] .ms-fwt-sb'), function(name, elem){
      var $element = jQuery(elem);
      var name = $element.parent().parent().children('.ms-fwt-sl').first().attr('title');
      var val = parseInt($element.text());
      if (val && name !== excludeFolder) {
          unreadMail+=val;
      }
    });
    updateBadge(unreadMail);
}
function updateBadge(e) {
    e >= 1 ? document.title = "(" + e + ") " + originalTitle : document.title = originalTitle
}
var originalTitle = document.title;
setInterval(checkUnread, 3000);
