<!-- eslint-disable max-len -->
<template>
    <div id="login">
        <h1 class="h1">LOGIN</h1>
        <form class="form">
        <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" name="username" v-model="input.username" placeholder="Username" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
             <input type="password" class="form-control" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <button type="button" class="btn btn-primary" v-on:click="login()">Login</button>
        </form>
    </div>
</template>

<!-- eslint-disable max-len -->
<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      // eslint-disable-next-line eqeqeq
      if (this.input.username != '' && this.input.password != '') {
        // eslint-disable-next-line eqeqeq
        if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
          this.$emit('authenticated', true);
          this.$router.replace({ name: 'Secure' });
        } else {
          console.log('The username and / or password is incorrect');
        }
      } else {
        console.log('A username and password must be present');
      }
    },
  },
};
</script>

<style scoped>
    #login {
        width: 500px;
        border: 4px solid black;
        border-radius: 30px;
        background: linear-gradient(#FFFFFF);
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
    .h1 {
        font-family: "Lucida Console", monospace;
        font-variant: normal;
    }
    .form-control {
        border-radius: 15px;
        order: 4px solid black;
    }
    .btn btn-primary {
        border-radius: 100px;
    }
</style>
