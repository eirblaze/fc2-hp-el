<template>
  <div class="example">{{ ChangeLog }}</div>
</template>

<script>
import ChangeLog from '../../data/change-log.json'

export default {
  data: () => {
    return {
      ChangeLog: ChangeLog
    }
  }
}
</script>

<style lang="scss">
body {
  .example {
    color: red;
  }
}
</style>
