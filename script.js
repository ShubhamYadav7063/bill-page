console.log("hey");

document.getElementById("button").addEventListener('click', function(){
    console.log("wuv");
    let first= document.getElementsByClassName("orders")[0];
    // let main1= document.getElementsByClassName("billsection")[0];
    const text1= document.createTextNode("Your Order:  ");
    const heading1= document.createElement("span");
    let item= document.getElementById("item").value;
    const child1= document.createElement("span");
    heading1.classList.add("col-25");
    child1.classList.add("col-75");
    heading1.appendChild(text1);
    first.appendChild(heading1);
    child1.innerText = item;
    first.appendChild(child1);
    // console.log(heading);
    // console.log(child1);
    let second= document.getElementsByClassName("number")[0];
    const heading2= document.createElement("span");
    const text2= document.createTextNode("Quantity:  ");
    let count= document.getElementById("quantity").value;
    const child2= document.createElement("span");
    child2.classList.add("col-75");
    heading2.classList.add("col-25");
    heading2.appendChild(text2);
    second.appendChild(heading2);
    child2.innerHTML=count;
    second.appendChild(child2);
    console.log(child2);
    //let third= document.getElementsByClassName("final")[0];
    //let butt= document.createElement("button");
    //var buttval= "Pay";
    // // butt.setAttribute('id','button');
    // // butt.innerText= buttval;
    // // third.appendChild(butt); 
    let third= document.getElementById("button2");
    third.classList.remove("hidden");
    let fourth= document.getElementById("one");
    fourth.classList.remove("one1");

} )  

















































// const button = document.getElementById("button");
// const personName = document.getElementById("name");
// let quant = document.getElementById("quantity")
// const comment = document.getElementById("comment")
// let selections = document.getElementById('item');
// let output = document.getElementById('billsection')
// function clickButton(e) {
//     e.preventDefault()
//     add()
// };
// function add() {
    // let result = document.getElementById('bill')
    // let str = ''
    // // creating the text element
    // //
    // console.log(selections.options[selections.selectedIndex].text);
    // str += personName.value + "\n"
    // str += selections.value +" \n"
    // // console.log(quant.value)
    // str += quant.value + " \n"
    // str += comment.value
    // result.textContent = str
//}