var one=document.getElementById('picScroll');     

var two=document.getElementById('picScroll1');        
function changeToLeft(){
	if(one.scrollLeft-two.offsetWidth>0)           
		one.scrollLeft=0;                                 
	else                                                                
		one.scrollLeft+=1;                                 
}
function roll(){
	t=setInterval("changeToLeft();",10);
}
function stop(){
	clearInterval(t);
}