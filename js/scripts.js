$(function() {
    $('.tabs-nav a').click(function() {

        // Check for active
        $('.tabs-nav .blog-news__col-item').removeClass('active');
        $(this).parent().addClass('active');

        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabs-content .blog-news__page-item').hide();
        console.log(currentTab)
        $(currentTab).show();
        $(currentTab).children().show();

        return false;
    });
});


$(function() {
    let currentTabs = $('#tab1');
    $(currentTabs).show().children().show();
});