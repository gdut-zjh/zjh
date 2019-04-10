$(document).ready(function () {
  // - 页面切换-------------------------------------------------
  // 首页到下一页
  $("#indexPageNext").click(function () {
    $("#indexPage").fadeOut();
    $("#firstPage").fadeIn();
  });
  // 第一页1到首页、第一页1到第一页2
  $("#firstPagePre1").click(function () {
    $("#firstPage").fadeOut();
    $("#indexPage").fadeIn();
  });
  $("#firstPageNext1").click(function () {
    $("#content1").fadeOut();
    $("#content2").fadeIn();
  });
  // 第一页2到第一页1、第一页2到第一页3
  $("#firstPagePre2").click(function () {
    $("#content1").fadeIn();
    $("#content2").fadeOut();
  });
  $("#firstPageNext2").click(function () {
    $("#content2").fadeOut();
    $("#content3").fadeIn();
  })
  // 第一页3到第一页2、第一页3到第一页4
  $("#firstPagePre3").click(function () {
    $("#content2").fadeIn();
    $("#content3").fadeOut();
  });
  $("#firstPageNext3").click(function () {
    $("#content4").fadeIn();
    $("#content3").fadeOut();
  });
  // 第一页4到第一页3、第一页4到第一页5
  $("#firstPagePre4").click(function () {
    $("#content3").fadeIn();
    $("#content4").fadeOut();
  });
  $("#firstPageNext4").click(function () {
    $("#content5").fadeIn();
    $("#content4").fadeOut();
  });
  // 第一页5到第一页4、第一页5到第一页6
  $("#firstPagePre5").click(function () {
    $("#content4").fadeIn();
    $("#content5").fadeOut();
  });
  $("#firstPageNext5").click(function () {
    $("#content6").fadeIn();
    $("#content5").fadeOut();
  });
  // 第一页6到第一页5、第一页到第一页6
  $("#firstPagePre6").click(function () {
    $("#content5").fadeIn();
    $("#content6").fadeOut();
  });


  // - 默认设置 -------------------------------------------------------
  $("#indexPage").height($(window).height());
  $("#firstPage").height($(window).height());
})