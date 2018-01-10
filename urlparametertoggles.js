/** url parameter toggles.js v1.0.0, author: lispum **/
document.addEventListener("DOMContentLoaded", function(){
	[].forEach.call(document.querySelectorAll("input[type=checkbox][data-urlparam]"), function(a){
		a.addEventListener("change", function(){
			let parameter = this.dataset.urlparam;
			if (this.checked) {
				let d = "?";
				if(window.location.href.indexOf("?") > -1) d = "&";
				window.location.href = window.location.href+d+parameter+"=✓";
			} else {
			    let urlparts= window.location.href.split('?');   
			    if (urlparts.length>=2) {
			        let prefix= encodeURIComponent(parameter)+'=';
			        let pars= urlparts[1].split(/[&;]/g);
			        for (let i= pars.length; i-- > 0;) {  
			            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
			                pars.splice(i, 1);
			            }
			        }
			        window.location.href = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
			    }
			}
		});
		if(location.search.indexOf(a.dataset.urlparam+"=") > -1) {
			a.checked = true;
		}
	});
});