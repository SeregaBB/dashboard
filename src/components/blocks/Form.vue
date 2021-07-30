<template>
  <div :class="{visible: isOpen}" @click="close">
    <form @click="e => e.stopPropagation()" @submit="submit">
      <span class="close-form" @click="close">✖</span>
      <h3>Add new employee</h3>
      <input type="text" v-model="user.name" placeholder="Name LastName"/>
      <input type="email" v-model="user.mail" placeholder="EMail"/>
      <input type="phone" v-model="user.phone" placeholder="Phone"/>
      <input type="text" v-model="user.employeeCode" placeholder="Employee code"/>
      <input type="text" v-model="user.designation" placeholder="Designation"/>
      <input type="date" v-model="user.joiningDate" placeholder="Joining Date"/>
      <input type="url" v-model="user.avatar" placeholder="Photo url"/>
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import {mutations} from "@/main";

export default {
  name: "Form",
  data: function () {
    return {
      isOpen: false,
      user: {
        id: 1,
        name: undefined,
        mail: undefined,
        phone: undefined,
        employeeCode: undefined,
        designation: undefined,
        joiningDate: undefined,
        avatar: undefined
      }
    }
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    validateForm() {
      return Object.keys(this.user).some(val => !this.user[val]);
    },
    submit(e) {
      e.preventDefault();
      if (!this.validateForm()) {
        mutations.manuallyAddUser(this.user);
        this.$emit('onAdd');
        e.currentTarget.reset();
        this.close();
      } else alert('Please fill all inputs');
    }
  },
  mounted() {
    this.$root.$on('openForm', () => this.isOpen = true);
  }
}
</script>

<style scoped>
div {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, .6);
  z-index: 99;
}

div.visible {
  display: block;
}

h3 {
  margin: 0 0 15px;
}

form {
  border: 2px solid #00dc80;
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

input {
  border: 1px solid #00dc80;
  outline: none;
  border-radius: 5px;
  padding: 7px 10px;
  font-size: 12px;
  line-height: 14px;
  font-family: sans-serif;
  margin: 0 0 10px;
  transition: filter .2s ease;
}

input:focus {
  filter: drop-shadow(0 4px 9px #e8e8e8);
}

button {
  background: #00DC80;
  color: #FFF;
  border: 2px solid #FFF;
  outline: none;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: all .2s ease;
}

button:hover {
  background: #FFF;
  color: #00DC80;
  border: 2px solid #00DC80;
}

.close-form {
  position: absolute;
  display: block;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: #00dc80;
  transition: all .2s ease;
}

.close-form:hover {
  transform: scale(1.1);
}

</style>