var posts=["2025/11/03/Datawhale动手学agent开发——Agent产品案例深度拆解/","2025/11/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };