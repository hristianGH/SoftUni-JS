function Solve(week,age){
    if(age<0)
    {
        console.log("Error")
    }
else if(week=="Weekday")
{
    
    if(age<=18)
    {
        console.log("12$")
    }
    else if(age<=64)
    {
        console.log("18$")
    }
    else if(age<=122)
    {
        console.log("12$")
    }
}
else if(week=="Weekend")
{
    
    if(age<=18)
    {
        console.log("12$")
    }
    else if(age<=64)
    {
        console.log("20$")
    }
    else if(age<=122)
    {
        console.log("15$")
    }
}else if(week=="Holiday")
{
    
    if(age<=18)
    {
        console.log("5$")
    }
    else if(age<=64)
    {
        console.log("12$")
    }
    else if(age<=122)
    {
        console.log("10$")
    }
}
}


//Day / Age	0 <= age <= 18	18 < age <= 64	64 < age <= 122
//Weekday	12$	18$	12$
//Weekend	15$	20$	15$
//Holiday	5$	12$	10$
