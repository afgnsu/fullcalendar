var initialize_calendar;

///////////////////////////////////////

initialize_calendar = function() {
  $('.calendar').each(function(){
    var calendar = $(this);
    calendar.fullCalendar({

      customButtons: {
        myCustomButton: {
          text: 'custom!',
          bootstrapFontAwesome: 'fa-bell',
          click: function() {
            alert('clicked the custom button!');
          }
        }
      },

      //defaultView: 'agendaWeek',
      defaultView: 'month', //預設視圖 => month月、basicWeek周、basicDay天、agendaWeek周、agendaDay天
      lang: 'zh-tw', //中文語系
      locale: 'zh-tw', //中文語系
      firstDay: 1, //設訂從哪一天開始 (0=星期日)
      firstHour: 9, //設定每天幾點開始 (好像沒用 XD)
      minTime: '9:00',
      maxTime: '21:00',
      businessHours: {
        dow: [ 1, 2, 3, 4, 5 ], // Monday - Thursday
        start: '09:00', // a start time (10am in this example)
        end: '20:00', // an end time (6pm in this example)
      },
      displayEventEnd: true, //在月曆(month)顯示結束時間

      //timeFormat: 'H(:mm)',
      timeFormat: 'HH:mm', //顯示24小時制+分鐘

      header: { //頂部排版
        left: 'prevYear,prev,today,next,nextYear', // 左邊放置上一頁、下一頁和今天
        center: 'title', // 中間放置標題
        //right: 'myCustomButton month,agendaWeek,agendaDay' // 右邊放置月、周、天
        right: 'month,agendaWeek,agendaDay' // 右邊放置月、周、天
      },
      themeSystem: 'bootstrap4',
      //bootstrapFontAwesome: false,
      bootstrapFontAwesome: {
        close: 'fa-times-circle',
        prev: 'fa-caret-left',
        next: 'fa-caret-right',
        prevYear: 'fa-arrow-left',
        nextYear: 'fa-arrow-right',
        month: 'fa-calendar'
      },
      //defaultDate: '2018-08-01',
      selectable: true,
      selectHelper: true,
      editable: true, //關閉拖曳調整日期
      aspectRatio: 1.5,

      events: '/calendars.json',
/*
      events: [
        {
          title: 'All Day Event',
          start: '2018-08-01'
        },
        {
          title: 'Long Event',
          start: '2018-08-07',
          end: '2018-08-10'
        },
        {
          title: 'Birthday Party',
          start: '2018-08-13T07:00:00'
        }
      ],
*/
      select: function(start, end) {
        $.getScript('/calendars/new', function() {
          $('#calendar_date_range').val(moment(start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYYY HH:mm"))
          date_range_picker();
          $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
        });

        calendar.fullCalendar('unselect');
      },

      eventDrop: function(event, delta, revertFunc) {
        event_data = {
          event: {
            id: event.id,
            start: event.start.format(),
            end: event.end.format()
          }
        };
        $.ajax({
            url: event.update_url,
            data: event_data,
            type: 'PATCH'
        });
      },

      eventClick: function(event, jsEvent, view) {
        $.getScript(event.edit_url, function() {
          $('#calendar_date_range').val(moment(event.start).format("MM/DD/YYYY HH:mm") + ' - ' + moment(event.end).format("MM/DD/YYYY HH:mm"))
          date_range_picker();
          $('.start_hidden').val(moment(event.start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(event.end).format('YYYY-MM-DD HH:mm'));
        });
      },

    });
  })
};
$(document).on('turbolinks:load', initialize_calendar);
