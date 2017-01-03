<template>
    <div id="app">
        <div class="container">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
        </div>
    </div>
</template>

<script>

    import TodoInput from "./TodoInput.vue";
    import TodoList from "./TodoList.vue";

    export default{
        name: "app",
        components: {
            TodoInput,
            TodoList
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        font-family: Arial, 宋体;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    #app {
        width: 100%;
        height: 100%;
        background-color: #edf5f8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        width: 60%;
        height: 60%;
        padding: 30px;
        background-color: #fff;
        box-shadow: 0 10px 12px #bbb;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
