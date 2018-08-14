# fullcalendar - 蘇介吾 107/08/14

## Ruby 2.4.3 + Rails 5.2.0 + Bootstrap 4 + Fullcalendar / DateRangePicker / MomentJS
---------
1. rails _5.2.0_ new fullcalendar -d mysql
2. cd fullcalendar
3. vi config/database.yml 加入MySQL root密碼
4. vi Gemfile 加入
```
gem 'bootstrap', '~> 4.1.3'
gem 'font-awesome-rails'
gem 'jquery-rails'
gem 'fullcalendar-rails'
gem 'momentjs-rails'
gem 'simple_form'
```
5. bundle
6. vi app/assets/javascripts/applcation.js 加入
```
//= require jquery3
//= require popper
//= require bootstrap
//= require moment
//= require fullcalendar
//= require fullcalendar.config
//= require locale-all
//= require daterangepicker
//= require daterangepicker.config
```
7. rm -rf app/assets/stylesheets/application.css
8. vi app/assets/stylesheets/applcation.scss 加入
```
@import "boostrap";
@import "font-awesome";
@import "fullcalendar";
@import "daterangepicker";
@import "home";
```
9. rails g scaffold calendar title start:datetime end:datetime color
10. rake db:create db:migrate
> 主要是 app/views/calendars/裡面的檔案，還有記得沒有 show action。
> 把 calendars_controller.rb 的 respond_to 都拿掉！
> 這個東西客制化的地方不少，尤其是 app/assets/javascripts/*.config.js

![Demo1](https://github.com/afgnsu/fullcalendar/blob/master/DEMO1.png)
![Demo2](https://github.com/afgnsu/fullcalendar/blob/master/DEMO2.png)
![Demo3](https://github.com/afgnsu/fullcalendar/blob/master/DEMO3.png)
![Demo4](https://github.com/afgnsu/fullcalendar/blob/master/DEMO4.png)
![Demo5](https://github.com/afgnsu/fullcalendar/blob/master/DEMO5.png)
![Demo6](https://github.com/afgnsu/fullcalendar/blob/master/DEMO6.png)
![Demo7](https://github.com/afgnsu/fullcalendar/blob/master/DEMO7.png)

參考：
[Fullcalendar]: (https://fullcalendar.io/)
[MomemtJS]: (http://momentjs.cn/)
[DateRangePicker]: (http://www.daterangepicker.com/)
[DateRangePicker客制化]: (https://www.wfublog.com/2017/08/jquery-date-range-picker-bootstrap.html)
