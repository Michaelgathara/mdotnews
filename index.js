// require('dotenv').config();
console.log("Thank you for visiting. Check out my personal site as well at michaelgathara.com. Thank you");
// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
    burger.addEventListener('click', e => {
    burger.dataset.state === 'closed' ? burger.dataset.state = "open" : burger.dataset.state = "closed";
    nav.dataset.state === "closed" ? nav.dataset.state = "open" : nav.dataset.state = "closed";
});
// Night Mode. Day Mode
var theme = localStorage.getItem('theme');

const switchTumblerHandler = () => {
    const wrapper = document.querySelector('.tumbler__wrapper');
    wrapper.addEventListener('click', () => {
        if(theme == 'dark') {
            localStorage.setItem('theme','light');
        } else {
            localStorage.setItem('theme','dark');
        }
        toggleNightMode();
    });
};
const toggleNightMode = () => {
    document.body.classList.toggle('body--night-mode');
    document.querySelector('.tumbler').classList.toggle('tumbler--night-mode');
    document.querySelectorAll('.news').forEach(post => {
        post.classList.toggle('news--night-mode');
    });
    document.querySelectorAll('.topNewsSection').forEach(post => {
        post.classList.toggle('topNewsSection--night-mode');
    });
    document.querySelectorAll('.burger').forEach(post => {
        post.classList.toggle('burger-night');
    });
    document.querySelectorAll('.topTopics').forEach(post => {
        post.classList.toggle('.topTopics--nightmode');
    });
};
switchTumblerHandler();
if(theme == 'dark') {
    toggleNightMode();
}
var f = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='+process.env.NEWS_API;
function skip() {
    temp += "<br>";
}
function openTempTd() {
    temp += "<div class='article'>";
}
function closeTempTd() {
    temp += "</div>";
}
var temp = "<tr>";
function appendHr() {
    temp += "<hr>"
}
function appendSource(element,elementTime) {
    if(element == null || element == undefined || element == "null") {
        temp +="Unkown Source";
    } else {
        var politicalLeaning = 'Not Known';
        var leftLeaning = ['cnn','nbc','msnbc','theguardian.com','npr','abc-news','cbs-news','nytimes.com','bbc.com','pbs','huffington-post','politico','economist','huffpost.com','vox.com','slate.com','usa today','the washington post','cbs news','nbc news', 'business insider', 'al jazeera english', 'al jazeera','latimes.com','cnbc'];
        var rightLeaning = ['nypost.com','fox news', 'forbes.com'];
        var centerLeaning = ['reuters','bloomberg','chicagotribune.com','the hill','npr.org'];
        var nonPolitical = ['collider.com','tmz.com','engadget','espn.com','ninersnation.com','spaceflightnow.com','cnet.com','cbssports.com','hollywoodreporter.com','wired','hypebeast.com','gamespot.com'];
        for(var i=0;i<leftLeaning.length;i++)element.toLowerCase()==leftLeaning[i]&&(politicalLeaning="Left-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<centerLeaning.length;i++)element.toLowerCase()==centerLeaning[i]&&(politicalLeaning="Tends to be centered");for(i=0;i<nonPolitical.length;i++)element.toLowerCase()==nonPolitical[i]&&(politicalLeaning="Non political/Entertainment");
        
        temp += "<p class='sourceTitle'>"+element+" | "+ politicalLeaning + "</p>";
        var da = moment(elementTime).format("MM-DD-YYYY HH:mm:ss",'us');
        temp += String(da);
    }
}
function appendTemp(element) {
    if(element == null || element == "null" || element == undefined) {
        temp += "Unknown";
    } else {
        temp += element;
    }
}
function appendLink(element,element2) {
    if(element == null || element == "null") {
        element = "Redacted Link";
    }
    
    temp += "Article Link: ";
    temp += "<a class='link' href='";
    temp += element;
    temp += "' target='_blank'>";
    temp += element2;
    temp += "</a>";
} 
function appendMore(element) {
    if(element == null || element == "null") {
        element = "Redacted Link";
    }
    temp += "<div class='bigBoy'>";
    temp += "<a class='expand' href='";
    temp += element;
    temp += "' target='_blank'>";
    temp += "Read More";
    temp += "</a>";
    temp += "</div>";
}
function appendImage(element) {
    temp += "<div class='imageDiv'>";
    temp += "<img class='articleImage' src='" + element + "' alt='"+element+"'>";
    temp += "</div>";
}
fetch(f).then((resp) => resp.json()).then(function(data) {
    var allDataRet = JSON.stringify(data);
    var allData = JSON.parse(allDataRet);
    allData.articles.forEach(element => {
        openTempTd();
        appendSource(element.source.name,element.publishedAt);
        appendHr();
        appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>"+element.title+"</span>");
        skip();
        skip();
        appendImage(element.urlToImage);
        skip();
        skip();
        appendTemp("<p class='start'>Description: </p>"+element.description);
        appendTemp("<p class='start'>Quick Look: </p>"+element.content);
        // appendTemp("<p class='start'>Sentiment Score: </p>");
        // sentimentData(element.content);
        skip();
        //appendLink(element.url,element.source.name);
        skip();
        appendMore(element.url)
        skip();
        closeTempTd();
        document.getElementById('newsTable').innerHTML = temp + "</div>";
    });
}).catch((err) => {
    console.log(err);
    openTempTd();
    appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>IN DEVELOPMENT</span>");
    appendHr();
    appendTemp("<p class=''>MDot News is still in development.<br><br>Please check back later");
    closeTempTd();
    document.getElementById('newsTable').innerHTML = temp + "</div>";
});



// for( var i = 0; i < data.length; i++) {
//     openTempTd();
//     appendSource(this.source_name);
//     appendHr();
//     appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>"+this.title+"</span>");
//     skip();
//     skip();
//     appendImage(element.image_url);
//     skip();
//     skip();
//     appendTemp("<p class='start'>Sentiment Score: </p>"+element.sentiment);
//     appendTemp("<p class='start'>Quick Look: </p>"+element.text);
//     // appendTemp("<p class='start'>Sentiment Score: </p>");
//     // sentimentData(element.content);
//     skip();
//     //appendLink(element.url,element.source.name);
//     skip();
//     appendMore(element.url)
//     skip();
//     closeTempTd();
//     document.getElementById('newsTable').innerHTML = temp + "</div>";
// }