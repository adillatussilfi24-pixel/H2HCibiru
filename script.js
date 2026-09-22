// Tombol More Info
var tombolInfo = document.querySelector('.tbl-pink');

tombolInfo.addEventListener('click', function(event) {
    event.preventDefault();

    alert(
        'Hearts2Hearts adalah girl group dengan 8 member. ' +
        'Mereka dikenal dengan konsep yang fresh dan colorful. ' +
        'Yuk kenalan lebih jauh dengan member dan albumnya!'
    );
});

// Tombol Learn More
var tombolLearnMore = document.querySelector('#courses .tbl-biru');

tombolLearnMore.addEventListener('click', function(event) {
    event.preventDefault();

    alert(
        'Hearts2Hearts memiliki 8 member, yaitu Stella, Carmen, Ian, Yeon, Yuha, Ana, Jiwoo, dan Juun.'
    );
});

// Link Instagram tiap member
var fotoMember = document.querySelectorAll('.kartu-tutor img');

var linkMember = [
    'https://www.instagram.com/indrinrgt_/',
    'https://www.instagram.com/ssadly17/',
    'https://www.instagram.com/adillatsslfi/',
    'https://www.instagram.com/_earthlen/',
    'https://www.instagram.com/_nadianailaaa/',
    'https://www.instagram.com/alyapurwva/',
    'https://www.instagram.com/dillaary__/',
    'https://www.instagram.com/im.urcandyz_/'
];

fotoMember.forEach(function(foto, index) {
    foto.style.cursor = 'pointer';

    foto.addEventListener('click', function() {
        window.open(linkMember[index], '_blank');
    });
});