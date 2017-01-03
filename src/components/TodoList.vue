<template>
    <transition-group name="item" class="todo-list" ref="list" tag="ul">
        <li v-for="(todo, index) in todoList" :key="todo.id" class="todo-item">
            <span class="todo-text" :class="{'todo-finish': todo.isFinished}">
              {{ index + 1 }} {{ todo.content }}
            </span>
            <div class="btn-container">
                <button class="finished-btn" v-if="!todo.isFinished" @click="finish(index)">搞定了</button>
                <button class="delete" v-else="todo.isFinished" @click="deleteTodo(index)">干掉他</button>
            </div>
        </li>
    </transition-group>
</template>

<script>
    import { mapState } from "vuex";
    import { TODO_FINISH, DELETE_TODO } from "../store/Store";

    //缓存 todoList 的长度, 在追加 todo 的时候将滚动条拉到最下面
    let cureentListLength = 0;

    export default {
        name : "TodoList",
        computed: mapState(["todoList"]),
        methods: {
          //触发 store mutations 中的 TODO_FINISH 方法
          finish(index){
              this.$store.commit(TODO_FINISH, index);
          },
          deleteTodo(index){
              this.$store.commit(DELETE_TODO, index);
          }
        },
        //组件渲染完毕后调用
        updated (){
            //vue 渲染完毕, 将 list 的滚动条拉到最底部
            this.$nextTick(function(){
                //有添加新元素,将滚动条拉到最下面
                if(cureentListLength < this.todoList.length){
                    this.$refs.list.$el.scrollTop = this.$refs.list.$el.scrollHeight;
                }
                //更新长度
                cureentListLength = this.todoList.length;
            });
        }
    }

</script>

<style>
    /** transition-group 动画 */
    .item-enter{
        transform: translateX(300px);
    }
    .item-enter-active{
        transition: all .5s;
    }
    .item-leave-active{
        opacity: 0;
        position: absolute;
    }
    .item-move{
        transition: all 1s;
    }
    /** end */

    .todo-list{
        width: 60%;
        list-style: none;
        margin-top: 30px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 10px;
        flex-grow: 1;
        flex-basis: 0;
        position: relative;
    }

    .todo-list .todo-item{
        width: 100%;
        height: 35px;
        line-height: 35px;
        color: #3e434f;
        font-size: 16px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }

    .todo-list .todo-text{
        width: 100%;
    }

    .todo-list .todo-finish{
        color: #999;
        text-decoration: line-through;
    }

    .todo-list .btn-container{
        flex-shrink: 0;
    }

    .todo-list .btn-container button{
        width: 80px;
        height: 25px;
        border-radius: 20px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .todo-list .finished-btn{
        background-color: #edf5f8;
    }

    .todo-list .delete{
        color: #fff;
        background-color: #e72564;
    }
</style>
