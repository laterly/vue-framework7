<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>一个</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:search" icon-if-md="material:search" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <List></List>
  </f7-page>
</template>
<script>
import List from '../components/list'
export default {
  components:{
    List
  }
}
</script>
