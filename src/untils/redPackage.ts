import hongbao from '@/assets/images/hongbao.png'
import '@/assets/styles/demo.scss'
class RedPackage {
  domId: string
  timer: number
  dom: HTMLElement
  constructor(props: any) {
    this.domId = props.domId as string
  }
  init() {
    // 第一个计时器控制红包生成速度
    this.timer = setInterval(() => {
      let img = document.createElement('img')
      // 随机数范围2-4，红包下落所需时间
      let timeNum = Math.random() * 2 + 2
      img.style.transition = `all ${timeNum}s linear`
      img.classList.add('img')
      img.src = hongbao
      this.dom = document.getElementById(this.domId) as HTMLElement
      this.dom && this.dom.appendChild(img)
      img.style.top = -img.offsetHeight + 'px'
      let leftDistance = Math.random() * this.dom.offsetWidth - img.offsetWidth
      if (leftDistance < 0) {
        leftDistance = 0
      }
      img.style.left = leftDistance + 'px'
      // 生成红包100毫秒后进行移动
      setTimeout(() => {
        img.style.top = this.dom.offsetHeight + 'px'
        // 随机数范围2-4，红包下落完成后，若没有点击红包则销毁dom
        let timeOut = setTimeout(() => {
          this.dom.removeChild(img)
        }, timeNum * 1000)
        // 点击红包操作
        img.onclick = () => {
          // 点击之后终止销毁dom操作，直接销毁
          clearTimeout(timeOut)
          this.dom.removeChild(img)
          console.log('中了个锤子')
        }
      }, 100)
    }, 400)
  }

  clear() {
    this.dom.remove()
    clearInterval(this.timer)
  }
}

export default RedPackage
