function RunSomeD3() {

	//Example 1
	apply_border_to_all_divs();

	//Example 2
	//hide_all_notRealAnimals();

	//Example 3
	change_background_of_ID();

	//Example 4
	change_background_of_first_image_in_each_div();

	//Example 5
	//make_all_2nd_svgs_in_a_div_have_smaller_width();

	//Example 6
/*
	add_attribute_to_all_non_animals();
	identify_elements_with_custom_attributes();
*/

	//Example 7
	//identify_every_other_svg();

}


function apply_border_to_all_divs(){
	d3.selectAll("div")
		.style("border", " 2px solid");
}

function hide_all_notRealAnimals(){
	d3.selectAll(".notRealAnimal")
		.attr("display", "none");
}

function change_background_of_ID(){
	d3.select("#img4")
		.style("background-color","blue");
}

function change_background_of_first_image_in_each_div(){
	d3.selectAll("div")
		.select("svg")
		.style("background-color", "purple");
}

function make_all_2nd_svgs_in_a_div_have_smaller_width(){
	var secondSVGs = d3.// LEFT OFF HERE
}

function add_attribute_to_all_non_animals(){

}

function identify_elements_with_custom_attributes(){

}

function identify_every_other_svg(){

}
