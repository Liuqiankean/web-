var str="";

function showData(a)
{
	str=str+a;
	document.getElementById("result").innerHTML=str;
};
function caculate()
{
	document.getElementById("result").innerHTML='';
	var resultNum=eval(str);
	document.getElementById("result").innerHTML=resultNum;
	str=String(resultNum);
};
function clearData()
{
	str="";
	document.getElementById("result").innerHTML=0;
}

/*function click() 
{
	var x=document.getElementsByTagName("button");
	for (var i = 0; i < x.length; i++)
	{
		switch(x[i].value)
		{
			case '=':
				x[i].onclick=caculate();
			case 'c':
				x[i].onclick=clearData();
			default:
				x[i].onclick=showData(button.value);
		}
	}
};*/
