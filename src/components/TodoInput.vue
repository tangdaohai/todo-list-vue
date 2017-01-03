<template>
    <input
      class="todo-input"
      placeholder="从这里添加一个新的待办事项"
      v-model.trim="todoContent"
      @keyup.enter="add"/>
</template>

<script>
    import { ADD_TODO} from "../store/Store";

    export default {
        name: "TodoInput",
        data(){
            return {
                todoContent: ""
            }
        },
        methods: {
            add() {
                if(this.todoContent === ""){
                    return false;
                }
                //触发 store mutations 中的 ADD_TODO 方法
                this.$store.commit(ADD_TODO, this.todoContent);
                //清空当前 input 中的值
                this.todoContent = "";
            }
        }
    }

</script>

<style>

    .todo-input{
        width: 60%;
        height: 35px;
    }

    .todo-input{
        width: 60%;
        height: 35px;
        padding: 0 10px;
        font-size: 14px;
        border: 3px solid #c4e3ef;
        border-radius: 50px;
        outline: none;
    }

</style>
