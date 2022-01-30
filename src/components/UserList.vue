<template>
  <ul
      data-vue-name="UserList"
      class="list-group mb-4 user-list"
  >
    <li
        v-for="item in userList"
        :key="item.id"
        class="list-group-item"
    >
      <span>{{ item.login }}</span>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'UserList',
  props: {
    userList: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>
