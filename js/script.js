function cal1()
{
    let people = document.getElementById("people_no").value;
    let percent = document.getElementById("service_percent").value;
    let amount =document.getElementById("bill_amount").value;
    let temp= amount*percent/100;
    let amount1= temp/people;
    document.getElementById('bill_amount1').innerHTML=amount1;
}