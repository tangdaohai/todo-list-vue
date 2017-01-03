/**
 * Created by Jerry on 16/12/28.
 */

//将 todo 添加到 list 中的 mutations
export const ADD_TODO = "add-todo";
//待办事项已完成
export const TODO_FINISH = "todo-finish";
//删除
export const DELETE_TODO = "delete-todo";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: []
    },
    mutations:{
        // 添加新的 todo
        [ADD_TODO](state, content){
            state.todoList.push({
              content,
              isFinished: false,
              id: Date.now()  //用于 list 中 v-for 的动画
            });
        },
        //待办事项已完成
        [TODO_FINISH](state, index){
            state.todoList[index]["isFinished"] = true;
        },
        //删除待办事项
        [DELETE_TODO](state, index){
            state.todoList.splice(index, 1);
        }
    },
    strict: true
});
