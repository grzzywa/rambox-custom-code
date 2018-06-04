function checkUnread(){
    var e=0;
    var items = $("div[role*=treeitem] .ms-fwt-sb");
    if (items.length === 0) {
        return updateBadge(1337);
    }
    jQuery.each(items, function(t,i){
        var a=parseInt(jQuery(i).text());a&&(e+=a)
    });
    updateBadge(e);
}
function updateBadge(e){
    document.title=e>=1?"("+e+") "+originalTitle:originalTitle
}
var originalTitle=document.title;
setInterval(checkUnread,3000);
