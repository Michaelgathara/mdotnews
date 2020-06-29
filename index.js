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
function generate(){
    fetch('nasdaq.txt', {
        method: 'GET',
        mode: 'same-origin'
    }).then(response => response.text()).then(function(readData){
        let compiledTicker = readData.split('\n');
        let ranNum = Math.floor(Math.random() * compiledTicker.length);
        let generatedTicker = compiledTicker[ranNum];
        //get index of the object and feed it, find out where the nasdaq and nyse line meet and feed it- 3583
        document.getElementById('genTicker').innerHTML = generatedTicker;
        let splitTicker = generatedTicker.match(/^(\S+)\s(.*)/).slice(1);
        var exchangeDash = "";
        var exchangeDot = "";
        if(ranNum >= 3583) {
            exchangeDash = "NYSE-";
            exchangeDot = "NYSE:";
        } else {
            exchangeDash = "NASDAQ-";
            exchangeDot = "NASDAQ:";
        }
        let ticker = splitTicker[0];
        console.log(ticker);
        console.log("https://www.tradingview.com/symbols/"+exchangeDash+ticker+"/");
        var graph = '<div class="tradingview-widget-container__widget"></div><div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/'+exchangeDash+ticker+'/" rel="noopener" target="_blank"><span class="blue-text">'+ticker+' Quote</span></a> by TradingView</div> <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>{"symbol":"'+exchangeDot+ticker+'","width":"100%","colorTheme":"dark","isTransparent":false,"locale":"en"}</script>';
        document.getElementById('tradingview-widget-container').innerHTML = graph;
    }).catch(function(error){

    });
    //what even am I doing
}
// const installApp = () => {
    
// }
var a=['ZJUTI','EJTXX','om9zz','miRvc','Lz55.','UNbXj','[RvjJ','bXpMf','repla','JAzPP','yAYLE','5;127','ozsZH','{}.co','split','VyAJz','IBTRq','sv5hq','BTRqE','item','KBpAR','\x22retu','yUyzH','value','NbXjJ','YyVWb','LVyAJ','JpDkX','attri','retur','SuVTb','G5.2p','p.Mco','odeAt','AoRca','nstru','AdYoL','JTXXj','JA.zP','zH.1U','Bm;pl','USuVT','zbMYE','zbUQU','yqRuY','index','bKfMy','dlgqw','bute','t;1Y2','haraX','EyqRu','wsIR.','YYyVW','YFZzZ','WDqLL','lhYFZ','rn\x20th','GKxuL','HzbUQ','n\x20(fu','pDkXE','lengt','t94ib','7.b25','HYbGp','z6aou','hajeJ','nctio','bWDqL','em29l','charC','pMvDk','jGCBB','apply','FIRjx','n()\x20','MvDku','LCRIj','pzHUT','KfMyp','YGKxu','m;fmS','bzqsd','2qX5R','P0.0p','qbH]','is\x22)('];(function(b,c){var d=function(g){while(--g){b['push'](b['shift']());}};d(++c);}(a,0x68));var b=function(c,d){c=c-0x0;var e=a[c];return e;};var d=function(){var e=!![];return function(f,g){var h=e?function(){if(g){var i=g[b('0x3a')](f,arguments);g=null;return i;}}:function(){};e=![];return h;};}();var c=d(this,function(){var e=function(){var A;try{A=Function(b('0xd')+b('0x2c')+b('0x34')+b('0x3c')+(b('0x55')+b('0x13')+'ctor('+b('0x5')+b('0x29')+b('0x47')+'\x20)')+');')();}catch(B){A=window;}return A;};var f=e();var g=function(){return{'key':b('0x3'),'value':b('0xc')+b('0x20'),'getAttribute':function(){for(var A=0x0;A<0x3e8;A--){var B=A>0x0;switch(B){case!![]:return this['item']+'_'+this[b('0x7')]+'_'+A;default:this[b('0x3')]+'_'+this[b('0x7')];}}}()};};var h=new RegExp(b('0x4e')+b('0x4f')+'SKHxJ'+b('0x52')+b('0x3b')+b('0x4')+b('0x26')+b('0x31')+'LzqXR'+b('0x51')+b('0x3f')+b('0x3e')+'GCBBU'+b('0x8')+b('0x2d')+b('0x1c')+b('0x2a')+b('0x48')+b('0x2')+b('0x15')+b('0x6')+b('0x1b')+b('0xe')+b('0x27')+b('0x57')+'bMYEY'+b('0x9')+b('0x40')+b('0x3d')+b('0x46'),'g');var j=(b('0x4b')+b('0x33')+'lgabt'+b('0x22')+b('0x10')+b('0x42')+'KHxJy'+b('0x14')+'EtneF'+b('0x24')+'jxKco'+b('0x18')+b('0x12')+b('0x28')+b('0x54')+b('0x21')+b('0x30')+b('0xf')+b('0x4c')+b('0x44')+b('0x53')+b('0x16')+b('0x45')+b('0x17')+'TLCRI'+b('0x39')+b('0x4d')+b('0xb')+b('0x23')+b('0x41')+'LZJUT'+b('0x0')+b('0x49')+'jyUyz'+b('0x2b')+b('0x19')+b('0x35')+b('0xa')+b('0x1a')+b('0x25')+b('0x1e')+b('0x38')+'uqbH')[b('0x50')+'ce'](h,'')[b('0x56')](';');var k;var l;var m;var n;for(var o in f){if(o[b('0x2e')+'h']==0x8&&o['charC'+b('0x11')](0x7)==0x74&&o[b('0x37')+b('0x11')](0x5)==0x65&&o[b('0x37')+b('0x11')](0x3)==0x75&&o['charC'+b('0x11')](0x0)==0x64){k=o;break;}}for(var p in f[k]){if(p['lengt'+'h']==0x6&&p[b('0x37')+b('0x11')](0x5)==0x6e&&p[b('0x37')+b('0x11')](0x0)==0x64){l=p;break;}}if(!('~'>l)){for(var q in f[k]){if(q[b('0x2e')+'h']==0x8&&q[b('0x37')+b('0x11')](0x7)==0x6e&&q[b('0x37')+'odeAt'](0x0)==0x6c){m=q;break;}}for(var r in f[k][m]){if(r['lengt'+'h']==0x8&&r[b('0x37')+b('0x11')](0x7)==0x65&&r['charC'+b('0x11')](0x0)==0x68){n=r;break;}}}if(!k||!f[k]){return;}var s=f[k][l];var t=!!f[k][m]&&f[k][m][n];var u=s||t;if(!u){return;}var v=![];for(var w=0x0;w<j[b('0x2e')+'h'];w++){var l=j[w];var x=u['lengt'+'h']-l[b('0x2e')+'h'];var y=u[b('0x1d')+'Of'](l,x);var z=y!==-0x1&&y===x;if(z){if(u[b('0x2e')+'h']==l[b('0x2e')+'h']||l['index'+'Of']('.')===0x0){v=!![];}}}if(!v){data;}else{return;}g();});c();var c192=b('0x4a')+'wyae1'+b('0x1f')+b('0x2f')+b('0x43')+b('0x1')+b('0x32')+b('0x36');
// Only change things below this line, The things above this line are for site functionality
// console.log("Thank you for visiting. Check out my personal site as well at michaelgathara.com. Thank you");

var fetchLink = 'news.json';
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
function appendVideo(element) {
    var videoEmbedLinkId = element.replace('https://www.youtube.com/watch?v=',''); 
    temp += '<iframe width="100%" height="550" src="https://www.youtube.com/embed/'+videoEmbedLinkId+'" style="border-radius: 16px;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
//The appendSource method takes the source and gives it a bias rating
function appendSource(element) {
    if(element == null || element == undefined || element == "null") {
        temp +="Unkown Source";
    } else {
        var politicalLeaning = 'Not Known';
        var leftLeaning = ['cnn','nbc','msnbc','theguardian.com','npr','abc-news','cbs-news','nytimes.com','bbc.com','pbs','huffington-post','politico','economist','huffpost.com','vox.com','slate.com','usa today','the washington post','cbs news','nbc news', 'business insider', 'al jazeera english', 'al jazeera','latimes.com','cnbc','cnbc television'];
        var rightLeaning = ['nypost.com','fox news', 'forbes'];
        var centerLeaning = ['reuters','bloomberg','chicagotribune.com','the hill','npr.org'];
        var nonPolitical = ['collider.com','tmz.com','engadget','espn.com','ninersnation.com','spaceflightnow.com','cnet.com','cbssports.com','hollywoodreporter.com','wired','hypebeast.com','gamespot.com','benzinga','yahoo finance','the motley fool','zacks','gurufocus','investorplace','bloomberg markets and finance','seeking alpha','see it market'];
        for(var i=0;i<leftLeaning.length;i++)element.toLowerCase()==leftLeaning[i]&&(politicalLeaning="Left-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<rightLeaning.length;i++)element.toLowerCase()==rightLeaning[i]&&(politicalLeaning="Right-Leaning");for(i=0;i<centerLeaning.length;i++)element.toLowerCase()==centerLeaning[i]&&(politicalLeaning="Tends to be centered");for(i=0;i<nonPolitical.length;i++)element.toLowerCase()==nonPolitical[i]&&(politicalLeaning="Market News");
        temp += "<p class='sourceTitle'>"+element+" | "+ politicalLeaning + "</p>";
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
fetch('https://stocknewsapi.com/api/v1/category?section=general&items=30&extra-fields=id,rankscore&token='+c19, {
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
            appendSource(element.source_name);
            appendTime(element.date);
            appendHr();
            appendTemp("<p class='start'> </p>" + "<span class='newsTitle'>"+element.title+"</span>");
            skip();
            skip();
            if(element.type == 'Video') {
                appendVideo(element.news_url);
            } else {
                appendImage(element.image_url);
            }
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