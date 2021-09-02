menu_list_array=["Supreme Pizza",
"Lovers Pizza",
"Marinars Pizza",
"Thin Crust Pizza",
"Mozza Glazed Pizza"]
function show_pizza(){
    document.getElementById("show").innerHTML= menu_list_array;
 console.log(pizza);   
}
function add_the_sugetion(){
    var name_4= document.getElementById("sugestion").value;
    menu_list_array.push(name_4);
}
function show_every_pizza(){
    document.getElementById("all").innerHTML= menu_list_array;
    console.log(pizza);
    var item= document.getElementById("all").value;
    menu_list_array.sort();
}