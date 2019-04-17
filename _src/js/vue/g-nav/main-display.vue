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
  methods: {
    displayChangeLog: function (event) {

      let new_message = ""

      //new_message += this.change_log.ChangeLog.title + "\n"

      this.change_log.ChangeLog.contents.forEach((value,key) => {
        new_message += "\n\n" + value.date + " " + value.text
      })

      this.$emit('click', new_message)
    }
  },
  computed: {
    listeners () {
      return {
        // https://codesandbox.io/s/o29j95wx9
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        //input: event => this.$emit('input', event.target.value),
        click: event => this.$emit('click', display_changeLog(this)),
        //click: event => this.$emit('click', "aaaaaa"),
      }
    }
  }
}

function display_changeLog(vm) {

  let new_message = ""

  //new_message += this.change_log.ChangeLog.title + "\n"

  vm.change_log.ChangeLog.contents.forEach((value,key) => {
    new_message += "\n\n" + value.date + " " + value.text
  })

  return new_message
}

</script>

<docs>


## メモ
- 「model:」 について カスタムイベント https://jp.vuejs.org/v2/guide/components-custom-events.html

</docs>
