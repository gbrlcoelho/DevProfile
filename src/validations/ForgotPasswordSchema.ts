import * as Yup from 'yup'

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido.').required('Informe o email.'),
})

export default forgotPasswordSchema
