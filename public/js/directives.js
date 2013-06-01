'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


app.directive('navLink', function($location){
   return {
       restrict: 'A',
       link: function(scope, element, attrs){

           scope.$watch(function(){
               return $location.path();
           }, function(newValue, oldValue){


               if (attrs.navLink === newValue)
               {
                   element.addClass('active');
               }else{
                   element.removeClass('active');
               }

           });

       }
   }
});


app.directive('xxGallery', function($location, dataService){
    return {
        restrict: 'A',
        scope:{

        },
        link: function(scope, element, attrs){


            scope.data = {};

            dataService.getImageList().then( function(data){

                jQuery(document).ready(function($) {
                    // We only want these styles applied when javascript is enabled


                    var listTag = $('ul.thumbs');



                    angular.forEach(data, function(image, i){

                        var itemtag = '<li>' +
                                      '<a class="thumb" name="leaf" href="' + image.imagesource + '"' + image.title + '">' +
                                      '<img src="' + image.thumbsource + '" alt="' + image.title + '" />' +
                                      '</a>' +
                                      '<div class="caption">' +
                                      '<div class="image-title">' + image.title +  '</div>' +
                                      '<div class="image-desc">' + image.description + '</div>' +
                                      '</div>' +
                                      '</li>';
                        listTag.append(itemtag);
                    });


                    $('div.navigation').css({'width' : '200px', 'float' : 'left'});
                    $('div.content').css('display', 'block');

                    // Initially set opacity on thumbs and add
                    // additional styling for hover effect on thumbs
                    var onMouseOutOpacity = 0.67;
                    $('#thumbs ul.thumbs li').opacityrollover({
                        mouseOutOpacity:   onMouseOutOpacity,
                        mouseOverOpacity:  1.0,
                        fadeSpeed:         'fast',
                        exemptionSelector: '.selected'
                    });

                    // Initialize Advanced Galleriffic Gallery
                    var gallery = $('#thumbs').galleriffic({
                        delay:                     2500,
                        numThumbs:                 6,
                        preloadAhead:              10,
                        enableTopPager:            true,
                        enableBottomPager:         true,
                        maxPagesToShow:            7,
                        imageContainerSel:         '#slideshow',
                        controlsContainerSel:      '#controls',
                        captionContainerSel:       '#caption',
                        loadingContainerSel:       '#loading',
                        renderSSControls:          true,
                        renderNavControls:         true,
                        playLinkText:              'Play Slideshow',
                        pauseLinkText:             'Pause Slideshow',
                        prevLinkText:              '&lsaquo; Previous Photo',
                        nextLinkText:              'Next Photo &rsaquo;',
                        nextPageLinkText:          'Next &rsaquo;',
                        prevPageLinkText:          '&lsaquo; Prev',
                        enableHistory:             false,
                        autoStart:                 false,
                        syncTransitions:           true,
                        defaultTransitionDuration: 900,
                        onSlideChangeOut:             function(prevIndex) {
                            // 'this' refers to the gallery, which is an extension of $('#thumbs')
                            this.find('ul.thumbs').children()
                                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity);
                        },
                        onSlideChangeIn:              function(nextIndex) {
                            this.find('ul.thumbs').children()
                                .eq(nextIndex).fadeTo('fast', 1.0);
                        },
                        onPageTransitionOut:       function(callback) {
                            this.fadeTo('fast', 0.0, callback);
                        },
                        onPageTransitionIn:        function() {
                            this.fadeTo('fast', 1.0);
                        }
                    });
                });


            });





        }
    }
});





app.directive('xxTestimonial', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){

            $(document).ready(function() {
                $('#testimonials1')
                    .before('<div id="nav">')
                    .cycle({
                        fx: 'fade', // choose your transition type, ex: fade, scrollUp, scrollRight, shuffle
                        pager:  '#nav'
                    });

                $('#testimonials2')
                    .after('<div id="nav2">')
                    .cycle({
                        fx: 'scrollRight', // choose your transition type, ex: fade, scrollUp, scrollRight, shuffle
                        pager:  '#nav2'
                    });
            });

        }
    }
});