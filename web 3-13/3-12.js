$('.0').click(() => {
        $('.0').toggle(2000).toggle(2000 , ()=>{one()})
    }),
$('.1').click(one = () => {
        $('.1').toggle(2000).toggle(2000 , ()=>{two()})
    }),
$('.2').click(two = () => {
        $('.2').toggle(2000).toggle(2000 , ()=>{three()})
    }),
$('.3').click(three = () => {
        $('.3').toggle(2000).toggle(2000);})