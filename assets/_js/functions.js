/*
#################################
	ANCHOR SCROLL
#################################
*/
	function linkScroll(option){
		switch(option.hash){
			case "#":
				$("html, body").animate({ scrollTop: 0 }, 1000); 
				break;
			default:
				$("html, body").animate({ scrollTop: $(option.hash).offset().top }, 1000);
				$("html, body").animate({ scrollTop: $(option.hash).offset().top }, 1000);
				break;
		}
	}
/*
#################################
	//ANCHOR SCROLL
#################################
*/