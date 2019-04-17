<template>
  <div class="main-display">
    <textarea
      :value="message"
      placeholder="クリックすると、更新履歴を表示します。"
      class="main-display"
      v-bind="$attrs"
      v-on="listeners"
    ></textarea>
  </div>
</template>

<script>
import ChangeLog from './../../data/change-log.json'
import SiteContents from './../../data/site-contents.json'

export default {
  model: {
    prop: 'message',
    event: 'click'
  },
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      change_log: ChangeLog
    }
  },
  computed: {
    listeners () {
      return {
        // https://codesandbox.io/s/o29j95wx9
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        click: event => this.$emit('click', display_changeLog()),
      }
    }
  }
}


/**
 * 更新履歴
 */
function display_changeLog() {

  let new_message = ""

  new_message += ChangeLog.title + "\n|\n"

  ChangeLog.contents.forEach((value,key) => {
    new_message += value.date + " " + value.text + "\n|\n"
  })

  return new_message
}

</script>

<docs>


## メモ
- 「model:」 について カスタムイベント https://jp.vuejs.org/v2/guide/components-custom-events.html

</docs>
