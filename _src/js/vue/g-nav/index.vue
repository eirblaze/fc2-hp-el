<template>


</template>

<script>
import ChangeLog from './../../data/change-log.json'

export default {
  data: () => {
    return {
      ChangeLog: ChangeLog
    }
  },
	components: {
		TodoList
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
