let items = document.querySelectorAll('.item');
let title = document.querySelector('#features__title');
let text = document.querySelector('#features__text');
let titles = new Map([
    ['text1', 'Bell'],
    ['text2', 'Calendar'],
    ['text3', 'Best calorie <span class="green"> counter app!</span>'],
    ['text4', 'Heart'],
    ['text5', 'List']

]);
let texts = new Map([

    ['text1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Leo duis ut diam quam nulla porttitor. Eleifend mi in nulla posuere sollicitudin aliquam.'],
    ['text2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet consectetur. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat mauris.'],
    ['text3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. In arcu cursus euismod quis viverra nibh cras pulvinar. Neque viverra justo nec ultrices dui. Volutpat ac tincidunt vitae semper quis lectus. Massa tempor nec feugiat nisl.'],
    ['text4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis. Pellentesque elit eget gravida cum sociis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam.'],
    ['text5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Hendrerit gravida rutrum quisque non. Nullam vehicula ipsum a arcu cursus.']
]);

items.forEach(function(item){
      item.onmouseover=function(){
          console.log(213);
          text.innerHTML = texts.get(item.classList[1]);
          title.innerHTML = titles.get(item.classList[1]);
         //document.getElementsById("features__text")[0].innerHTML= obj[this.dataset.quest];
      }
});

// ;[].forEach.call(document.querySelectorAll(".item"),function(el){
//     el.onclick=function(){
//         console.log(213);
//        //document.getElementsById("features__text")[0].innerHTML= obj[this.dataset.quest];
//     }
// });
