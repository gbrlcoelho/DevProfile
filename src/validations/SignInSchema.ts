import * as Yup from 'yup'

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido.').required('Informe o email.'),
  password: Yup.string().required('Informe a senha.'),
})

export default signInSchema
