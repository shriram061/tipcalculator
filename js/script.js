function cal1()
{
    let people = document.getElementById("people_no").value;
    let percent = document.getElementById("service_percent").value;
    let amount =document.getElementById("bill_amount").value;
    let temp= amount*percent/100;
    let amount2= temp/people;
    let amount1=Math.round(amount2 * 100) / 100
    document.getElementById('bill_amount1').innerHTML=amount1;
}
