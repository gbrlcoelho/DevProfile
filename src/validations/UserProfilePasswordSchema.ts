import * as Yup from 'yup'

const userProfilePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Campo obrigatório.'),
  password: Yup.string().required('Campo obrigatório.'),
  passwordConfirmation: Yup.string()
    .required('Campo obrigatório.')
    .oneOf([Yup.ref('password'), null], 'As senhas não conferem.'),
})

export default userProfilePasswordSchema
