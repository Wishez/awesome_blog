<template>
  <section
    class="welcome"
    :class="{ 'mobil': mobileLayout }">
    <div class="haiyan">
      <h4 class="mune">
        <nuxt-link to="/code">Разработка</nuxt-link>
        <span >/</span>
        <nuxt-link to="/think">Мысли</nuxt-link>
        <span >/</span>
        <nuxt-link to="/fuck">Прочее</nuxt-link>
      </h4>
    </div>
    <div class="will" v-if="!mobileLayout">
      <img src="https://static.jkchao.cn/will.png" alt="" width="80">
    </div>
  </section>
</template>
<script>

export default {

  scrollToTop: true,
  transition: 'fade',

  computed: {
    mobileLayout () {
      return this.$store.state.options.mobileLayout
    }
  },

  mounted () {
    this.$nextTick(() => {
      Promise.all([
        this.$store.dispatch('getArtList', { type: 1 }),
        // this.$store.dispatch('getArtList', { type: 2 }),
        // this.$store.dispatch('getArtList', { type: 3 })
      ])
    })
  }
}
</script>


<style lang="scss" scoped>
.welcome {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  background: url("~static/images/background.jpg") no-repeat 20% 75%;
  background-size: cover;

  .haiyan {
    position: absolute;
    right: 80px;
    top: 280px;
    color: $body-bg;

    .mune {
      span {
        padding: .35rem;
      }
    }
  }

  .will {
    position: absolute;
    right: 40px;
    top: 40px;
  }

  &.mobil {
    .haiyan {
      top: 70px;
      left: 60px;
    }
  }
}


</style>
