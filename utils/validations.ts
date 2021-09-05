import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Почта обязательно'),
    password: yup.string().min(6, 'Длина пароля не менее 6 символов').required('Пароль обязательно'),
});
export const RegisterFormSchema = yup.object().shape({
fullname: yup.string().required('Имя и фамилия обязательное поле')
}).concat(LoginFormSchema);