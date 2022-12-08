$(function() {
  $('#small_image img').on('click', function() {
    var url = $(this).attr('src');
    $('#big_image img').attr('src', url);
  })
})