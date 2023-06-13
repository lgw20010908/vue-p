<template>
    <div class="subjectes">
        <div class="subject-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <el-table :data="subjectes" style="width: 100%">
            <el-table-column fixed prop="id" label="#" width="50" />
            <el-table-column prop="albumPics" label="专辑图片" />
            <el-table-column prop="categoryId" label="分类ID" />
            <el-table-column prop="categoryName" label="分类名称" />
            <el-table-column prop="collectCount" label="分组计算" />
            <el-table-column prop="commentCount" label="评论计数" />
            <el-table-column prop="content" label="内容" />
            <el-table-column prop="createTime" label="创建时间" />
            <el-table-column prop="description" label="描述" />
            <el-table-column prop="forwardCount" label="转发计数" />
            <el-table-column prop="pic" label="图片" />
            <el-table-column prop="productCount" label="产品计数" />
            <el-table-column prop="readCount" label="读取计数" />
            <el-table-column prop="recommendStatus" label="推荐状态" />
            <el-table-column prop="showStatus" label="显示状态" />
            <el-table-column prop="title" label="标题" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <el-dialog v-model="dialogFormVisible" title="广告类型编辑">
        <el-form :model="subject">
            <el-form-item label="编号" :label-width="formLabelWidth">
                <el-input v-model="subject.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="专辑图片" :label-width="formLabelWidth">
                <el-input v-model="subject.albumPics" autocomplete="off" />
            </el-form-item>
            <el-form-item label="分类ID" :label-width="formLabelWidth">
                <el-input v-model="subject.categoryId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="分类名称" :label-width="formLabelWidth">
                <el-input v-model="subject.categoryName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="分组计算" :label-width="formLabelWidth">
                <el-input v-model="subject.collectCount" autocomplete="off" />
            </el-form-item>
            <el-form-item label="评论计数" :label-width="formLabelWidth">
                <el-input v-model="subject.commentCount" autocomplete="off" />
            </el-form-item>
            <el-form-item label="内容" :label-width="formLabelWidth">
                <el-input v-model="subject.content" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="subject.createTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input v-model="subject.description" autocomplete="off" />
            </el-form-item>
            <el-form-item label="转发计数" :label-width="formLabelWidth">
                <el-input v-model="subject.forwardCount" autocomplete="off" />
            </el-form-item>
            <el-form-item label="图片" :label-width="formLabelWidth">
                <el-input v-model="subject.pic" autocomplete="off" />
            </el-form-item>
            <el-form-item label="产品计数" :label-width="formLabelWidth">
                <el-input v-model="subject.productCount" autocomplete="off" />
            </el-form-item>
            <el-form-item label="读取计数" :label-width="formLabelWidth">
                <el-input v-model="subject.readCount" autocomplete="off" />
            </el-form-item>
            <el-form-item label="推荐状态" :label-width="formLabelWidth">
                <el-input v-model="subject.recommendStatus" autocomplete="off" />
            </el-form-item>
            <el-form-item label="显示状态" :label-width="formLabelWidth">
                <el-input v-model="subject.showStatus" autocomplete="off" />
            </el-form-item>
            <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="subject.title" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
import {    subjectPage,
            subjectAdd,
            subjectDel,
            subjectEdit, } from "../../http/subject";
import { ElMessage } from 'element-plus'
import {cloneDeep} from 'lodash-es'
export default defineComponent({
    data() {
        return {
            subjectes: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            subject: {  
                "albumPics": "",
                "categoryId": 0,
                "categoryName": "",
                "collectCount": 0,
                "commentCount": 0,
                "content": "",
                "createTime": "",
                "description": "",
                "forwardCount": 0,
                "id": 0,
                "pic": "",
                "productCount": 0,
                "readCount": 0,
                "recommendStatus": 0,
                "showStatus": 0,
                "title": ""
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getSubjectesPage(1)
    },
    methods: {
        toEdit(subject) {
            console.log(subject);
            this.dialogFormVisible=true;
            this.subject=cloneDeep(subject);    
        },
        getSubjectesPage(current) {
            const data = {
                current: current,
                size: 10
            }
            subjectPage(data).then(res => {
                console.log(res);
                const page = res.data.page;
                this.subjectes = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })

        },
        currentchange(current) {
            // console.log(current);
            this.getSubjectesPage(current);
            this.page.current = current;//数据更新目前显示的页面
        },
        del(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            subjectDel(params).then(res => {
                if (res.success) {
                    this.getSubjectesPage(this.page.current)
                    //当前分页数据只剩一条时删除返回上一页
                    if (this.page.total % this.page.size == 1)
                        this.getAdCatesPage(this.page.current - 1)
                    else {
                        this.getAdCatesPage(this.page.current)
                    }
                }
                else {
                    console.log(res.msg)
                    return false
                }
            }).catch(err => {

            })
        },
        toAdd() {
            //到添加的页面
            this.dialogFormVisible = true;
            //清空表单
            this.subject = {  
                "albumPics": "",
                "categoryId": 0,
                "categoryName": "",
                "collectCount": 0,  
                "commentCount": 0, 
                "content": "", 
                "createTime": "",  
                "description": "", 
                "forwardCount": 0,
                "id": 0,
                "pic": "",  
                "productCount": 0, 
                "readCount": 0, 
                "recommendStatus": 0,  
                "showStatus": 0,
                "title": ""
            };
        },
        save() {
            const subject = this.subject;
            if (subject.id == 0) {
                subjectAdd(subject).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getSubjectesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else{
                subjectEdit(subject).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getSubjectesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        }

    }

});
</script>

<style lang="scss" scoped></style>