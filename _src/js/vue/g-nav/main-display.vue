<template>
  <div class="main-display">
    <textarea
      v-on:click="displayChangeLog"
      v-model="message"
      placeholder="クリックすると、更新履歴を表示します。"
      class="main-display"
      cols="14"
      rows="4"
    ></textarea>
  </div>
</template>

<script>
import ChangeLog from './../../data/change-log.json'

export default {
  data: () => {
    return {
      message: "",
      ChangeLog: ChangeLog
    }
  },
  methods: {
    displayChangeLog: function (event) {
      /*
      // メソッド内の `this` は、 Vue インスタンスを参照します
      console.log(this)
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        console.log(event)
        console.log(event.target.tagName)
      }
      */

      //let ChangeLog = JSON.parse(j_ChangeLog) // https://www.sejuku.net/blog/20257#forEachJSON
      let message = ""

      message += this.ChangeLog.ChangeLog.title + "\n"

      this.ChangeLog.ChangeLog.contents.forEach((value,key) => {
        message += "\n\n" + value.date + " " + value.text
      })

      this.message = message
    }
  }
}


</script>