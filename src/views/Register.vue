<template>
    <div>
        <Banner>banner loading...</Banner>
        <div class="living_middle wow fadeInUp" data-wow-delay="0.4s">
            <div class="container">
                <h2>Rellena los siguientes campos</h2>
                <form action="">
                    <div class="text">
                        <input type="text" class="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Nombre ';}" v-model="resgistreForm.username">
                    </div>
                    <div class="text">
                        <input type="text" class="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email ';}" v-model="resgistreForm.email">
                    </div>
                    <div class="text">
                        <input type="text" class="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Contraseña ';}" v-model="resgistreForm.password">
                    </div>
                    <div class="text">
                        <input type="text" class="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirmacion de contraseña ';}" v-model="resgistreForm.passwordConfirm">
                    </div>
                    <div class="form-submit1">
                        <input type="button" id="submit" value="Crear cuenta" v-on:click="getRegister">
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
//import router from '../router/router';
import { useRouter } from 'vue-router'
import Banner from '../components/Banner.vue';
import useRegister from '../composables/useRegister';
import useSession from '../composables/useSession';

export default {
    name: 'Register',
    components: {
        Banner
    },
    setup() {
        const router = useRouter();
        const { resgistreForm, onRegister } = useRegister();
        const { userForm, onLogin } = useSession();

        return {
            resgistreForm,
            getRegister: async() => {

                try{
                    const { ok } = await onRegister();

                    if(ok) {
                        userForm.value.email = resgistreForm.value.email;
                        userForm.value.password = resgistreForm.value.password;

                        await onLogin();
                        return router.replace('register-succes');
                    }
                } catch(e) {
                    console.log(e)
                }
            }
        };
    }
/*    data() {
        return {
            name: 'Nombre',
            email: 'Email',
            password: 'Contraseña',
            passwordConfirm: 'Confirmar contaseña'
        }
    },
    computed: {
        nameValid() {
            return this.name && (this.name !== '') && (this.name !== 'Nombre');
        },
        emailValid() {
            return this.email && (this.email !== '') && (this.email !== 'Email');
        },
        passwordValid() {
            const password = this.password && (this.password !== '') && (this.password !== 'Contraseña');
            const passwordConfirm = this.passwordConfirm && (this.passwordConfirm !== '') && (this.passwordConfirm !== 'Confirmar contaseña');

            return password && passwordConfirm && (this.password === this.passwordConfirm);
        },
        fieldsValid() {
            return this.nameValid && this.emailValid && this.passwordValid;
        }
    },
    methods: {
        async onRegister() {
            try {
                // Control front campos
                if (!this.fieldsValid) {
                    this.errorText = this.errorMessage();

                    return null;
                }
                const userLog = await this.postRegister({
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                return router.replace('register-succes');
            } catch(e) {
                console.log(e);
                // Alerta Error registro back
            }
        },
        async postRegister(payload) {
            try {
                let resp = await fetch('http://localhost:8081/api/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                resp = await resp.json(); 

                return resp;
            } catch(e) {
                throw new Error(e);
            };
        },
        errorMessage() {
            let errorText = 'La contraseña es un campo erroneo';

            if (this.nameValid) {
                errorText = 'El nombre es un campo erroneo';
            } else if (emailValid) {
                errorText = 'El email es un campo erroneo';
            }

            return errorText;
        }
    }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>