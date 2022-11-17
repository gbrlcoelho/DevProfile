import * as Yup from 'yup'

const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome completo.'),
  email: Yup.string().email('Email inválido.').required('Informe o email.'),
  password: Yup.string().required('Informe a senha.'),
})

export default signUpSchema
