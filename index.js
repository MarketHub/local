angular
.module('localmarket', [])
.controller('SectionCtrl', function() {
    
    this.sections = [ {
            title : 'Electronics & Electrical', image : "m1.jpg",
            items : [
                { title : "Gaffar Market", image : "m1.jpg" },
                { title : "Palika Bazaar", image : "m2.jpg" },
                { title : "Lajpat Rai Market", image : "m3.jpg" }
            ]
        }, {
            title : 'Fashion & Life Style', image : "mk4.jpg",
            items : [
                { title : "Sarojini Nagar", image : "mk4.jpg" },
                { title : "Lajpat Nagar", image : "mk5.jpg" },
                { title : "Karol Bagh", image : "mk6.jpg" }
            ]
        }, {
            title : 'Food & Drink', image : "_mk7.jpg",
            items : [
                { title : "Chandni Chowk", image : "_mk7.jpg" },
                { title : "Rajouri Garden", image : "_mk8.jpg" },
                { title : "Kamla Nagar", image : "_mk9.jpg" }
            ]
        }
    ];
    
})
.controller('BannerCtrl', function() {
    this.banners = [ {
            title : 'Electronics & Electrical'
        }, {
            title : 'Fashion & Life Style'
        }, {
            title : 'Food & Drink'
        }
    ];
    
})
;