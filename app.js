

var arrayList=["southpark", "spongebob", "simpsons", "family guy"]

function showGiphy() {

var newGiphy = $(this).attr("data-name");
var APIkey = "uGDWNE5pCRar6KM3AlxOvBm42QdfNgdl";
var queryURL ="https://api.giphy.com/v1/gifs/search?q="+ newGiphy +"&api_key="+ APIkey + "&limit=10";

 $("#gifs-appear-here").empty();
 $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            	var results = response.data;

            	for (var i = 0; i < results.length; i++) {

           
            
            		var showImageDiv = $("<div>");

            
            		var p = $("<p>").text("Rating: " + results[i].rating);

            
            		var searchImage = $("<img>");
            
            		searchImage.attr("src", results[i].images.fixed_height.url);


                    searchImage.attr('data-still', results[i].images.fixed_height_still.url)

                    searchImage.attr('data-animate', results[i].images.fixed_height.url)
                    
                    .attr('data-state', 'still');


            searchImage.addClass("gif")

            
            showImageDiv.append(p);
            
            showImageDiv.append(searchImage);
            
            $("#gifs-appear-here").prepend(showImageDiv);
        };
$(".gif").on("click", function() {
      
      var state = $(this).attr("data-state");
      console.log(this);
      
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        
        $(this).attr("data-state", "still");
      }
    });
});

      



};

function showButtons(){
	$("#Button-view").empty();
	for(var i =0; i<arrayList.length; i++){
		var a = $("<button>");
        a.addClass("btn-group");
          
        a.attr("data-name",arrayList[i]);
          
        a.text(arrayList[i]);
          
        $("#Button-view").append(a);
      };

	};
	$("#add-list").on("click", function(event) {
        event.preventDefault();
        
        newGiphy = $("#input").val().trim();

        
        arrayList.push(newGiphy);

        
        showButtons();
    });
    
    $(document).on("click", ".btn-group", showGiphy);
    showButtons();



    
	
















