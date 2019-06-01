<template>
	<nav id="app-g-nav" class="vue-active">

    <HR />

    <h1>
      <A :href="site_data.baseUrl + '/'" target="_parent" :title="title__back_to_top"
      @mouseover="display_text = title__back_to_top">
        {{ site_data.titleJp }}
      </a>
    </h1>

    <HR />

    <MainDisplay v-model="display_text" class="his" COLS="14" ROWS="4"/>

    <HR />

    <section class="nav-contents" :key="contents_key" v-for="(site_content, contents_key) in site_contents">

      <h2 class="nav-contents__title">
        <a target="_parent" :href="site_data.baseUrl + site_content.href" :title="site_content.titleJp"
        @mouseover="display_text = site_content.titleJp + '\n|\n' + site_content.description">
          <strong>{{site_content.titleEn}}</strong>
        </a>
      </h2>

      <ul  class="nav-contents__stages">
        <li :key="stage_key" v-for="(stage, stage_key) in site_content.stages">
          <a target="_parent" :href="site_data.baseUrl + stage.url" :title="stage.title"
          @mouseover="display_text = stage.title + '\n|\n' + stage.description">■</a>
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
import MainDisplay from './main-display.vue';
import SiteData from './../../data/site-data.json';
import SiteContents from './../../data/site-contents.json';

export default {
	components: {
    MainDisplay,
  },
  data () {
    return {
      display_text: "",
      site_contents: SiteContents,
      site_data: SiteData,
      title__back_to_top: SiteData.titleJp + ' トップに戻る',
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
