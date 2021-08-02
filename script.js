function printLastChar(str) {

        str = str + " ";
        for (var i = 1; i < str.length; i++) {
       
          if (str[i] === " ")
            
            document.write(str[i - 2 ] + " ");
             if (str[i] === " ")
            
            document.write(str[i - 1 ] + " ");
             
            
        }
      }
 
     
      var str = "Apple";
      printLastChar(str);
