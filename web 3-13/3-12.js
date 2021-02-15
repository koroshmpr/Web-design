$('.0').click(function () {
        $('.0').toggle(2000).toggle(2000);
        setTimeout(() => {
            $('.1').toggle(2000).toggle(2000)
        }, 4000);
        setTimeout(() => {
            $('.2').toggle(2000).toggle(2000)
        }, 8000);
        setTimeout(() => {
            $('.3').toggle(2000).toggle(2000)
        }, 12000);
})
$('.1').click(function () {
            $('.1').toggle(2000).toggle(2000)
        setTimeout(() => {
            $('.2').toggle(2000).toggle(2000)
        }, 4000);
        setTimeout(() => {
            $('.3').toggle(2000).toggle(2000)
        }, 8000);
})
$('.2').click(function () {
            $('.2').toggle(2000).toggle(2000)
        setTimeout(() => {
            $('.3').toggle(2000).toggle(2000)
        }, 4000);
})
$('.3').click(function () {
            $('.3').toggle(2000).toggle(2000)
})
