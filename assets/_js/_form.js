$(document).ready(function(){


	/*
	////////////////////////////////////////////////////
		SELECT
	////////////////////////////////////////////////////
	*/
		/*
		===================================================
			OPEN > OPTIONS LIST
		===================================================
		*/
			$(".form-select .form-control").on("click", function(){
				if($(this).parent().hasClass("form-select")){
					if(!$(this).parent().hasClass("active")){
						$(this).parent().addClass("active");
					}else{
						$(this).parent().removeClass("active");				
					}
				}
			});
		/*
		===================================================
			//OPEN > OPTIONS LIST
		===================================================
		*/

		/*
		===================================================
			SELECT > CLOSE OPTIONS LIST
		===================================================
		*/
			$(".form-select .form-options > li").on("click", function(){
				var parent = $(this).parent().parent();
				var children = parent.children();
				var input = 0;
				var label = 1;
				var selected = $(this).text();
				for (var i = 0; i < children.length; i++) {
					var list = children[i].classList;
					for(var a = 0; a < list.length; a++){
						if(list.value == "input-control"){
							input = i;
						}
						if(list.value == "form-control"){
							label = i;
						}
					}
				};
				children[input].value = selected;
				children[label].innerHTML = selected + "<i class='fa fa-caret-down'></i>";
				parent.removeClass("active");
			});
		/*
		===================================================
			//SELECT > CLOSE OPTIONS LIST
		===================================================
		*/
	/*
	////////////////////////////////////////////////////
		//SELECT
	////////////////////////////////////////////////////
	*/

});