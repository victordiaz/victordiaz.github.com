var Web = function() {
    var welcome = [];
    var where = [];
    
    var currentPage; 
    
    
    
    Web.prototype.addG = function (str) {
        welcome.push(str);
    }; 
    
    
    Web.prototype.addN = function (str, link) {
        where.push(str);
    }; 
    
  
    //TODO set timeout
    Web.prototype.show = function (t) {
        for (var i = 0; i < welcome.length; i++) {
            console.log(welcome[i]);
        }
    };
    
    Web.prototype.whereCanIGo = function() {
        
    };
    
    Web.prototype.goTo = function() {

    };

    Web.prototype.goBack = function() {

    };

    Web.prototype = function() {

    };

    Web.prototype = function() {

    };
    
} 

var web = new Web();
//welcome
web.addG("********************************** Hola! **********************************", "");
web.addG("*          You can navigate through my website using the console          *", "");
web.addG("*  Just write web.whereCanIGo() and then web.goTo( [placeYouWantToGo ])   *", "");
web.addG("*                                Enjoy!                                   *", "");
web.addG("*                                                                         *", "");
web.addG("********************************** Hola! **********************************", "");

//where 
web.addN("portfolio", "/");
web.addN("blog", "/");
web.addN("bio", "/");
web.addN("about this web", "/");
         
web.addN("portfolio -> CityFireflies", "/");
web.addN("portfolio ->", "/");
web.addN("portfolio", "/");
web.addN("portfolio", "/");