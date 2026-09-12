
function showInfo(diaDiem) {

    let thongTin = "";

    switch (diaDiem) {

        case "Hà Nội":
            thongTin =
                "Hà Nội là thủ đô của Việt Nam, nổi tiếng với Hồ Gươm, phố cổ và nhiều di tích lịch sử.";
            break;

        case "Vịnh Hạ Long":
            thongTin =
                "Vịnh Hạ Long nổi tiếng với hàng nghìn đảo đá và cảnh quan thiên nhiên tuyệt đẹp.";
            break;

        case "Sa Pa":
            thongTin =
                "Sa Pa nổi tiếng với núi non, ruộng bậc thang và văn hóa của các dân tộc vùng cao.";
            break;

        case "Ninh Bình":
            thongTin =
                "Ninh Bình nổi bật với Tràng An, Tam Cốc và những dãy núi đá vôi hùng vĩ.";
            break;

        case "Đà Nẵng":
            thongTin =
                "Đà Nẵng là thành phố biển hiện đại với biển Mỹ Khê, bán đảo Sơn Trà và cầu Rồng.";
            break;

        case "Hội An":
            thongTin =
                "Hội An là phố cổ nổi tiếng với kiến trúc cổ, đèn lồng và không gian yên bình.";
            break;

        case "Huế":
            thongTin =
                "Huế là cố đô của Việt Nam, nổi tiếng với Đại Nội, lăng tẩm và văn hóa cung đình.";
            break;

        case "Nha Trang":
            thongTin =
                "Nha Trang nổi tiếng với biển xanh, các hòn đảo và nhiều hoạt động vui chơi.";
            break;

        case "TP. Hồ Chí Minh":
            thongTin =
                "TP. Hồ Chí Minh là thành phố năng động với nhiều địa điểm tham quan, mua sắm và ẩm thực.";
            break;

        case "Cần Thơ":
            thongTin =
                "Cần Thơ nổi tiếng với chợ nổi, sông nước và những vườn cây trái miền Tây.";
            break;

        case "Phú Quốc":
            thongTin =
                "Phú Quốc được biết đến với biển xanh, cát trắng và những khu nghỉ dưỡng đẹp.";
            break;

        case "Miền Tây":
            thongTin =
                "Miền Tây mang vẻ đẹp bình dị của sông nước, miệt vườn và cuộc sống địa phương.";
            break;

        default:
            thongTin =
                "Hãy cùng khám phá địa điểm này trong hành trình VIETNAM S-JOURNEY!";
    }

    alert(thongTin);
}



window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";

    }

});



console.log(
    "Chào mừng bạn đến với VIETNAM S-JOURNEY 🇻🇳"
);