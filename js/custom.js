  function resetForm(){
    document.getElementById("row1").style.backgroundImage = "";
    document.getElementById("selectBox").selectedIndex = 0;
   var c = document.getElementById("test_form").childElementCount;
   var svgr = document.getElementById("showtext").childElementCount;
    appendremove(c);
    appendremovesvg(svgr);

    }

   function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
   
      if(selectedValue == 1){

      var ntypebox = document.getElementById("type");
      var ntype = ntypebox.options[ntypebox.selectedIndex].value;
        // for one beads necklace of different types start
              if(ntype == 1){
                
    document.getElementById("row1").style.backgroundImage = "url('B/b1.jpg')";
    operation(selectedValue);

              }else if(ntype == 2){
    document.getElementById("row1").style.backgroundImage = "url('LCSB/LCSB1.jpg')";
    operation(selectedValue);


              }else if(ntype == 3){
              
    document.getElementById("row1").style.backgroundImage = "url('HCSB/HCSB1.jpg')";
    operation(selectedValue);

              }else if(ntype == 4){
            
    document.getElementById("row1").style.backgroundImage = "url('LGSB/LGSB1.jpg')";
    operation(selectedValue);

              }else if(ntype == 5){
    document.getElementById("row1").style.backgroundImage = "url('HMCS/HMCSB1.jpg')";
    operation(selectedValue);
              }else if(ntype == 6){
    document.getElementById("row1").style.backgroundImage = "url('LMCS/LMCS1.jpg')";
    operation(selectedValue);
              }else{
          
    document.getElementById("row1").style.backgroundImage = "url('MCSB/MCSB1.jpg')";
    operation(selectedValue);

              }



          // for one beads necklace of different types ends
    }else if(selectedValue == 2){

           var ntypebox = document.getElementById("type");
      var ntype = ntypebox.options[ntypebox.selectedIndex].value;
        // for one beads necklace of different types start
              if(ntype == 1){
              
      document.getElementById("row1").style.backgroundImage = "url('B/b2.jpg')";
      operation(selectedValue);
              }else if(ntype == 2){
    document.getElementById("row1").style.backgroundImage = "url('LCSB/LCSB2.jpg')";
    operation(selectedValue);
              }else if(ntype == 3){
    document.getElementById("row1").style.backgroundImage = "url('HCSB/HCSB2.jpg')";
    operation(selectedValue);
              }else if(ntype == 4){
    document.getElementById("row1").style.backgroundImage = "url('LGSB/LGSB2.jpg')";
    operation(selectedValue);          
              }else if(ntype == 5){
    document.getElementById("row1").style.backgroundImage = "url('HMCS/HMCSB2.jpg')";
    operation(selectedValue);          
              }else if(ntype == 6){
    document.getElementById("row1").style.backgroundImage = "url('LMCS/LMCS2.jpg')";
    operation(selectedValue);          
              }else{
    document.getElementById("row1").style.backgroundImage = "url('MCSB/MCSB2.jpg')";
    operation(selectedValue);          
              }

    }else if(selectedValue == 3){

      var ntypebox = document.getElementById("type");
      var ntype = ntypebox.options[ntypebox.selectedIndex].value;
              if(ntype == 1){
    document.getElementById("row1").style.backgroundImage = "url('B/b3.jpg')";
    operation(selectedValue); 
              }else if(ntype == 2){
    document.getElementById("row1").style.backgroundImage = "url('LCSB/LCSB3.jpg')";
    operation(selectedValue);  
              }else if(ntype == 3){          
    document.getElementById("row1").style.backgroundImage = "url('HCSB/HCSB3.jpg')";
    operation(selectedValue);          
              }else if(ntype == 4){
    document.getElementById("row1").style.backgroundImage = "url('LGSB/LGSB3.jpg')";
    operation(selectedValue);          
              }else if(ntype == 5){
    document.getElementById("row1").style.backgroundImage = "url('HMCS/HMCSB3.jpg')";
    operation(selectedValue);          
              }else if(ntype == 6){
    document.getElementById("row1").style.backgroundImage = "url('LMCS/LMCS3.jpg')";
    operation(selectedValue);          
              }else{
    document.getElementById("row1").style.backgroundImage = "url('MCSB/MCSB3.jpg')";
    operation(selectedValue);         
              }

    }else if(selectedValue == 4){

      var ntypebox = document.getElementById("type");
      var ntype = ntypebox.options[ntypebox.selectedIndex].value;
              if(ntype == 1){
    document.getElementById("row1").style.backgroundImage = "url('B/b4.jpg')";
    operation(selectedValue);
              }else if(ntype == 2){  
    document.getElementById("row1").style.backgroundImage = "url('LCSB/LCSB4.jpg')";
    operation(selectedValue);   
              }else if(ntype == 3){
    document.getElementById("row1").style.backgroundImage = "url('HCSB/HCSB4.jpg')";
    operation(selectedValue);          
              }else if(ntype == 4){
    document.getElementById("row1").style.backgroundImage = "url('LGSB/LGSB4.jpg')";
    operation(selectedValue);          
              }else if(ntype == 5){
    document.getElementById("row1").style.backgroundImage = "url('HMCS/HMCSB4.jpg')";
    operation(selectedValue);          
              }else if(ntype == 6){
    document.getElementById("row1").style.backgroundImage = "url('LMCS/LMCS4.jpg')";
    operation(selectedValue);          
              }else{
    document.getElementById("row1").style.backgroundImage = "url('MCSB/MCSB4.jpg')";
    operation(selectedValue);         
              }

    }else if(selectedValue == 5){
     var ntypebox = document.getElementById("type");
      var ntype = ntypebox.options[ntypebox.selectedIndex].value;
  
              if(ntype == 1){
    document.getElementById("row1").style.backgroundImage = "url('B/b5.jpg')";
    operation(selectedValue);    
              }else if(ntype == 2){   
    document.getElementById("row1").style.backgroundImage = "url('LCSB/LCSB5.jpg')";
    operation(selectedValue);  
              }else if(ntype == 3){
    document.getElementById("row1").style.backgroundImage = "url('HCSB/HCSB5.jpg')";
    operation(selectedValue);
              }else if(ntype == 4){
    document.getElementById("row1").style.backgroundImage = "url('LGSB/LGSB5.jpg')";
    operation(selectedValue);
              }else if(ntype == 5){
    document.getElementById("row1").style.backgroundImage = "url('HMCS/HMCSB5.jpg')";
    operation(selectedValue);
              }else if(ntype == 6){
    document.getElementById("row1").style.backgroundImage = "url('LMCS/LMCS5.jpg')";
    operation(selectedValue);
              }else{
    document.getElementById("row1").style.backgroundImage = "url('MCSB/MCSB5.jpg')";
    operation(selectedValue);
              }
    }else{
        alert("select the correct number of beads"); 
    }

}
// function to show form input on necklace start
       function showInput() {
      event.preventDefault();
     var svgr = document.getElementById("showtext").childElementCount;
     var selectBox = document.getElementById("selectBox");
    var ielc = selectBox.options[selectBox.selectedIndex].value;
   appendremovesvg(svgr);
  updatetext(ielc);
}
// function to show form input on necklace end

// function to remove form input fields on select option start

function appendremove(c){
 for (i=c;i>5;i--){
var tarform = document.getElementById("test_form");
var ramchild = tarform.lastChild;
tarform.removeChild(ramchild);
 }
}

// function to remove form input fields on select option end

// function to remove SVG TextPath on select option Start

function appendremovesvg(svgr){
 for (i=svgr;i>0;i--){
var tarsvg = document.getElementById("showtext");
var ramsvgchild = tarsvg.lastChild;
tarsvg.removeChild(ramsvgchild);
 }
}

// function to remove SVG TextPath on select option Start

// function to call three different function at a time to make changes dynamic Start

function operation(selectedValue){
      var c = document.getElementById("test_form").childElementCount;
      var svgr = document.getElementById("showtext").childElementCount;
      appendremove(c);
      appendremovesvg(svgr);
      appendtext(selectedValue); 
}

// function to call three different function at a time to make changes dynamic end
  
  
   // stoping form from resubmitting on page refresh start
  
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// stoping form from resubmitting on page refresh end 

 // Logic function behind svg change textpath dynamically start

 function updatetext(ielc){
var num = ielc;
 var necktype = document.getElementById("type");
    var k = necktype.options[necktype.selectedIndex].value;
var j = num;
var c = 1;
     for (i=0;i<num;i++){
    // svg append start
   
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var textPath = document.createElementNS("http://www.w3.org/2000/svg","textPath");
      path.setAttributeNS(null, "id", "curve"+j+k+c);
      path.setAttributeNS(null, "fill", "transparent");
      text.setAttributeNS(null, "id", "displaytext");
      text.setAttributeNS(null, "width", "200px");
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", "id", "text"+j+k+c);
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href","#curve"+j+k+c);
       var txt = document.getElementById("t"+c).value;
       var txt1 = txt.charAt(0);
       var txt2 = txt.charAt(1);
       var txt3 = txt.charAt(2);
       var txt4 = txt.charAt(3);
       var txt5 = "";
      var span = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span3 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span4 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");

      span.setAttributeNS(null, "id", "f1");
      span1.setAttributeNS(null, "id", "f2");
      span2.setAttributeNS(null, "id", "f3");
      span3.setAttributeNS(null, "id", "f4");
      span4.setAttributeNS(null, "id", "f5");
      span.append(txt1);
      span1.append(txt2);
      span2.append(txt3);
      span3.append(txt4);
      span4.append(txt5);
      textPath.append(span);
      textPath.append(span1);
      textPath.append(span2);
      textPath.append(span3);
      textPath.append(span4);
      text.append(textPath)
      var target = document.getElementById("showtext");
       target.insertAdjacentElement("beforeend",path);
      target.insertAdjacentElement("beforeend",text);
      console.log(txt);
      c++;
       }

 }  

 // Logic function behind svg change textpath dynamically end
    
 // Logic function behind every dynamic render on select dynamically start

    function appendtext(selectedValue){
var num = selectedValue;
 var necktype = document.getElementById("type");
    var k = necktype.options[necktype.selectedIndex].value;
var j = num;
var c = 1;
     for (i=0;i<num;i++){
    // svg append start
    
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var textPath = document.createElementNS("http://www.w3.org/2000/svg","textPath");
      var txt = document.createTextNode("T");
      var txt1 = document.createTextNode("E");
      var txt2 = document.createTextNode("S");
      var txt3 = document.createTextNode("T");
      var txt4 = document.createTextNode("");
      // var ftxt = txt.charAt(0);
      // var stxt = txt.charAt(1);
      // var ttxt = txt.charAt(2);
      // var ftxt = txt.charAt(3);
      var span = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span2 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span3 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      var span4 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");

      span.setAttributeNS(null, "id", "f1");
      span1.setAttributeNS(null, "id", "f2");
      span2.setAttributeNS(null, "id", "f3");
      span3.setAttributeNS(null, "id", "f4");
      span4.setAttributeNS(null, "id", "f5");
      path.setAttributeNS(null, "id", "curve"+j+k+c);
      path.setAttributeNS(null, "fill", "transparent");
      text.setAttributeNS(null, "id", "displaytext");
      text.setAttributeNS(null, "width", "200px");
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", "id", "text"+j+k+c);
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href","#curve"+j+k+c);
      span.append(txt);
      span1.append(txt1);
      span2.append(txt2);
      span3.append(txt3);
      span4.append(txt4);
      textPath.append(span);
      textPath.append(span1);
      textPath.append(span2);
      textPath.append(span3);
      textPath.append(span4);
      text.append(textPath)
      var target = document.getElementById("showtext");
      target.insertAdjacentElement("beforeend",path);
      target.insertAdjacentElement("beforeend",text);
// svg append end

      // dynamic Discripton Box Creation Start
      var label = document.createElement("label");
      var input = document.createElement("input");
      input.setAttribute("type","text");
      input.setAttribute("id","t"+c);
      input.setAttribute("maxlength","4");

      var labeltxt = document.createTextNode("Insert Discription for (Bead "+c+"):");
      label.append(labeltxt);
      var targetform = document.getElementById("test_form");
      targetform.insertAdjacentElement("beforeend",label);
      targetform.insertAdjacentElement("beforeend",input);
      c++;
       }
    var inputsbm = document.createElement("input");
     inputsbm.setAttribute("type","submit");
      inputsbm.setAttribute("onclick","showInput();");
 targetform.insertAdjacentElement("beforeend",inputsbm);
}