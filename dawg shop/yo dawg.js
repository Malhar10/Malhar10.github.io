document.getElementById('go').onclick=function() {
var inputText = $('#inputText').val();
var dawgifiedText = inputText + ",dawg";
document.getElementById('output').innerHTML = dawgifiedText;
};