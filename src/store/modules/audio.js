/*
 * @Description: 音频-vuex管理文件
 * @Author: 王振
 * @Date: 2021-10-12 16:27:31
 * @LastEditors: 王振
 * @LastEditTime: 2021-10-13 09:44:18
 */

import resourecs from './musicResourecs'
let musics = resourecs.musicResourecs
let newAudio

const audio = {
  state:{
    playStatus:false // 是否播放
  },
  mutations:{
    // 监听
    SET_ADDAUDIOEVENT(){
      newAudio.onPlay(()=>{
        console.log('开始播放');
      })
      newAudio.onPause(()=>{
        console.log('暂停播放');
      })
      newAudio.onStop(()=>{
        console.log('停止播放');
      })
      newAudio.onEnded(()=>{
        console.log('播放结束');
      })
      newAudio.onError((res)=>{
        console.log(res.errMsg);
        console.log(res.errCode);
      })
    },
    // 销毁时间
    SET_DESTRUCTION(){
      newAudio.offPlay()
      newAudio.offPause()
      newAudio.offStop()
      newAudio.offEnded()
      newAudio.offError()
    }
  },
  actions:{
    init({commit}){
      if (newAudio) {
        return
      }
      newAudio = mpvue.createInnerAudioContext(); // 实例化audio对象
      commit('SET_ADDAUDIOEVENT')
    }
  }
}

export default audio;
