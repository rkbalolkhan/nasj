let madarsaDropDown = document.getElementById("madarsaDropDown");
let courseDropDown = document.getElementById("courseDropDown");
let dob=document.getElementById("dateOfBirth")

let addressCheckBox = document.getElementById("sameAddress");

dob.addEventListener("change",()=>{
    const [day, month, year] = dob.value.split("/").map(Number);
    const dateOfBirth = new Date(year, month - 1, day);
    let currentDate= new Date(Date.now());
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    if(age<18){
        document.getElementById("studentPhoneNumber").placeholder+=" (Optional)"
    }
})

addressCheckBox.addEventListener("change",()=>{
    if(addressCheckBox.checked){
        document.querySelector("input[name='address[permanent][line1]']").value=document.querySelector("input[name='address[present][line1]']").value;
        document.querySelector("input[name='address[permanent][line2]']").value=document.querySelector("input[name='address[present][line2]']").value;
        document.querySelector("input[name='address[permanent][line3]']").value =document.querySelector("input[name='address[present][line3]']").value;
        document.querySelector("input[name='address[permanent][country]']").value=document.querySelector("input[name='address[present][country]']").value;
        document.querySelector("input[name='address[permanent][state]']").value=document.querySelector("input[name='address[present][state]']").value;
        document.querySelector("input[name='address[permanent][city]']").value=document.querySelector("input[name='address[present][city]']").value;
    }
})