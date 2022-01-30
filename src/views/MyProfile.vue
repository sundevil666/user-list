<template>
  <div class="about">
    <div class="container">
      <ul
          data-vue-name="UserList"
          class="list-group mb-4 user-list"
      >
        <li class="list-group-item">
          <b>id</b> <span>{{ userProfile.id }}</span>
        </li>
        <li class="list-group-item">
          <b>Name</b> <span>{{ userProfile.login }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  computed: {
    userProfile () {
      return this.$store.state.users.authUser
    }
  }
}
</script>
