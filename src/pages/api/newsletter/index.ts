import validate from '@middlewares/validation'
import * as Joi from 'joi'
import type { NextApiRequest, NextApiResponse } from 'next'

type RequestDTO = {
  name: string
  email: string
}

type ResponseDTO = {
  success: boolean
  email: string
}

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': `E-mail inválido.`,
    'string.empty': `Seu "e-mail" não pode ser vazio.`,
    'any.required': `Você deve preencher seu e-mail.`
  }),
  name: Joi.string().required().messages({
    'string.empty': `Seu "nome" não pode ser vazio.`,
    'any.required': `Você deve preencher seu nome.`
  })
})

const handler = function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseDTO>
) {
  const { email } = req.body as RequestDTO
  res.status(200).json({ email, success: true })
}

export default validate({ body: schema }, handler)
