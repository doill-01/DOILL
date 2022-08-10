function selectForm(frm){ 
    
                var hiddenForms = document.getElementById("allForms"); 
    
               theForm = hiddenForms.getElementsByTagName("div"); 
    
             for(x=0; x<theForm.length; x++){ 
    
             theForm[x].style.display = "none"; 
    
          } 
    
          if (theForm[frm-1]){ 
    
            theForm[frm-1].style.display = "block"; 
    
          } 
    
        } 
    
