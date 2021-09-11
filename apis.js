function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if( get_param("prod") != "0" ){
	var mykey 	= 'kontoool';
	window.location.href = 'https://s.click.aliexpress.com/deep_link.htm?aff_short_key='+mykey+'&dl_target_url=https://aliexpress.com/item/'+get_param("prod")+'.html';
}
