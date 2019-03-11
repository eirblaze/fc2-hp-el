<template>
	<nav id="app-g-nav" class="vue-active">

    <HR />

    <h1>
      <A HREF="index.html" target="_parent" class="hover-to-disp" title="エリフィア王立ゲーム博物館トップに戻る">エリフィア王立ゲーム博物館</a>
    </h1>

    <HR />

		<MainDisplay/>


    <HR />

    <h2>
      <a target="_parent" HREF="wwa/index.html" class="hover-to-disp" disp-num="1" name="img">
        <strong>World Wide Adventure</strong>
      </a>
    </h2>

    <p>
      <A target="_parent" HREF="wwa/caves01.html" class="hover-to-disp" title="ケーブダンジョン１" name="img">■</A>
      <A target="_parent" HREF="wwa/caves02.html" class="hover-to-disp" title="ケーブダンジョン２" name="img">■</A>
      <A target="_parent" HREF="wwa/caves001.html" class="hover-to-disp" title="ケーブビル１" name="img">■</A>
      <A target="_parent" HREF="wwa/caves002.html" class="hover-to-disp" title="ケーブビル２" name="img">■</A>
    </p>


    <h2>
    	<a target="_parent" HREF="mid/index.html" class="hover-to-disp" disp-num="2">
      	<strong>MIDI Download Center</strong>
      </a>
    </h2>


    <HR />

		<MainDisplay/>

    <HR />

	</nav>
</template>

<script>
import MainDisplay from './main-display.vue'

export default {
	components: {
    MainDisplay,
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
