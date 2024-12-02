// to run open terminal and write node app.js but before running write the commands below one by one 
// npm install node
// npm install v2
// npm install express
// npm install express cloudinary


const cloudinary = require('cloudinary').v2;
(async function() {
 // Configuration
 cloudinary.config({
 cloud_name: 'dmmnnkkdy',
 api_key: '497472385318138',
 api_secret: 'q9cl9cf7fBfByFcGuP0lN2V7_Dw' // Click 'View API Keys' above to copy your
 });

 // Upload an image
 const uploadResult = await cloudinary.uploader
 .upload(
 'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
 public_id: 'shoes',
 }
 )
 .catch((error) => {
 console.log(error);
 });

 console.log(uploadResult);

 // Optimize delivery by resizing and applying auto-format and auto-quality
 const optimizeUrl = cloudinary.url('shoes', {
 fetch_format: 'auto',
 quality: 'auto'
 });

 console.log(optimizeUrl);

 // Transform the image: auto-crop to square aspect_ratio
 const autoCropUrl = cloudinary.url('shoes', {
 crop: 'auto',
 gravity: 'auto',
 width: 500,
 height: 500,
 });

 console.log(autoCropUrl);
})();
