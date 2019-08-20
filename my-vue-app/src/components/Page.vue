<template>
  <div>ページ番号: {{ page }}</div>
</tempalate>
<script>
export default{
  data () {
    return {
      page: this.$route.params.page_num    
    }  
  }
}
</script>
