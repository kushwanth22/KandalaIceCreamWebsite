$=jQuery;

//jQuery dom ready event
jQuery(document).ready(function () {

//icecream toggle option
jQuery(".icecream").click(function(e){
	if(jQuery('.icecream input[type=checkbox]').prop('checked')) {
		jQuery(".icecream-options").css("display","none");
		jQuery(".icecream input[type=checkbox]").prop("checked", false);
	} else {
		jQuery(".icecream-options").css("display","block");
		jQuery(".icecream input[type=checkbox]").prop("checked", true);
	}
	e.preventDefault();
});

//milkshake toggle option
jQuery(".milkshake").click(function(e){
	
	if(jQuery('.milkshake input[type=checkbox]').prop('checked')) {
		jQuery(".milkshake-options").css("display","none");
		jQuery(".milkshake input[type=checkbox]").prop("checked", false);
	} else {
		jQuery(".milkshake-options").css("display","block");
		jQuery(".milkshake input[type=checkbox]").prop("checked", true);
	}
	e.preventDefault();
});


////float toggle option
jQuery(".float").click(function(e){
	if(jQuery('.float input[type=checkbox]').prop('checked')) {
		jQuery(".float-options").css("display","none");
		jQuery(".float input[type=checkbox]").prop("checked", false);
	} else {
		jQuery(".float-options").css("display","block");
		jQuery(".float input[type=checkbox]").prop("checked", true);
	}
	e.preventDefault();
});


});

//function to check validations
function calc(){

	//check if any one item is selected
	if(	!jQuery('.icecream input[type=checkbox]').prop('checked') && 
		!jQuery('.milkshake input[type=checkbox]').prop('checked') && 
		!jQuery('.float input[type=checkbox]').prop('checked')) {
			
		alert("Please select either Icecream, Milkshake or Float");
		
	} 
	else {
		var cnt;
		cnt=0;
		chk=0;
		//icecream selection
		if(jQuery('.icecream input[type=checkbox]').prop('checked') ) {
				//check if all options are filled
				if(jQuery('.icecream-options .serving-vessel').find(":selected").text() &&
				jQuery('.icecream-options input[type=radio]:checked').val() &&
				jQuery('.icecream-options .flavors').find(":selected").text()) {
				if(jQuery('.icecream-options .serving-vessel').val() == "waffle-cone"){
					cnt+=5;
					jQuery(".icecream-pricing p.serving").text("Waffle Cone - $5");
					jQuery("input[name=serving1]").val(jQuery('.icecream-options .serving-vessel').val());
				} else if(jQuery('.icecream-options .serving-vessel').val() == "waffle-cup") {
					cnt+=7;
					jQuery(".icecream-pricing p.serving").text("Waffle Cup - $7");
					jQuery("input[name=serving1]").val(jQuery('.icecream-options .serving-vessel').val());
				} else {
					alert("Please choose the serving vessel for icecream");
				}
				
				if(jQuery('.icecream-options input[type=radio]').val() == 1){
					cnt+=3;
					jQuery(".icecream-pricing p.scoops").text("One Scoop - $3");
					jQuery("input[name=scoops1]").val(jQuery('.icecream-options input[type=radio]:checked').val());
				} else if(jQuery('.icecream-options input[type=radio]').val() == 2){
					cnt+=5;
					jQuery(".icecream-pricing p.scoops").text("Two Scoop - $5");
					jQuery("input[name=scoops1]").val(jQuery('.icecream-options input[type=radio]:checked').val());
				} else {
					alert("Please choose no of icecream scoops ");
				}
				
				if(jQuery('.icecream-options .flavors option:selected').length>0) {
					if($("[name=scoops]:checked").val()=="1" && jQuery('.icecream-options .flavors option:selected').length==1){
						cnt+=10;
						jQuery(".icecream-pricing p.flavor").text(jQuery('.icecream-options .flavors').val());
						jQuery("input[name=flavor1]").val(jQuery('.icecream-options .flavors').val());
					}else if($("[name=scoops]:checked").val()=="2" && jQuery('.icecream-options .flavors option:selected').length==2){
						cnt+=10;
						jQuery(".icecream-pricing p.flavor").text(jQuery('.icecream-options .flavors').val());
						jQuery("input[name=flavor1]").val(jQuery('.icecream-options .flavors').val().join(", "));
					}else{
						alert("Please choose "+$("[name=scoops]:checked").val()+" flavors");
					}
					
				} else {
					alert("Please choose the icecream flavor");
				}
				chk++;
				jQuery("#all_selected").val("1");
			} else {
				alert("Please select all options for icecream");
				jQuery("#all_selected").val("0");
			}
			
		}
		//milkshake selection
		if(jQuery('.milkshake input[type=checkbox]').prop('checked')) {
			//check if all options are filled
			if(jQuery('.milkshake-options input[type=radio]:checked').val() &&
				jQuery('.milkshake-options .flavors').find(":selected").text()) {
					
					if(jQuery('.milkshake-options input[type=radio]:checked').val() == "1"){
						cnt+=2;
						jQuery(".milkshake-pricing p.item").text("Skim - $2");
						jQuery("input[name=item2]").val("Skim");
					} else if(jQuery('.milkshake-options input[type=radio]:checked').val() == "2"){
						cnt+=3;
						jQuery(".milkshake-pricing p.item").text("Whole - $3");
						jQuery("input[name=item2]").val("Whole");
					} else if(jQuery('.milkshake-options input[type=radio]:checked').val() == "3"){
						cnt+=5;
						jQuery(".milkshake-pricing p.item").text("2% Milk - $5");
						jQuery("input[name=item2]").val("2% Milk");
					}  else {
						alert("Please select the type of milkshake");
					}

					if(jQuery('.milkshake-options .flavors').val() == "chocolate" || 
					jQuery('.milkshake-options .flavors').val() == "Strawberry" ||
					jQuery('.milkshake-options .flavors').val() == "vanilla" ||
					jQuery('.milkshake-options .flavors').val() == "orange" ||
					jQuery('.milkshake-options .flavors').val() == "banana") {
						
						cnt+=8;
						jQuery(".milkshake-pricing p.flavor").text(jQuery('.milkshake-options .flavors').val());
						jQuery("input[name=flavor2]").val(jQuery('.milkshake-options .flavors').val());
					} else {
						alert("Please select a milkshake flavor");
					}
					chk++;
					jQuery("#all_selected").val("1");
			} else {
				alert("Please select all options for milkshake");
				jQuery("#all_selected").val("0");
			}
		}
		//float selection
		if(jQuery('.float input[type=checkbox]').prop('checked')) {
			//check if all options are filled
			if(jQuery('.float-options input[type=number]').val() &&
				jQuery('.float-options .flavors').find(":selected").text() &&
				jQuery('.float-options .soda').find(":selected").text()) {
					
					if(jQuery('.float-options input[type=number]').val()){
						cnt+=jQuery('.float-options input[type=number]').val()*2;
						jQuery(".float-pricing p.scoops").text(jQuery('.float-options input[type=number]').val() +" Scoops - $"+jQuery('.float-options input[type=number]').val()*2);
						jQuery("input[name=scoops3]").val(jQuery('.float-options input[type=number]').val());
					} else {
						alert("Please select the no of scoops for float");
					}

					if(jQuery('.float-options .flavors option:selected').length>0) {
						var num=jQuery('.float-options input[type=number]').val()*1;
						if(jQuery('.float-options .flavors option:selected').length==num) {
							cnt+=7;
							jQuery(".float-pricing p.flavor").text(jQuery('.float-options .flavors').val());
							jQuery("input[name=flavor3]").val(jQuery('.float-options .flavors').val().join(", "));
						}else{
							alert("Please select "+num+" float flavors");
							return false;
						}						
					} else {
						alert("Please select a flavor for float");
						return false;
					}
					
					if(jQuery('.float-options .soda').val() == "fanta" || 
							jQuery('.float-options .soda').val() == "coaca-cola" ||
							jQuery('.float-options .soda').val() == "sprite") {
								
								cnt+=7;
								jQuery(".float-pricing p.soda").text(jQuery('.float-options .soda').val());
								jQuery("input[name=soda3]").val(jQuery('.float-options .soda').val());
								
							} else {
								alert("Please select a soda for float");
							}
					
					chk++;
					jQuery("#all_selected").val("1");
			} else {
				alert("Please select all options for float");
				jQuery("#all_selected").val("0");
			}
		}
		//Total Calculation
		if(chk > 0 && jQuery("#all_selected").val() == 1) {
			var discount = cnt/10;
			jQuery("p.total_before").text("Actual Total - $" + cnt);
			jQuery("input[name=total_before]").val(cnt);
			jQuery('p.discount').text("Discount(10%) - $" + discount);
			jQuery("input[name=discount]").val(discount);
			jQuery("p.total").text("Discounted Total - $" + (cnt-discount));
			jQuery("input[name=total_amt]").val(cnt-discount);
			jQuery(".checkout button").css("display","block");
		}
		
		
	}
	
}
