$(document).ready(function(){
     $(".owl-carousel").owlCarousel({
       loop: true,                // Lặp lại carousel
       margin: 20,                // Khoảng cách giữa các phần tử
       nav: true,                 // Hiển thị nút điều hướng
       dots: true,                // Hiển thị các điểm điều hướng dưới cùng
       autoplay: true,            // Tự động chạy carousel
       autoplayTimeout: 3000,     // Thời gian giữa các slide (3 giây)
       autoplayHoverPause: true,   // Dừng autoplay khi hover
       smartSpeed: 500,           // Tốc độ animation khi chuyển slide
       items: 1,                  // Số lượng items hiển thị trên mỗi slide
       responsive: {
         0: {
           items: 1,              // Hiển thị 1 item trên màn hình nhỏ
           nav: false           // Ẩn nút điều hướng trên mobile
         },
         600: {
           items: 3              // Hiển thị 3 item trên màn hình trung bình
         },
         1000: {
           items: 5              // Hiển thị 5 item trên màn hình lớn
         }
       }
     });
   });
   