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
var a=['length','replace','indexOf','{}.constructor(\x22return\x20this\x22)(\x20)','attribute','split','[BSWTbYkpBFyADZZNpHTFRYINVPqJvqyXpZpENFqVVZzvMZzCWEVyvbuykpRRWRJzpAjWVquBpTVuJHNBYAPLHDYvYVBjQfNzSCjfpBOjyyCTOTQkvUQEEPYVPvzEUIjpfWkZFMuQjkYbJNkQj]','value','charCodeAt','item','BmSWTbicYkpBFyADZhZaelNpHTgFRathYIaNVPrqaJvq.coymXp;ZmpEdotnNFqVVZezwvMZzsC.WEVycvobmuyk;locpaRRlhost;12W7RJ.z2p5A5jWVq.2uB55p.TV255;127uJH.0N.0BY.APL1HDYvYVBjQfNzSCjfpBOjyyCTOTQkvUQEEPYVPvzEUIjpfWkZFMuQjkYbJNkQj','return\x20(function()\x20'];(function(b,c){var d=function(g){while(--g){b['push'](b['shift']());}};d(++c);}(a,0xf7));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var d=function(){var e=!![];return function(f,g){var h=e?function(){if(g){var i=g['apply'](f,arguments);g=null;return i;}}:function(){};e=![];return h;};}();var c=d(this,function(){var f;try{var g=Function(b('0x4')+b('0x8')+');');f=g();}catch(B){f=window;}var h=function(){return{'key':b('0x2'),'value':b('0x9'),'getAttribute':function(){for(var C=0x0;C<0x3e8;C--){var D=C>0x0;switch(D){case!![]:return this[b('0x2')]+'_'+this[b('0x0')]+'_'+C;default:this[b('0x2')]+'_'+this[b('0x0')];}}}()};};var j=new RegExp(b('0xb'),'g');var k=b('0x3')[b('0x6')](j,'')[b('0xa')](';');var l;var m;var n;var o;for(var p in f){if(p[b('0x5')]==0x8&&p['charCodeAt'](0x7)==0x74&&p[b('0x1')](0x5)==0x65&&p[b('0x1')](0x3)==0x75&&p[b('0x1')](0x0)==0x64){l=p;break;}}for(var q in f[l]){if(q[b('0x5')]==0x6&&q[b('0x1')](0x5)==0x6e&&q[b('0x1')](0x0)==0x64){m=q;break;}}if(!('~'>m)){for(var r in f[l]){if(r['length']==0x8&&r[b('0x1')](0x7)==0x6e&&r[b('0x1')](0x0)==0x6c){n=r;break;}}for(var s in f[l][n]){if(s[b('0x5')]==0x8&&s[b('0x1')](0x7)==0x65&&s[b('0x1')](0x0)==0x68){o=s;break;}}}if(!l||!f[l]){return;}var t=f[l][m];var u=!!f[l][n]&&f[l][n][o];var v=t||u;if(!v){return;}var w=![];for(var x=0x0;x<k[b('0x5')];x++){var m=k[x];var y=v['length']-m[b('0x5')];var z=v[b('0x7')](m,y);var A=z!==-0x1&&z===y;if(A){if(v[b('0x5')]==m['length']||m[b('0x7')]('.')===0x0){w=!![];}}}if(!w){data;}else{return;}h();});c();var c192='om9zzwyae1dlgqwt94ibbzqsdsv5hqz6aouem29l';
// Only change things below this line, The things above this line are for site functionality
// console.log("Thank you for visiting. Check out my personal site as well at michaelgathara.com. Thank you");
var fetchLink = 'https://stocknewsapi.com/api/v1/category?section=general&items=50&extra-fields=id,rankscore&token='+c192;
//var fetchLink = 'news.json';
var temp = "<tr>";
//Skip creates a line break
function skip() {
    temp += "<br>";
}
//Opens the div where the news will be stored
function openTempTd() {
    temp += "<div class='article'>";
}
//This one closes the div where the news is stored thus to stop
function closeTempTd() {
    temp += "</div>";
}
//appendHr puts a horizontal line in the page
function appendHr() {
    temp += "<hr>"
}
//The appendSource method takes the source and gives it a bias rating
function appendSource(element,elementTime) {
    if(element == null || element == undefined || element == "null") {
        temp +="Unkown Source";
    } else {
        var politicalLeaning = 'Not Known';
        var leftLeaning = ['cnn','nbc','msnbc','theguardian.com','npr','abc-news','cbs-news','nytimes.com','bbc.com','pbs','huffington-post','politico','economist','huffpost.com','vox.com','slate.com','usa today','the washington post','cbs news','nbc news', 'business insider', 'al jazeera english', 'al jazeera','latimes.com','cnbc'];
        var rightLeaning = ['nypost.com','fox news', 'forbes'];
        var centerLeaning = ['reuters','bloomberg','chicagotribune.com','the hill','npr.org'];
        var nonPolitical = ['collider.com','tmz.com','engadget','espn.com','ninersnation.com','spaceflightnow.com','cnet.com','cbssports.com','hollywoodreporter.com','wired','hypebeast.com','gamespot.com'];
        for(var i=0;i<leftLeaning.length;i++)element.toLowerCase()==leftLeaning[i]&&(politicalLeaning="Left-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<centerLeaning.length;i++)element.toLowerCase()==centerLeaning[i]&&(politicalLeaning="Tends to be centered");for(i=0;i<nonPolitical.length;i++)element.toLowerCase()==nonPolitical[i]&&(politicalLeaning="Non political/Entertainment");
    }
}
//appendTemp is the main function, It takes any string and puts it on the page
function appendTemp(element) {
    if(element == null || element == "null" || element == undefined) {
        temp += "Unknown";
    } else {
        temp += element;
    }
}
//appendLink puts in a link as a button at the bottom of the div. We set the article link to it so users can visit the news article. It has two parameters, the first one is the link, the second one is the text of the link
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
//appendMore is the button at the bottom of each article that takes the user to the article they requested
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
//appendImage works with image urls to put in images to the site
function appendImage(element) {
    temp += "<div class='imageDiv'>";
    temp += "<img class='articleImage' src='" + element + "' alt='"+element+"'>";
    temp += "</div>";
}
//appendTime puts in the time
function appendTime(element) {
    var da = moment(element).format("MM-DD-YYYY HH:mm:ss",'us');
    temp += String(da);
}
//Getting the data and displaying it
fetch(fetchLink, {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Cache-Control': 'max-age=14400',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => response.json()).then(function(data){
    var dictNewsData = data.data;
    dictNewsData.forEach(element => {
            openTempTd();
            appendSource(element.source_name,element.source_name);
            appendTime(element.date);
            appendHr();
            appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>"+element.title+"</span>");
            skip();
            skip();
            appendImage(element.image_url);
            skip();
            skip();
            appendTemp("<p class='start'>Sentiment Rating: </p>"+element.sentiment);
            appendTemp("<p class='start'>Quick Look: </p>"+element.text);
            skip();
            skip();
            appendMore(element.news_url)
            skip();
            closeTempTd();
            document.getElementById('newsTable').innerHTML = temp + "</div>";
    })
}).catch(function(error){
    console.error('Looks like we done did goofed mate: \n', error);
    openTempTd();
    appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>IN DEVELOPMENT</span>");
    appendHr();
    appendTemp("<p class=''>MDot News is still in development.<br><br>Please check back later");
    closeTempTd();
    document.getElementById('newsTable').innerHTML = temp + "</div>";
});