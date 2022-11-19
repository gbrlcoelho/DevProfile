import * as Yup from 'yup'

const userProfileEditSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido.'),
})

export default userProfileEditSchema
