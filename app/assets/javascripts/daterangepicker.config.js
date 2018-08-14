var date_range_picker;
date_range_picker = function() {
  $('.date-range-picker').each(function(){
    $(this).daterangepicker({

      locale : {
        // 中文化
        "applyLabel" : "確定",
        "cancelLabel" : "取消",
        "fromLabel" : "開始",
        "toLabel" : "結束",
        "daysOfWeek" : [ "日", "一", "二", "三", "四", "五", "六" ],
        "monthNames" : [ "一月", "二月", "三月", "四月", "五月", "六", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        "firstDay" : 1
      },

    }, function(start, end, label) {
      $('.start_hidden').val(start.format('YYYY-MM-DD HH:mm'));
      $('.end_hidden').val(end.format('YYYY-MM-DD HH:mm'));
    });
  })
};
$(document).on('turbolinks:load', date_range_picker);
