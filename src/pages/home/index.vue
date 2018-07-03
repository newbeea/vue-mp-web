<template>
  <div class="home">
     <img mode="widthFix" src="../../assets/logo.png">
     <div class="title">首页</div>
     <div>
       <a class="link" @click="go('/pages/home/index')">首页</a>
       <a class="link" @click="go('/pages/detail/index')">详情</a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  padding-top: 40%;
}
img {
  width: 20vw;
}
.title {
  font-size: 48px;
}
.link {
  font-size: 16px;
  display: inline;
  margin: 5px;
}
</style>
