$(document).ready(function () {
    let $filter = $('.filter-element').isotope({
        filter: '.websites'
    })
    
    $('.filter-button-group').on('click', 'a', function () {
        $('.filter-button-group').find('a').removeClass('active')
        let filterValue = $(this).addClass('active').attr('data-filter')
        $filter.isotope({filter: filterValue})
    });
    
    const date1 = moment("2011-11-01")
    const date2 = moment("2018-09-07")
    const date3 = moment("2023-05-01")
    
    $('#experience_date1').html(date1.format('MMM YYYY'))
    $('#experience_date2').html(date2.format('MMM YYYY'))
    $('#experience_date3').html(date3.format('MMM YYYY'))
    $('#experience_calc1').html("11 years")
    $('#experience_calc2').html(date2.toNow(true))
    $('#experience_calc3').html(date3.toNow(true))
})