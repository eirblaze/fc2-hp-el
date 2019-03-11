<template>
	<div id="app-g-nav" class="vue-active">
		<h1>Main Navi</h1>
		<MainDisplay/>
		<ContentSelector/>
		<MainDisplay/>
	</div>
</template>

<script>
import MainDisplay from './main-display.vue'
import ContentSelector from './content-selector.vue'

export default {
	components: {
    MainDisplay,
    ContentSelector,
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
