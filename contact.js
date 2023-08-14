  // 需要设置的客服微信
  const hContactArr = [
    {
      name: "yhb",
      wechatSrc: "https://hai-webdev.github.io/cdn/images/wechat/yhb.png",
    },
    {
      name: "stt",
      wechatSrc: "https://hai-webdev.github.io/cdn/images/wechat/stt.png",
    },
  ];
  
  // 随机函数
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // 设置联系方式的函数
  function setContact(contactArr){
      const wechatObj = contactArr[getRandom(0, contactArr.length)];
      const wechatDom = document.querySelectorAll(".h-server-wechat");
      for (let i = 0; i < wechatDom.length; i++) {
        wechatDom[i].setAttribute("src", "");
        wechatDom[i].setAttribute("src", wechatObj.wechatSrc);
      }
  }
  setContact(hContactArr)
  
  