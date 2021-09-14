function scrollToBottom() {
    window.scrollTo(0,document.querySelector(".ads-grid").scrollHeight + $(".ads-grid").height());
}

angular
.module('localmarket', [])
.controller('SectionCtrl', function() {
    
    this.cats = [ {
            title : 'Samosa', image : "mister/samosa.jpg",
            markets : [
                { title : "Aloo", image : "aloo.jpg" },
                { title : "Paneer", image : "paneer.jpg" },
                { title : "Chowmein", image : "chowmein.jpg" },
                { title : "Sweet Corn", image : "corn.jpg" },
                { title : "Dal", image : "dal.jpg" },
                { title : "Cheese Chilly", image : "chilly.jpg" }
            ]
        }, {
            title : 'Pakora', image : "mister/pakora.jpg",
            markets : [
                { title : "Panner", image : "aloo.jpg" },
                { title : "French Cheese", image : "paneer.jpg" },
                { title : "Mix", image : "chowmein.jpg" }
            ]
        }, {
            title : 'Burger', image : "mister/burger.jpg",
            markets : [
                { title : "Aloo", image : "aloo.jpg" },
                { title : "Cheese", image : "paneer.jpg" },
                { title : "Maharja", image : "chowmein.jpg" }
            ]
        }
    ];
    
    this.outlets = [];
    
})
.controller('BannerCtrl', function() {
    this.banners = [ {
            image : "mister/mister.jpg"
        }
    ];
})
;