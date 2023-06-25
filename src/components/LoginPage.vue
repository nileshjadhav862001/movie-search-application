<template>
  <div id="app">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div
          class="card mt-5"
          v-if="!registerActive"
          v-bind:class="{ error: emptyFields }"
        >
          <div>
            <div class="card-header">
              <h2>Login</h2>
            </div>
            <form class="login-form">
              <div class="form-outline mb-4">
                <input
                  v-model="emailLogin"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-outline mb-4">
                <input
                  v-model="passwordLogin"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <input type="submit" class="btn btn-primary" @click="doLogin" />
              <p>
                Don't have an account?
                <a
                  href="#"
                  @click="
                    (registerActive = !registerActive), (emptyFields = false)
                  "
                  >Sign up here</a
                >
              </p>
            </form>
          </div>
        </div>

        <div
          v-else
          class="row justify-content-center "
          v-bind:class="{ error: emptyFields }"
        >
        <div col-md-6>

          <div class="card-header">
            <h2>Register</h2>
          </div>
          <form class="register-form">
            <div class="form-outline mb-4">
              <input
                v-model="emailReg"
                type="email"
                class="form-control"
                placeholder="Email"
                required
                />
              </div>
              <div class="form-outline mb-4">
                <input
                v-model="passwordReg"
                type="password"
                class="form-control"
                placeholder="Password"
                required
                />
            </div>
            <div class="form-outline mb-4">
              <input
              v-model="confirmReg"
              type="password"
              class="form-control"
                placeholder="Confirm Password"
                required
                />
              </div>
              <input type="submit" class="btn btn-primary" @click="doRegister" />
              <p>
                Already have an account?
                <a
                href="#"
                @click="
                  (registerActive = !registerActive), (emptyFields = false)
                  "
                >Sign in here</a
                >
              </p>
            </form>
          </div>
            <div class="login-error">
            <!-- Error messages can be displayed here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "LoginPage",
      registerActive: false,
      emailLogin: "",
      passwordLogin: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      emptyFields: false,
    };
  },
  methods: {
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        this.$router.push("/HomePage");
        alert("You are now logged in");
      }
      // If sign-in is successful, navigate to the home page
    },

    doRegister() {
      if (
        this.emailReg === "" ||
        this.passwordReg === "" ||
        this.confirmReg === ""
      ) {
        this.emptyFields = true;
      } else {
        this.$router.push("/HomePage");
        alert("You are now registered");
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  padding: 20px 10px;
  margin: 20px 20px;
}
.register-container {
  border-radius: 10px;
}
</style>