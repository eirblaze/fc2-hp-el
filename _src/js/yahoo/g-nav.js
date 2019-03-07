import SideDisplay from '../vue/side-display';


( $ => {

  $(document).ready( () => {

    //console.log( document.getElementById("app-g-nav") );
    if ( document.getElementById("app-g-nav") == null ) return; // https://qiita.com/mitsuhiro_K/items/7d5cef1f4316c2080fa7


    //Vue.config.productionTip = false;

    // display-counter と呼ばれる新しいコンポーネントを定義します @link https://jp.vuejs.org/v2/guide/components.html
    Vue.component('display-counter', {
      data: function () {
        return {
          count: 0
        }
      },
      methods: {
        reverseMessage: () => {
          this.message = this.message.split('').reverse().join('')
        }
      },
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    });

    new Vue({
      el: '#display-counter-test',
    });


    new Vue({
      el: '#app-g-nav',
      template: '<side-display/>',
      components: { SideDisplay }
    });


    var $display = $(".his");

    $display.on("click", () => {
      $(this).value = change_log;
    });

    function change_h_display(i_text) {
      $display.value = i_text;
    }


    var change_log = (
      '　更新履歴\n'+
      '2012/07/24\n リニューアル開始\n\n'+
      '2007/10/18\n M.S.O. Free Mission 完成\n\n'+
      '2007/05/23\n Pet Monster 完成\n\n'+
      '2006/06/05\n スーパーまさお難易度変更機能を一部稼動\n同時にバグフィックス\n\n'+
      '2006/01/31\n レイアウト変更、リンク切れの修正\n\n'+
      '2005/04/30\n MaxAction導入\n\n'+
      '2004/08/12\n 雑談掲示板完成\n\n'+
      '2004/08/11\n M.S.O.公開\n\n'+
      '2004/08/02\n フレームが完成\n\n'+
      '2004/08/02\n リンク集が完成\n\n'+
      '2004/06/20\n MIDI Dounload Center 開店\n\n'+
      '2004/03/30\n CaveBillリリース\n\n'+
      '2004/01/03\n 営業開始\n\n'+
      '2003/09/07\n 着工'
    );


    function k(n){

        switch(n){

        case 0 : retu =

          ('　！？\n');

          break;

        case 1 : retu =

          ('　ＪＡＶＡを用いて作られた、キャラバンサークルのＲＰＧです。\n'+

          '　迷路や短編ＲＰＧが設置されています。\n');

          break;

        case 2 : retu =

          ('　興味本位で作ったゲーム音楽が集められています\n');

          break;

        case 3 : retu =

          ('　マリオのパクリです。\n');

          break;

        case 4 : retu =

          ('　迷走郵便局製の、シンプルなアクションゲームです。\n'+

          '　ダウンロードしてお楽しみください。');

          break;

        case 5 : retu =

          ('　現在調整中です。またの機会にどうぞ。');

          break;

        case 6 : retu =

          ('　リンク集です。相互リンク大歓迎です。\n');

          break;

        case 7 : retu =

          ('　M.S.O.外伝　～ペットモンスター～\n'+

          '　早い話がポケモンのパクりです。');

          break;

        default : retu = ('error!?');

        }

        change_h_display(retu);
        /*
        for (var ele_count = 0; ele_count < d_display.length; ele_count++ ) {
          d_display[ele_count].value = retu;
        }
        */

      }

  });


})(jQuery);

