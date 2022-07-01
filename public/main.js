//console.log("我是main.js");

//用AJAX请求CSS
getCSS.onclick = () => {
const request = new XMLHttpRequest();
request.open("GET","/style.css");
request.onreadystatechange = () => {
  if(request.readyState === 4){
    if(request.status >= 200 && request.status < 300){
      console.log("request.response")
console.log(request.response)
const style = document.createElement("style");    //创建style标签
style.innerHTML = request.response;               //填写style内容
document.head.appendChild(style);                //style标签插入head中
    }else{
      alert("CSS加载失败")
    }
  }
};
request.send();
};
//用AJAX请求JS
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET","/2.js");
  request.onreadystatechange = () => {
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
   console.log("request.response")
   console.log(request.response)
   const script = document.createElement("script")       //创建script标签
   script.innerHTML = request.response                   //填写script内容
   document.body.appendChild(script)                     //script标签插入body中
}else{
  alert("JS加载失败")
      }
    }
  };
  request.send()
};

//用AJAX加载HTML
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET","3.html");
  request.onreadystatechange = () => {
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
    console.log("request.response")
    console.log(request.response)
    const div = document.createElement("div") 
    div.innerHTML = request.response       
    document.body.appendChild(div)                     
  }else{ alert("HTML加载失败")
}
}
}
request.send()
};

//加载XML
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET","4.xml");
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status ===200){
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent
      console.log(text.trim())              
  }
};
request.send()
};

//加载JSON
getJSON.onclick = () => {
  const request =  new XMLHttpRequest();
  request.open("GET","/5.json");
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
     const object = JSON.parse(request.response)
     myName.textContent = object.name
     console.log(object)       
  }
};
request.send()
};

//加载分页
let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n+1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n=n+1;
    }
  };
  request.send();

}