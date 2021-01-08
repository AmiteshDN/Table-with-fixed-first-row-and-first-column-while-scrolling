// Table1
$(document).ready(function() {
  $('.table1-body, .table2-body, .table3-body, .table4-body, .table5-body, .table6-body').scroll(function(e) { //detect a scroll event on the tbody
    /*
    Setting the thead left value to the negative valule of tbody.scrollLeft will make it track the movement
    of the tbody element. Setting an elements left value to that of the tbody.scrollLeft left makes
    it maintain it's relative position at the left of the table.
    */
    $('.table1-head').css("left", -$(".table1-body").scrollLeft()); //fix the thead relative to the body scrolling
    $('.table2-head').css("left", -$(".table2-body").scrollLeft());
    $('.table3-head').css("left", -$(".table3-body").scrollLeft());
    $('.table4-head').css("left", -$(".table4-body").scrollLeft());
    $('.table5-head').css("left", -$(".table5-body").scrollLeft());
    $('.table6-head').css("left", -$(".table6-body").scrollLeft());
    $('.table1-head th:nth-child(1)').css("left", $(".table1-body").scrollLeft()); //fix the first cell of the header
    $('.table1-body td:nth-child(1)').css("left", $(".table1-body").scrollLeft()); //fix the first column of tdbody
    $('.table2-head th:nth-child(1)').css("left", $(".table2-body").scrollLeft());
    $('.table2-body td:nth-child(1)').css("left", $(".table2-body").scrollLeft());
    $('.table3-head th:nth-child(1)').css("left", $(".table3-body").scrollLeft());
    $('.table3-body td:nth-child(1)').css("left", $(".table3-body").scrollLeft());
    $('.table4-head th:nth-child(1)').css("left", $(".table4-body").scrollLeft());
    $('.table4-body td:nth-child(1)').css("left", $(".table4-body").scrollLeft());
    $('.table5-head th:nth-child(1)').css("left", $(".table5-body").scrollLeft());
    $('.table5-body td:nth-child(1)').css("left", $(".table5-body").scrollLeft());
    $('.table6-head th:nth-child(1)').css("left", $(".table6-body").scrollLeft());
    $('.table6-body td:nth-child(1)').css("left", $(".table6-body").scrollLeft());

});
});
