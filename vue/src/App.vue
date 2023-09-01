<script >
  
    import {mapState} from 'vuex'
    export default{ 
        computed : {
        ...mapState(['user'])
      }
  }
</script>

<template>
  <div>
    asd
  <pre>
    {{ user }}
  </pre>
</div>  
</template>

<style scoped>
</style>
