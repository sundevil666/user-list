<template>
  <div id="app">
    <app-header/>
    <router-view/>

    <registration />
    <authorization />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import Registration from '@/components/modal/Registration'
import Authorization from '@/components/modal/Authorization'
import '@/assets/css/main.styl'

export default {
  name: 'App',
  components: {
    AppHeader,
    Registration,
    Authorization
  },
  created() {
    const userList = localStorage.getItem('userList')
    if(userList && userList.length > 0) {
      this.$store.commit('users/setUserList', JSON.parse(userList))
    } else {
      localStorage.setItem('userList', JSON.stringify([]));
    }
    const profileUser = localStorage.getItem('profileUser')
    if (profileUser && profileUser.length > 0) {
      this.$store.commit('users/setAuthUser', JSON.parse(profileUser))
    } else {
      localStorage.setItem('profileUser', JSON.stringify({}))
    }
  }
}
</script>
