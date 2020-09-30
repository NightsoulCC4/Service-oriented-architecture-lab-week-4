function convertCurrency() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var data = '{"ht":"'+height+'","wt":"'+weight+'"}';
    var xmlhttp = new XMLHttpRequest();
    var url = "http://117.121.211.193:8000/calculate-bmi.php";
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("input="+data);
    xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 {
     var result = xmlhttp.responseText;
     var jsResult = JSON.parse(result);
     //document.getElementById("show").innerHTML = ("Your BML is "+result);
     var Showbmi =`Your BMI is ${jsResult.bmi} You are ${jsResult.message}`;
     document.getElementById("show").innerHTML = Showbmi;
 }
    }
}