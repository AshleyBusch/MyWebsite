<!DOCTYPE>
<html>
<body>

<p>If you want to see more pictures of the Licking Heights Marching Band, click on the
  link below. You can see pictures of the band from 2013 to now, and there will be 
  plenty more to come!</p>
  
  <button onclick="myFunction()">Click Here</button>
  
  <p id="demo"></p>
  
  <script>
  function myFunction() {
      var str = "LH Marching Band photos";
      var result = str.link ("https://www.kennytphoto.com/Licking-Heights-High-School/Band");
      document.getElementById ("demo").innerHTML = result;
  }
  </script>
  
  </body>
  </html>
