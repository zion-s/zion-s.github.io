var subscribe=document.querySelector(".subscribe");
var popup=document.querySelector(".bg-modal");
var close=document.querySelector(".close");


subscribe.addEventListener("click", function(){
	popup.style.display="flex";
});


close.addEventListener("click", function(){
	popup.style.display="none";
});

window.addEventListener("click", function(e){
	if(e.target==popup){
		popup.style.display="none";

	}
})
