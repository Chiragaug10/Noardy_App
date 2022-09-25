const express=require('express');
const app=express();
app.get('/User',(req,resp)=>
{
    resp.sendFile(__dirname+'/Userdata.html');
    app.set('userdata',req.query);
    if(req.query.uname!=null)
    {
        resp.redirect('/Revenue');
    }
})
app.get('/Revenue',(req,resp)=>
{
    resp.sendFile(__dirname+'/Revenue.html');
    app.set('revenue',req.query);
    if(req.query.uamount!=null)
    {
        resp.redirect('/Result');
    }
})
app.get('/Result',(req,resp)=>
{
    const overall=app.get('userdata');
    const overall2=app.get('revenue');
    console.log(JSON.stringify(overall)+JSON.stringify(overall2));
})
app.listen(4500);