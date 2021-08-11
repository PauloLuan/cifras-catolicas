import withJoi from 'next-joi'
import { get } from 'lodash'

export default withJoi({
  onValidationError: (_, res, error) => {
    res.statusCode = 400
    res.json({
      message: get(error, 'details[0].message')
    })
    return res.end()
  }
})
