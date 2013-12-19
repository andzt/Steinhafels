$(document).ready(function() {
  $('.item-cart-buttons .btn-primary').click(function() {
    $('.item-cart-buttons').hide();
    $('.item-cart-buttons-added').show();
    $('.nav-cart-empty').hide();
    $('.nav-cart').show();
    $('.nav-cart').addClass('open');
  });
  $('.nav-cart').mouseenter(function() {
    $('.nav-cart').addClass('open');
  });
  $('.nav-cart').mouseleave(function() {
    $('.nav-cart').removeClass('open');
  });
});