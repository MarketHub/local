function scrollToBottom() {
    window.scrollTo(0,document.querySelector(".ads-grid").scrollHeight + $(".ads-grid").height());
}

angular
.module('localmarket', [])
.controller('SectionCtrl', function() {
    
    this.cats = [ {
            title : 'Electronics & Electrical', image : "elect.jpg",
            markets : [
                { title : "Gaffar Market", image : "m1.jpg",
                    outlets : [ 
                        { title : 'Outlet 1', image : "m1.jpg" },
                        { title : 'Outlet 2', image : "m2.jpg" },
                        { title : 'Outlet 3', image : "m3.jpg" }
                    ]
                },
                { title : "Palika Bazaar", image : "m2.jpg" },
                { title : "Lajpat Rai Market", image : "m3.jpg" }
            ]
        }, {
            title : 'Fashion & Life Style', image : "cloth.jpg",
            markets : [
                { title : "Sarojini Nagar", image : "mk4.jpg" },
                { title : "Lajpat Nagar", image : "mk5.jpg" },
                { title : "Karol Bagh", image : "mk6.jpg" }
            ]
        }, {
            title : 'Food & Drink', image : "food.jpg",
            markets : [
                { title : "Chandni Chowk", image : "_mk7.jpg" },
                { title : "Rajouri Garden", image : "_mk8.jpg" },
                { title : "Kamla Nagar", image : "_mk9.jpg" }
            ]
        }
    ];
    
    this.outlets = [ {
        title : 'Outelt 1', image : "m1.jpg",
    } , {
        title : 'Outelt 2', image : "m2.jpg",
    } , {
        title : 'Outelt 3', image : "m3.jpg",
    } ];
    
})
.controller('BannerCtrl', function() {
    this.banners = [ {
            image : "banner1.jpg"
        }, {
            image : "banner2.jpg"
        }, {
            image : "banner3.jpg"
        }
    ];
})
;