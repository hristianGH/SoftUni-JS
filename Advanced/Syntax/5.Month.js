function Solve(num)
{
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  var d = new Date();
  if(num<=0||num>12){
      console.log(`Error`);
  }
  else{
  console.log(monthNames[num-1]);
  }
}
 