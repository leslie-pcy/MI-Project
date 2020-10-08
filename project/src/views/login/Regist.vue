<template>
    <div>
        <van-nav-bar title="注册" left-text="" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />

        <div class="login">
            <van-form @submit="onSubmit">
                <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
        methods: {
            onClickLeft() {
                this.$router.push({
                    path: "/mine"
                })
            },
            onSubmit(values) {
                axios.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                    username:values.username,
                    password: values.password
                }).then(res => {
                    console.log(values.username,values.password)
                    console.log(res.data);
                    Toast.success('注册成功');
                })
            },
        },
    };
</script>

<style lang="scss" scoped>
    .login {
        .van-button--info {
            background-color: orange;
            border: none;
        }
    }
</style>