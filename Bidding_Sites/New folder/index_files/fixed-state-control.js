(function(){function e(){return c.offset().top}var a,b,c,d;a=jQuery('html'),c=jQuery('[data-target=primary-header-container]'),b=jQuery('[data-target=primary-header]'),jQuery(window).on('scroll',function(){var c=jQuery(this).scrollTop();d=e(),c>=d&&!a.hasClass('is-fixed-header')?(typeof hideStickyNav=='undefined'||typeof hideStickyNav!='undefined'&&hideStickyNav===!1)&&a.addClass('is-fixed-header'):c<d&&a.hasClass('is-fixed-header')&&a.removeClass('is-fixed-header'),c>0&&!b.hasClass('is-scrolled')?b.addClass('is-scrolled'):c===0&&b.hasClass('is-scrolled')&&b.removeClass('is-scrolled')}).on('resize',function(){d=e()})})()