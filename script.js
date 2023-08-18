var displayValue ="";
function adicionar(value){
    displayValue += value;
    document.getElementById("tela").value = displayValue;
}
function limpar(){
    displayValue="";
    document.getElementById("tela").value= displayValue;
}
function calcular(){
    try{
        const result= eval(displayValue);
        document.getElementById('tela').value=result;
        displayValue = result.toString();
    }catch (error){
        document.getElementById('tela').value="Error";
    }
}