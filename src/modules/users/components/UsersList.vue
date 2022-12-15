<template>
Users list
</template>

<script>
import UserService from '../../../services/UserService';

export default {
  name: "UsersList",
  setup () {
    console.log('setup UsersList');
    UserService.index()
        .then(r => {
          console.log(r);
        });
  }
}
</script>

<style scoped>

</style>