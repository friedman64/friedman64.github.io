<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <h2 class="page-title">Contacts</h2>
        </div>
      </div>
    </div>
    <contacts></contacts>
    <offices></offices>
    <form-section></form-section>
  </div>
</template>

<script>
import Contacts from './components/common/contacts'
import Offices from './components/common/offices'
import formSection from './components/common/form'

export default {
  name: 'app',
  components: {
      Contacts,
      Offices,
      formSection
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main";
</style>