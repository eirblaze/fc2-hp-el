<template>
	<nav id="app-g-nav" class="vue-active">

    <HR />

    <h1>
      <A HREF="index.html" target="_parent" title="エリフィア王立ゲーム博物館トップに戻る">エリフィア王立ゲーム博物館</a>
    </h1>

    <HR />

    <MainDisplay v-model="display_text" class="his" COLS="14" ROWS="4"/>

    <HR />

    <section :key="contents_key" v-for="(site_content, contents_key) in site_contents">

      <h2>
        <a target="_parent" :href="site_content.href"
        @mouseover="display_text = site_content.titleJp + '\n\n' + site_content.description">
          <strong>{{site_content.titleEn}}</strong>
        </a>
      </h2>

      <ul>
        <li :key="stage_key" v-for="(stage, stage_key) in site_content.stages">
          <a target="_parent" :href="stage.url" :title="stage.title"
          @mouseover="display_text = stage.title">■</a>
        </li>
      </ul>

    </section>

    <HR />

    <MainDisplay v-model="display_text" class="his" COLS="14" ROWS="4"/>

    <HR />

    <!--
    <p>
      <button type="button">フレームを解除</button>
    </p>
    -->

	</nav>
</template>

<script>
import MainDisplay from './main-display.vue'
import SiteContents from './../../data/site-contents.json'

export default {
	components: {
    MainDisplay,
  },
  data () {
    return {
      display_text: "",
      site_contents: SiteContents,
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
