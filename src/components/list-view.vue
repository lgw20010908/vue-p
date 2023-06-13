<template>
    <!-- 列表组件 -->
    <div class="">
        <el-table :data="data" border style="width: 100%">
            <template v-for="item in column" >
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" />   
            </template>
            <!--给按钮的插槽-->
            <slot></slot>
        </el-table>
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name:'ListView',
    props:['column','data'],
    data(){
        return{

        }
    },
    methods:{

    }

});
</script>

<style lang="scss" scoped></style>
