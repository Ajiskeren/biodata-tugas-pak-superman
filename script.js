$(document).ready(function() {
            $('#water-bg').ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.04
            });

            setInterval(function() {
                var $el = $('#water-bg');
                var x = Math.random() * $el.outerWidth();
                var y = Math.random() * $el.outerHeight();
                var dropRadius = 20;
                var strength = 0.04 + Math.random() * 0.04;
                
                $el.ripples('drop', x, y, dropRadius, strength);
            }, 3000);

            $('#profileFlip').click(function() {
                $(this).toggleClass('flipped');
            });
        });