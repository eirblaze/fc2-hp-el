﻿import * as Common from "../common";
import SiteData from './../data/site-data.json';

( ($) => {
  // コンフリクト回避

  // 読み込み終了後に実行を予約
  $(document).ready( () => {

    // DOM
    let $lampGroups = $('.hover-lamp');
    if ( !Common.jq_alive($lampGroups) ) return;


    for (let index = 0; $lampGroups.length > index; index++) {
      $lampGroups[index].$lamp = $($lampGroups[index]).find('.hover-lamp__lamp');
      $lampGroups[index].$senser = $($lampGroups[index]).find('.hover-lamp__senser');
    }

    // 画像オブジェクト設定
    const lampImgs = {
      hover: SiteData.baseUrl + '/img/bl2.gif',
      unhover: SiteData.baseUrl + '/img/bl1.gif'
    };

    function toHoverImg($jQ){
      $jQ.attr("src",lampImgs.hover);
    }

    function toUnHoverImg($jQ){
      $jQ.attr("src",lampImgs.unhover);
    }

    for (let index = 0; $lampGroups.length > index; index++) {
      // ホバーイベント
      let $senser = $lampGroups[index].$senser
      let $lamp = $lampGroups[index].$lamp

      $senser.on('mouseover', () => {
        toHoverImg($lamp);
      });

      // ホバー解除イベント
      $senser.on('mouseout', () => {
        toUnHoverImg($lamp);
      });
    }


  });
})(jQuery);
