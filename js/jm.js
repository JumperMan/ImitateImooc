
    $(document).ready(function() {
      //添加bootstrap工具提示
      $('[data-toggle="tooltip"]').tooltip();  

          // 显示or隐藏微信二维码
          $(".footerSnsWeixin").hover(
            function() {          
              $('.footerSnsWeixin i').show("slow");
            },
            function() {
              $('.footerSnsWeixin i').hide("slow");
            }
            );     
      });
