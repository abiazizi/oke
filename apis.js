(function(){
	let params = (function(){var vars={};var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(m,key,value){vars[key]=value;});return vars;})();
	let fafifu = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
	if(params.id) {
		if(fafifu) location.replace('https://'+params.lang+'.aliexpress.com/item/'+params.id+'.html');
		else location.href = 'https://s.click.aliexpress.com/deep_link.htm?aff_short_key=_DlByiaf&dp=newosor.my.id&dl_target_url=https://m.'+params.lang+'.aliexpress.com/item3/'+params.id+'.html';
	}
	if(params.gotcha) { document.addEventListener('DOMContentLoaded', function(){ document.title = 'Gotcha'; }); }
})();
</script>
