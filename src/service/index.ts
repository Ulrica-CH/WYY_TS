import { BASE_URL, TIME_OUT } from './config'
import XYRequest from './request'

const xyRequest = new XYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default xyRequest
