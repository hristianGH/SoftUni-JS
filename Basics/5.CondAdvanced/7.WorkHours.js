function Work(hour,day)
{
    if(hour<=10&&hour>=19||day==`Sunday`)
    {
        console.log(`closed`)
    }
    else {console.log(`open`)}

}