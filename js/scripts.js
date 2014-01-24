// ONLY FOR PROTOTYPING PURPOSES //

$(document).ready(function() {
  // listing nav interaction
  $('.list-feature .list-group-item').click(function() {
    $(this).find('.list-group-check').toggleClass('checked');
    return false;
  });
  $('.list-group .list-group-item').click(function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $(this).parent('.list-group').find('.list-group-item').removeClass('selected');
      $(this).addClass('selected');
    };
    return false;
  });
  // add-to-cart interaction
  $('.item-cart-buttons .btn-primary').click(function() {
    $('.nav-cart-empty').hide();
    $('.nav-cart').show();
    $('.nav-cart').addClass('open');
    $('.nav-cart .dropdown-menu li:first-child').hide();
    $('.nav-cart .cart-total').hide();
    $('.nav-cart .cart-buttons').hide();
    $('.item-cart-buttons').hide();
    $('.item-cart-buttons-added').show();
    $('.cart-item a').addClass('added-item');
  });
  // show cart on nav hover
  $('.nav-cart').mouseenter(function() {
    $('.nav-cart').addClass('open');
    $('.nav-cart .dropdown-menu h3').text('My Cart');
    $('.nav-cart .dropdown-menu li:first-child').show();
    $('.nav-cart .cart-more-items').hide();
    $('.nav-cart .cart-total').show();
    $('.nav-cart .cart-buttons').show();
    $('.cart-item a').removeClass('added-item');
  });
  $('.nav-cart').mouseleave(function() {
    $('.nav-cart').removeClass('open');
  });
  // render checkout delivery calendar
  $('.calendar').pickmeup({
    flat : true
  });
  // checkout steps interaction
  $('.shipping-information .btn').click(function() {
    $('.shipping-information').removeClass('expanded');
    $('.schedule-delivery').addClass('expanded');
    $('.shipping-information').addClass('editable');
  });
  $('.schedule-delivery .btn').click(function() {
    $('.schedule-delivery').removeClass('expanded');
    $('.payment-information').addClass('expanded');
    $('.schedule-delivery').addClass('editable');
  });
  $('.shipping-information .checkout-edit').click(function() {
    $('.checkout-steps li').removeClass('expanded');
    $('.shipping-information').addClass('expanded');
    $('.shipping-information').removeClass('editable');
  });
  $('.schedule-delivery .checkout-edit').click(function() {
    $('.checkout-steps li').removeClass('expanded');
    $('.schedule-delivery').addClass('expanded');
    $('.schedule-delivery').removeClass('editable');
  });
  $('.payment-information .checkout-edit').click(function() {
    $('.checkout-steps li').removeClass('expanded');
    $('.payment-information').addClass('expanded');
    $('.payment-information').removeClass('editable');
  });
  $('.pmu-button').click(function() {
    $('.date-selected').show();
  });
  $('.payment-information .checkbox input').click(function() {
    if(!$(this).is(':checked'))
      $('.billing-address-form').show();
    else
      $('.billing-address-form').hide();
  });
});