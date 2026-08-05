// Menu selection + WhatsApp enquiry
(function ($) {
    "use strict";

    function updateSelection() {
        var count = $('.menu-check:checked').length;
        var label = count === 1 ? '1 Item Selected' : count + ' Items Selected';
        $('#selectedCount').text(label);
        if (count === 0) {
            $('#menuHint').text('No items selected yet');
        } else {
            $('#menuHint').text('');
        }
    }

    function buildEnquiryMessage() {
        var selected = [];
        $('.menu-check:checked').each(function () {
            selected.push($(this).val());
        });

        var lines = ['Hello, I would like to enquire about catering for the following menu items:', ''];
        for (var i = 0; i < selected.length; i++) {
            lines.push((i + 1) + '. ' + selected[i]);
        }
        lines.push('', 'Please share the pricing and availability.');

        return lines.join('\n');
    }

    $('.menu-check').on('change', updateSelection);

    $('#whatsappEnquiry').on('click', function (e) {
        e.preventDefault();
        var count = $('.menu-check:checked').length;

        if (count === 0) {
            $('#menuHint').text('Please select at least one menu item to continue.');
            return;
        }

        window.open(buildWhatsAppLink(buildEnquiryMessage()), '_blank');
    });

    updateSelection();
})(window.jQuery);
