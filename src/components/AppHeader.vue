<template>
  <div
      data-vue-name="AppHeader"
      class="app-header"
      id="nav"
  >
    <div class="container mb-4">
      <div class="row justify-content-between">
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Главная</router-link>
                </li>
                <li
                    v-if="isAuth"
                    class="nav-item"
                >
                  <router-link class="nav-link" to="/my-profile">Личный кабинет</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col">
          <ul class="d-flex gap-3 h-100 align-items-center justify-content-end">
            <li v-if="!isAuth">
              <button class="btn btn-primary" @click="auth">Войти</button>
            </li>
            <li v-if="!isAuth">
              <button class="btn btn-primary" @click="addUser">Регистрация</button>
            </li>
            <li v-if="isAuth">
              <button class="btn btn-primary" @click="logout">Выйти</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    authUser () {
      return this.$store.state.users.authUser
    },
    isAuth () {
      return Object.keys(this.authUser).length > 0
    }
  },
  methods: {
    addUser () {
      this.$store.commit('modal/setShowModalRegistration', true)
    },
    auth () {
      this.$store.commit('modal/setShowModalAuthorization', true)
    },
    logout () {
      localStorage.setItem('profileUser', JSON.stringify([]));
      this.$store.commit('users/setAuthUser', {})
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="stylus">
</style>
