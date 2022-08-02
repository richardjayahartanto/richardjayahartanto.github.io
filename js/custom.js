let $filter = $('.filter-element').isotope({
    filter: '.websites'
})

$('.filter-button-group').on('click', 'a', function () {
    $('.filter-button-group').find('a').removeClass('active')
    let filterValue = $(this).addClass('active').attr('data-filter')
    $filter.isotope({filter: filterValue})
});

