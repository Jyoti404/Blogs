const express=require('express');
const router=express.Router();
const Blog = require('../models/blog.model'); 
//get request
router.get('/get-all-blogs',async(req,res)=>{
    try{
        const blogs=await Blog.find({});
        // res.send(blogs);
        res.send({count:blogs.length, data:blogs});
    }
    catch(err){
        console.log(err);
        res.status(400).send({
            message:"something went wrong!"
        });
    }
});
//get single blog
router.get('/blog/:id',async (req,res)=>{
    try{
        const id=req.params.id;
        const response=await Blog.findById(id);
        console.log(response);
        res.send(response);

    }
    catch(err){
        console.log(err);
        res.status(400).send({
            message:"something went wrong!"
        });
    }
})
//updating a blog
router.put('/blog/:id', async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Blog.findByIdAndUpdate(id,data,{returnOriginal:false});
        console.log(response);
        res.send(response);

    }
    catch(err){
        console.log(err);
        res.status(400).send({
            message:"something went wrong!"
        });
    }
})
router.delete('/blog/:id', async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await Blog.findByIdAndDelete(id);
        console.log(response);
        res.send("success");

    }
    catch(err){
        console.log(err);
        res.status(400).send({
            message:"something went wrong!"
        });
    }
})



// POST request to create a blog
router.post('/create-blog', async (req, res) => {
    try {
        const data = req.body; // Get the data from the request body
        const blog = new Blog(data); // Create a new Blog instance
        const response = await blog.save(); // Save the blog instance
        console.log(response); // Log the saved response
        res.status(201).send("Blog created successfully"); 
    } catch (err) {
        console.error("Error details:", err); // Log the error details
        res.status(400).send({
            message: "something is wrong",
            error: err.message // Optionally, include the error message in the response
        });
    }
});

module.exports=router;