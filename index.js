angular
.module('100gmInfo', [])
.controller('SectionCtrl', function() {
    this.sections = [
        {
            title : 'Electronics & Electrical',
            items : [
                { title : "Gaffar Market", image : "m1.jpg" },
                { title : "Palika Bazaar", image : "m2.jpg" },
                { title : "Lajpat Rai Market", image : "m3.jpg" }
            ]
        }, {
            title : 'Fashion & Life Style',
            items : [
                { title : "Sarojini Nagar", image : "mk4.jpg" },
                { title : "Lajpat Nagar", image : "mk5.jpg" },
                { title : "Karol Bagh", image : "mk6.jpg" }
            ]
        }, {
            title : 'Food & Drink',
            items : [
                { title : "Chandni Chowk", image : "_mk7.jpg" },
                { title : "Rajouri Garden", image : "_mk8.jpg" },
                { title : "Kamla Nagar", image : "_mk9.jpg" }
            ]
        }, {
            title : 'Home Decor & Furniture',
            items : [
                { title : "Dilli Haat", image : "mk10.jpg" },
                { title : "Paharganj", image : "mk11.jpg" },
                { title : "Janpath market", image : "mk12.jpg" }
            ]
        }
    ];
    
})
;