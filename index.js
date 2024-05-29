
    var currentQuote = ".blockquote p";
    
    var currentQuote ="";
   

    function changeQuote(){
        $(allQuotes[currentQuote]).fadeOut(200 ,function(){
           
            if (currentQuote==allQuotes.length -1){
                currentQuote=0;
            }else{
                currentQuote++;
            }
            $(allQuotes[currentQuote]).fadeIn(200);
            
            $("#new-quote").on("click", changeQuote());

        });
    };

   
  