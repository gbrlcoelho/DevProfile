import * as Yup from 'yup'

const resetPasswordSchema = Yup.object().shape({
  token: Yup.string().uuid('Código inválido.').required('Informe o código.'),
  password: Yup.string().required('Informe a nova senha.'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não conferem.'),
})

export default resetPasswordSchema
