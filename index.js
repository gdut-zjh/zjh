$(document).ready(function(){
  // 页面切换
  // 首页到下一页
  $("#indexPageNext").click(function(){
    $("#indexPage").fadeOut();
    $("#firstPage").fadeIn();
  });
  // 第一页到首页、第一页到第二页
  $("#firstPagePre").click(function(){
    $("#firstPage").fadeOut();
    $("#indexPage").fadeIn();
  })
})