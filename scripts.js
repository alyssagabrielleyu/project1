function getNYTArticles(input) {
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "78daab7ac8ae451c9f5aa651dcd3dca5",
	  'q': input
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {



$("#resultParagraph").html("")
for (var i = 1 ; i < 10; i++) {
	$(".left").append('<a class="result" href='
		+ JSON.stringify(result.response.docs[i]['web_url'])
		+ '>' + JSON.stringify(result.response.docs[i]['headline']['main']) + ' </a>');
	console.log(result.response.docs[i]['web_url'])
}
}).fail(function(err) {
	  throw err;
	});
}	

function getFoxArticles(input) {
		//FOX API 
	var url = 'https://newsapi.org/v2/everything?' +
          'q=' + input + '&' +
          //'from=2018-10-01&' +
          'sortBy=popularity&' +
          'sources=fox-news&' +
          'apiKey=74c66a35ffaa45ec95dc8060fd17efd2';


	var req = new Request(url);
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
		for(var i = 0; i < 10; i++){

			$(".right").append('<a class="result" href='
			+ JSON.stringify(result.articles[i]['url'])
			+ '>' + JSON.stringify(result.articles[i]['title']) + ' </a>');
			}
	});
};

$("#searchInput").change(function(){
	var input = $("#searchInput").val();
	$(".left").html("")
	$(".right").html("")
	getNYTArticles(input);
	getFoxArticles(input)
});