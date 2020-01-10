// ?code by Silent_Coder AKA SilentxKnight
// !jQuery way
// var outPut= document.querySelector("#outputs");
var nameBtn=$('#nameg');
var jobBtn=$('#jobg');

//*checking everything is ready or not
$(function(){

//*button for random name
  nameBtn.on('click',function(){  
   var url="http://www.filltext.com/?callback=?";
   $.getJSON(url, {
      rows:1,
      fname: '{firstName}',
      
   
   }).done(afterLoad).fail(function(){
      alert("Something Went Wrong");});
  function afterLoad(data){
     //console.log(data);
    
      $.each(data,function(index,value){
      
         //console.log(value.fname);
         $("#outputs").html("<h4>"+"Random name is: "+value.fname+"</h4>");
      })
   }//afterLoad event ends

 });//click event ends

//* button for randome job name generator
  jobBtn.on('click',function(){

   var url="http://www.filltext.com/?callback=?";
   $.getJSON(url,{
      rows:1,
      company:'{business}'
   }).done(afterLoad).fail(function(){
      alert("Something Went Wrong");});
      function afterLoad(data){
         $.each(data,function(index,value){
            //console.log(value.company+"-jobName");
            $('#outputs2').html("<h4>"+"Random company name is: "+value.company+"</h4>")
         
         });
      };//afterLoad event ends


  });//click event ends











})




// *ends
