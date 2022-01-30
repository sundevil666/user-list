<template>
  <div
      data-vue-name="home"
      class="home"
  >
    <div class="container">
      <div class="h2">Пользователи</div>
      <user-list v-if="userList.length > 0" :user-list="userList"></user-list>
      <div
          v-else
          class="h3 mb-4"
      >
        Список пуст
      </div>
      <div>
        <button
            class="btn btn-primary"
            @click="addUser"
        >
          Добавить пользователя
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList';

export default {
  name: 'Home',
  components: {
    UserList
  },
  data() {
    return {

    }
  },
  computed: {
    userList () {
      return this.$store.state.users.userList
    }
  },
  methods: {
    addUser () {
      this.$store.commit('modal/setShowModalRegistration', true)
    }
  }
}
</script>
