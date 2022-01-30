<template>
  <div
    v-if="showModal"
    data-vue-name="Registration"
    class="registration overlay"
    @click.self="hideModal"
  >
    <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Добавить пользоателя</h5>
            <button type="button" class="close">
              <span @click="hideModal">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div
                  class="form-group position-relative pb-4"
                  :class="{'error': errors.login.length > 0}"
              >
                <label>Логин</label>
                <input
                    v-model="user.login"
                    type="text"
                    class="form-control"
                    @focus="clearError('login')"
                >
                <small
                    v-if="errors.login.length > 0"
                    class="form-text text-muted alert-warning position-absolute bottom-0"
                >
                  {{ errors.login }}
                </small>
              </div>
              <div
                  class="form-group position-relative pb-4"
                  :class="{'error': errors.password.length > 0}"
              >
                <label>Пароль</label>
                <input
                    v-model="user.password"
                    autocomplete="new-password"
                    type="password"
                    class="form-control"
                    @focus="clearError('password')"
                >
                <small
                    v-if="errors.password.length > 0"
                    class="form-text text-muted alert-warning position-absolute bottom-0"
                >
                  {{ errors.password }}
                </small>
              </div>
              <div
                  class="form-group position-relative pb-4"
                  :class="{'error': errors.repeatPassword.length > 0}"
              >
                <label>Повторить пароль</label>
                <input
                    v-model="user.repeatPassword"
                    type="password"
                    class="form-control"
                    @focus="clearError('repeatPassword')"
                >
                <small
                    v-if="errors.repeatPassword.length > 0"
                    class="form-text text-muted alert-warning position-absolute bottom-0"
                >
                  {{ errors.repeatPassword }}
                </small>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addUser">Добавить</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      user: {
        login: '',
        password: '',
        repeatPassword: '',
        minLengthLogin: 3,
        minLengthPassword: 6
      },
      errors: {
        login: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  computed: {
    showModal () {
      return this.$store.state.modal.modalRegistration
    },
  },
  methods: {
    hideModal () {
      this.$store.commit('modal/setShowModalRegistration', false)
      this.user.login = this.user.password = this.user.repeatPassword = ''
    },
    clearError (field) {
      this.errors[field] = ''
    },
    addUser () {
      let isValidate = true
      const userList = this.$store.state.users.userList
      if (this.user.login.length < this.user.minLengthLogin) {
        this.errors.login = `Минимальная длинна логина ${this.user.minLengthLogin} символо`
        isValidate = false
      }
      if (this.user.password.length < this.user.minLengthPassword) {
        this.errors.password = `Минимальная длинна пароля ${this.user.minLengthPassword} символов`
        isValidate = false
      }
      if (this.user.password !== this.user.repeatPassword) {
        this.errors.repeatPassword = 'Пароли не совпадают'
      }
      if (userList.find(item => item.login.includes(this.user.login))) {
        this.errors.login = 'Такой пользоатель уже существует'
        isValidate = false
      }
      if (isValidate) {
        const data = {
          id: Date.now(),
          login: this.user.login,
          password: this.user.password
        }
        this.$store.commit('users/addUserList', data)
        this.hideModal()
        localStorage.setItem('userList', JSON.stringify(userList));
      }
    }
  }
}
</script>
