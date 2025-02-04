import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MoviePage } from '../pages/movie/movie';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { HttpClientModule }    from '@angular/common/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LDetailsPage } from '../pages/l-details/l-details';
import { WherePage } from '../pages/where/where';
import { ZDetailPage } from '../pages/z-detail/z-detail';
import { DengluPage } from '../pages/denglu/denglu';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { ForgetMimaPage } from '../pages/forget-mima/forget-mima';
import { ShezhiPage } from '../pages/shezhi/shezhi';
import { HelpPage } from '../pages/help/help';
import { ZhanghaoPage } from '../pages/zhanghao/zhanghao';
import { MimaPage } from '../pages/mima/mima';
import { ShouyePage } from '../pages/shouye/shouye';
import { ShoucangPage } from '../pages/shoucang/shoucang';
import { DianpingPage } from '../pages/dianping/dianping';
import { XiaoxiPage } from '../pages/xiaoxi/xiaoxi';
import { VenomPage } from '../pages/venom/venom';
import { ChuanPage } from '../pages/chuan/chuan';
import { LuPage } from '../pages/lu/lu';
import { SuPage } from '../pages/su/su';
import { YuePage } from '../pages/yue/yue';
import { SweetPage } from '../pages/sweet/sweet';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MoviePage,
    TabsPage,
    SearchPage,
    LDetailsPage,
    WherePage,
    ZDetailPage,
    DengluPage,
    ZhucePage,
    ForgetMimaPage,
    ShezhiPage,
    HelpPage,
    ZhanghaoPage,
    MimaPage,
    ShouyePage,
    ShoucangPage,
    DianpingPage,
    XiaoxiPage,
    VenomPage,
    ChuanPage,
    LuPage,
    SuPage,
    YuePage,
    SweetPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'false',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MoviePage,
    TabsPage,
    SearchPage,
    LDetailsPage,
    WherePage,
    ZDetailPage,
    DengluPage,
    ZhucePage,
    ForgetMimaPage,
    ShezhiPage,
    HelpPage,
    ZhanghaoPage,
    MimaPage,
    ShouyePage,
    ShoucangPage,
    DianpingPage,
    XiaoxiPage,
    VenomPage,
    ChuanPage,
    LuPage,
    SuPage,
    YuePage,
    SweetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
