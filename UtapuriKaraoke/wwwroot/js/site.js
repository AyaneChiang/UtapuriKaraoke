
$(".card-header").on("click", function (e) {
    $(this).find('span.btn')[0].click();
});

$("input.filter-tag").on("change", function (e) {
    var target = [];
    $("input.filter-tag[type='checkbox']:checked").each(function () {
        target.push($(this).next('label').text());
    });
    toggleCard(target, 'tags');
});

function toggleCard(target, attr) {
    if (target.length < 1)
        $("#accordion").find('.card').toggle(true);
    else {
        $('#accordion').find('.card-tags').each(function (index, element) {
            var isShow = target.every(t => $(this).data(attr).toUpperCase().includes(t.toUpperCase()));
            $(this).parents('.card').toggle(isShow);
        });
    }
}

$("#SwitchFilter").on('change', function () {
    if ($(this).attr('aria-expanded') == "true") {
        $(this).next('.float-btn').find('i').removeClass('fa-filter').addClass('fa-filter-circle-xmark');
        $(document).scrollTop(0);
    }
    else
        $(this).next('.float-btn').find('i').removeClass('fa-filter-circle-xmark').addClass('fa-filter');
}); 

$("#searchInput").on('search', function (e) {
    var target = $(this).val().split(' ');
    toggleCard(target, 'name');
});

$('#search').on('click', function () {
    $('#searchInput').trigger('search');
});