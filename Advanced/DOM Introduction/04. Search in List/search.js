function search() {
   let listItems = document.querySelectorAll(`#towns>li`);
   let input = document.querySelector(`input`).value;
   let output = document.getElementById(`result`);
    let count = 0; 
    
        listItems.forEach(town => {
           if (town.textContent.toLowerCase().includes(input.toLowerCase())) {
              town.style.fontWeight=`bold`;
              count++;
           }
           else{
              town.style.fontWeight='';
           }
        });
    output.textContent=`${sum} matches found`;
}
