<template>
<div id="login">
    <div class="input-fields">
        <input v-model="email" placeholder="email">
    </div>
    <div class="input-fields">
        <input v-model="password" placeholder="password">
    </div>
</div>
</template>

<script>

export default{
    name:"logIn"
}
</script>

<style scoped>

    #login{
        padding: 100px;
        text-align: center;
    }

</style>
