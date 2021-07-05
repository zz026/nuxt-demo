/**
 * @name Element UI api二次封装
 * @description message alert confirm loading
 * @createtime 2020/11/10
 * @author 赵信
 */
 import { Message, MessageBox, Loading, Notification } from 'element-ui'

 export function elMessage(message = '操作成功', type = 'success', duration = 3000) {
   Message.closeAll()
   Message({
     showClose: true,
     message,
     type,
     duration
   })
 }
 
 // confirm 弹框
 export function elConfirm(message = '确认更改', title = '提示', confirmButtonText = '确定') {
   return new Promise((resolve) => {
     MessageBox.confirm(message, title, {
       cancelButtonText: '取消',
       dangerouslyUseHTMLString: true,
       closeOnClickModal: false, // 是否可通过点击遮罩关闭
       closeOnPressEscape: false, // 是否可通过按下 ESC 键关闭
       confirmButtonText,
       type: 'warning'
     }).then(() => {
       resolve(true)
     }).catch(() => {})
   })
 }
 
 // alert 弹框
 export function elAlert(message, title = '提示') {
   return new Promise((resolve) => {
     MessageBox.alert(message, title, {
       dangerouslyUseHTMLString: true,
       closeOnClickModal: false, // 是否可通过点击遮罩关闭
       closeOnPressEscape: false, // 是否可通过按下 ESC 键关闭
       callback: (action) => {
         resolve(action === 'confirm')
       }
     }).then().catch(() => {})
   })
 }
 
 export function elNotification(message, type = 'warning') {
   Notification({
     title: '警告',
     message,
     duration: 3000,
     type
   })
 }
 
 // 封装loading
 export function elLoading(text = '提交中，请稍候……') {
   return Loading.service({
     lock: true,
     text,
     spinner: 'el-icon-loading',
     background: 'rgba(0, 0, 0, 0.8)'
   })
 }
 