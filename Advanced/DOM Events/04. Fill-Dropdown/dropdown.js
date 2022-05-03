function addItem() {
    const textInput= document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const button = document.getElementsByTagName('input')[2];
    button.addEventListener('click',(e)=>{
        let ele = document.createElement('option');
        ele.innerHTML=`${textInput.value} ${valueInput.value}`
        document.getElementById('menu').appendChild(ele);
        textInput.value=''
        valueInput.value=''
    })
}