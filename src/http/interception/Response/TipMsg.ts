import { AxiosErrorTip, responseErrInfo } from '@/enum/axios'
import { createErrorModal, createErrorMsg } from '@/utils/message'

export const TipMsg = (response: any) => {
  const strMsg: string = responseErrInfo[response?.response.status]
  switch (response.config.requestOptions.errorMessageModal) {
    case AxiosErrorTip.MESSAGE: //message提示
      createErrorMsg({
        title: '系统错误',
        content:
          response?.response.status + strMsg ||
          `${response?.response.status}请联系管理员`,
      })
      break
    case AxiosErrorTip.MODAL: //弹框
      createErrorModal({
        title: '系统错误',
        content:
          response?.response.status + strMsg ||
          `${response?.response.status}请联系管理员`,
      })
      break
    default:
      break
  }
}
