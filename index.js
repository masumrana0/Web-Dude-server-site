const express=require('express')
const app =express();
const port=5000;
const cors=require('cors');
const courses=require('./data/courses.json');
const swiperCard=require('./data/SwiperCard.json');
 

app.use(cors())
app.get("/coursecarriculum",(req,res)=>{
    res.download('./data/masum.pdf');
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})


app.get('/courses/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const course=courses.find(course=>course.id===id);
    res.send(course);
})

app.get('/swipercard',(req,res)=>{
    res.send(swiperCard)
})


app.get('/',(req,res)=>{
    res.send('The server is running')
})

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})