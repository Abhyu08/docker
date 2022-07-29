var express = require('express'); // import express
var app = express(); // create global express object

// for default URL
// PAGE-1
app.get("/",(req,res)=>{
    
    res.send(
        "<h1>ABHIJEET TAKE</h1>"
        +"<hr>"
        +"<h4>My Details</h4>"
        +"<ol>"
        +"<li>Name: Abhijeet Take</li>"
        +"<li>Age: 24</li>"
        +"<li>College: IACSD</li>"
        +"<li>RollNo: 223213</li>"
        +"<li>Hobbies: dancing,playing games</li>"
        +"<li>Project: Tripify</li>"
        +"</ol>"
    );
});

// PAGE-2 (project page)
app.get("/project",(req,res)=>{
    
    res.send(
        "<h1>Tripify</h1>"
        +"<hr>"
        +"<h4>Description:</h4>"
        +"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ducimus harum voluptatum. Nam debitis eius eveniet laborum? Molestias quam, cum non suscipit illo similique incidunt ipsa esse dolor sapiente blanditiis.</p>"
        +"<h4>Technologies Used:</h4>"
        +"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ducimus harum voluptatum. Nam debitis eius eveniet laborum? Molestias quam, cum non suscipit illo similique incidunt ipsa esse dolor sapiente blanditiis.</p>"
        +"<h4>Detailed Information:</h4>"
        +"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ducimus harum voluptatum. Nam debitis eius eveniet laborum? Molestias quam, cum non suscipit illo similique incidunt ipsa esse dolor sapiente blanditiis.</p>"
        +"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusantium dolorum distinctio repudiandae, voluptates non ratione placeat facilis sunt aperiam perspiciatis modi? Magni maxime recusandae culpa minima impedit consectetur! Omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae dolor quas neque, illum nemo incidunt, culpa aspernatur accusantium eaque quo voluptatum nostrum, voluptates dignissimos soluta iure ducimus voluptatem ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, quia. Perferendis soluta asperiores eligendi illo quod, quisquam debitis officiis praesentium quibusdam? Reiciendis corrupti numquam doloremque optio sit iure tempore soluta?</p>"
    );
});

var server = app.listen(9000); //on port:9000
console.log("running on PORT:9000");