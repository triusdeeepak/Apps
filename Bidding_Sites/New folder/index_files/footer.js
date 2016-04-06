/* global _t */
(function() {
    'use strict';

    jQuery('footer .app-store-download-icon').click(function() {
        _t.push(['user_action', {
            section: 'SiteFooter',
            label: 'GoToIOSApp',
            action: 'click'
        }]);
    });

    jQuery('.send-sms-input').keypress(function (event) {
        if (event.which === 13) {
            jQuery('.send-sms-button').click();
            return false;
        }
    });

    jQuery('.send-sms-button').click(function(event) {
        event.preventDefault();
        var number = jQuery('.send-sms-input').val();
        jQuery('.send-sms-button').attr('disabled','disabled');
        jQuery('#app-form-error').addClass('is-hidden');

        if (number === '') {
            jQuery('.send-sms-button').removeAttr('disabled');
            return;
        }

        _t.push(['user_action', {
            section: 'SiteFooter',
            label: 'SendAppSMS',
            action: 'click'
        }]);

        jQuery.post('/ajax/mobile/sms.php', {number: number}, function(response) {
            jQuery('.send-sms-button').removeAttr('disabled');
            if(response.status === 'success') {
                jQuery('.send-sms-input').val('');
                jQuery('.send-sms-button').addClass('btn-success').removeClass('btn-primary');
                jQuery('.send-sms-button').html('Done!');
                setTimeout(function () {
                    jQuery('.send-sms-button').addClass('btn-primary').removeClass('btn-success');
                    jQuery('.send-sms-button').html('Send me the link!');
                }, 4000);
            }
            else {
                _t.push(['user_action', {
                    section: 'SiteFooter',
                    label: 'SendAppSMSError',
                    action: response.code
                }]);

                jQuery('#app-form-error').removeClass('is-hidden');
                jQuery('#app-form-error').text(response.message);
            }
        });

    });
}());
