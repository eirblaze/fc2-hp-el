<template>
<dl class="contents-index-menu">

  <div class="contents-block" :key="contents_key" v-for="(site_content, contents_key) in site_contents">
    <dt class="middle-font">
      <a class="block-link" :href="site_data.baseUrl + site_content.href" :title="site_content.titleJp">
        {{site_content.titleEn}} - {{site_content.titleJp}}
      </a>
    </dt>
    <dd>
      <small>{{site_content.description}}</small>
    </dd>
  </div>

</dl>
</template>

<script>
import SiteData from './../../data/site-data.json';
import SiteContents from './../../data/site-contents.json';

export default {
  data () {
    return {
      display_text: "",
      site_contents: SiteContents,
      site_data: SiteData,
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
