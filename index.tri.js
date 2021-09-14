function scrollToBottom() {
    window.scrollTo(0,document.querySelector(".ads-grid").scrollHeight + $(".ads-grid").height());
}

angular
.module('localmarket', [])
.controller('SectionCtrl', function() {
    
    this.cats = [ {
            title : 'Electronics & Electrical', image : "elect.jpg",
            markets : [
                { title : "Main Bazaar", image : "mk4.jpg",
                    outlets : [ 
                        { title : 'Outlet 1', image : "mk4.jpg" },
                        { title : 'Outlet 2', image : "mk5.jpg" },
                        { title : 'Outlet 3', image : "mk6.jpg" }
                    ]
                },
                { title : "Punjabi Market", image : "mk5.jpg" },
                { title : "Bansal Market", image : "mk6.jpg" }
            ]
        }, {
            title : 'Fashion & Life Style', image : "cloth.jpg",
            markets : [
                { title : "Main Bazaar", image : "mk4.jpg" },
                { title : "Punjabi Market", image : "mk5.jpg" },
                { title : "Bansal Market", image : "mk6.jpg" }
            ]
        }, {
            title : 'Food & Drink', image : "food.jpg",
            markets : [
                { title : "Main Bazaar", image : "mk4.jpg" },
                { title : "Punjabi Market", image : "mk5.jpg" },
                { title : "Bansal Market", image : "mk6.jpg" }
            ]
        }
    ];
    
    this.outlets = [];
    
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