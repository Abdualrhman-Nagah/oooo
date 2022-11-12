$(".rush").click(function () {
    $("html,body").animate({
        scrollTop: $(".form").offset().top}, "slow"),
    $("#text").focus();
});



var url = $(location).attr("href"),
    parts = url.split("="),
    last_part = parts[parts.length - 1];
    last_part != url && $("#article").val(last_part);


function SubmitForm() {
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSccD5MaKQVMC5DH4aaUkB8CiiISGoqHlIgCq9eAdZv4eI2_FQ/viewform",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('thanks.html', '_self');

};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.2056466192": {
                required: true,
                digits: true
            }
        }
    });
})



$(function(){
  $("#block3-img").on({
   mouseenter: function(){
    $(this).attr('src','images/block3.1copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/block3.1.png');
  }
  });
  
});
$(function(){
  $("#block3-img1").on({
   mouseenter: function(){
    $(this).attr('src','images/block3.2copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/block3.2.png');
  }
  });
  
});

$(function(){
  $("#block3-img2").on({
   mouseenter: function(){
    $(this).attr('src','images/block3.3copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/block3.3.png');
  }
  });
  
});

$(function(){
  $("#block3-img3").on({
   mouseenter: function(){
    $(this).attr('src','images/block3.4copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/block3.4.png');
  }
  });
  
});

$(function(){
  $("#block3-img4").on({
   mouseenter: function(){
    $(this).attr('src','images/block3.5copy.png');
  },
  mouseleave: function(){
    $(this).attr('src','images/block3.5.png');
  }
  });
  
});

