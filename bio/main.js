document.addEventListener("DOMContentLoaded", () => {
	fetch("data.json").then(data => response.json())
	
	var x = JSON.parse(data);

	document.getElementById("name").innerHTML = x["name"];
	document.getElementById("brief").innerHTML =  x["brief"].join("<br/>");
	document.getElementById("links").innerHTML = x["mails"].map(i=>"<a href='mailto: " + i.split(" ")[0] + "'>" + i + "</a>").concat(x["links"].map(i=>"<a href='https://" + i.split(" ")[0] + "'>" + i + "</a>")).join("<br/>");
	document.getElementById("highlight").innerHTML = x["highlight"].join("<br/>");
	document.getElementById("work").innerHTML = "<h3>"+x["work"]["title"]+"</h3>"+x["work"]["places"].map(i=>"<h4>"+i["pname"]+(i["logo"]?"<img src='"+i["logo"]+"'/>":"")+"</h4><ul class='events'>"+i["positions"].map(j=>"<li><time>"+j["time"]+"</time><span><strong>"+j["position"]+"</strong>"+j["desc"]+"</span></li>").join("")+"</ul>");
	document.getElementById("education").innerHTML = "<h3>"+x["education"]["title"]+"</h3>"+x["education"]["places"].map(i=>"<h4>"+i["pname"]+(i["logo"]?"<img src='"+i["logo"]+"'/>":"")+"</h4><ul class='events'>"+i["diplomas"].map(j=>"<li><time>"+j["time"]+"</time><span><strong>"+j["title"]+"</strong>"+j["desc"]+"</span></li>").join("")+"</ul>");
	document.getElementById("projects").innerHTML = "<h3>"+x["projects"]["title"]+"</h3>"+x["projects"]["places"].map(i=>"<h4>"+i["pname"]+(i["logo"]?"<img src='"+i["logo"]+"'/>":"")+"</h4><ul class='events'>"+i["projects"].map(j=>"<li><time>"+j["time"]+"</time><span><strong>"+j["title"]+"</strong>"+j["desc"]+"</span></li>").join("")+"</ul>");
	document.getElementById("publications").innerHTML = "<h3>"+x["publications"]["title"]+"</h3>"+x["publications"]["places"].map(i=>"<h4>"+i["pname"]+(i["logo"]?"<img src='"+i["logo"]+"'/>":"")+"</h4><ul class='events'>"+i["publications"].map(j=>"<li><time>"+j["time"]+"</time><span><strong>"+j["title"]+"</strong>"+j["desc"]+"</span></li>").join("")+"</ul>");
});