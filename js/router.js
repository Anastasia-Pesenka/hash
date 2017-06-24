function Router(config) {
    this.routs = config;
    this.currentHash = window.location.hash;
    this.init();


}

var config = [{
    name: '#about',
    onLeave: function () {
        console.log('leave')
    },
    onEnter : function () {
        console.log('enter')
    }
},
    {
        name: '#todo',
        onLeave: function () {
            console.log('leave')
        },
        onEnter : function () {
            console.log('enter')
        }
    },
    {
        name: '#calendar',
        onLeave: function () {
            console.log('leave')
        },
        onEnter : function () {
            console.log('enter')
        }
    }
];
Router.prototype.init = function () {
    window.addEventListener("hashchange", this.handlURL.bind(this), false);
};

Router.prototype.handlURL = function (e) {
    // console.log(myRouter.currentHash);
    var prev = this.routs.find(function (route) {
        return (this.currentHash === route.name)
    }.bind(this));

};

var myRouter = new Router(config);