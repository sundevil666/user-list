<template>
  <div
      v-if="showModal"
      data-vue-name="Authorization"
      class="authorization overlay"
      @click.self="hideModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Авторизация</h5>
          <button type="button" class="close">
            <span @click="hideModal">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="position-relative pt-4">
            <div v-if="error">
              <small class="form-text text-muted alert-warning position-absolute top-0">Данные не верны</small>
            </div>
            <div
                class="form-group position-relative pb-4"
            >
              <label>Логин</label>
              <input
                  v-model="user.login"
                  type="text"
                  class="form-control"
                  @focus="clearError()"
              >

            </div>
            <div class="form-group position-relative pb-4">
              <label>Пароль</label>
              <input
                  v-model="user.password"
                  autocomplete="new-password"
                  type="password"
                  class="form-control"
                  @focus="clearError()"
              >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="auth">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authorization',
  data() {
    return {
      user: {
        login: '',
        password: '',
      },
      error: false
    }
  },
  computed: {
    userList () {
      return this.$store.state.users.userList
    },
    showModal () {
      return this.$store.state.modal.modalAuthorization
    },
  },
  methods: {
    hideModal () {
      this.$store.commit('modal/setShowModalAuthorization', false)
      this.user.login = this.user.password = ''
    },
    clearError () {
      this.error = false
    },
    auth () {
      const user = this.userList.find(item => item.login === this.user.login && item.password === this.user.password)
      if (!user) {
        this.error = true
        return
      }
      localStorage.setItem('profileUser', JSON.stringify(user));
      this.$store.commit('users/setAuthUser', user)
      this.hideModal()
    }
  }
}
</script>
