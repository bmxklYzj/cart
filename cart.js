$(document).ready(function () {

    // 一个cartItem包括多个cartItemContent,既，一个店可以有多个商品
    var cartItem = $('.cart-item');
    var cartItemContent = $('.cart-item-content');
    var footer = $('.footer');

    // 设置头部总个数
    $('.header-center-amount .cnt').html(cartItemContent.length);

    cartItem.delegate('.edit', 'click', function () {
        $(this).parents('.cart-item').find('.cart-item-content-operation').toggle();
        if ($(this).html() === '编辑') {
            $(this).html('完成');
        } else {
            $(this).html('编辑');
            // 点击完成要重新设置数目
            var $item = $(this).parents('.cart-item').find('.cart-item-content');
            $.each($item, function (index, item) {
                var num = $(item).find('.cart-item-content-operation .num').html();
                $(item).find('.text-wrap .price .count').html(num);

                // 设置价格
                var int = $(item).find('.text-wrap .price-now .int').html();
                var decimal = $(item).find('.text-wrap .price-now .decimal').html();
                var price = '' + int + '.' + decimal;
                price = Number(price);
            });
        }
    });

    // 增删个数按钮
    var cartItemOperation = $('.cart-item-content-operation');
    cartItemOperation.delegate('.dec', 'click', function () {
        var numDom = $(this).next();
        var num  = numDom.html();
        num = parseInt(num, 10);
        if (num <= 1) {
            alert('亲，不能再减少了~');
        } else {
            num--;
            numDom.html(num);
        }
    });
    cartItemOperation.delegate('.inc', 'click', function () {
        var numDom = $(this).prev();
        var num  = numDom.html();
        num = parseInt(num, 10);
        num++;
        numDom.html(num);
    });
    cartItemOperation.delegate('.del', 'click', function () {
        var cnt = $(this).parents('.cart-item').find('.cart-item-content').length;
        if (cnt > 1) {
            $(this).parents('.cart-item-content').remove();
        } else {
            $(this).parents('.cart-item').remove();
        }
    });

    // checkbox按钮,每个店铺的全选按钮
    cartItem.delegate('.cart-item-head .item-all input[type="checkbox"]', 'click', function () {
        var childCheckbox = $(this).parents('.cart-item').find('.cart-item-content input[type="checkbox"]');
        if ($(this).prop('checked')) {
            $(this).prop('checked', true);
            $.each(childCheckbox, function (index, item) {
                $(item).prop('checked', true);
            });
        } else {
            $(this).prop('checked', false);
            $.each(childCheckbox, function (index, item) {
                $(item).prop('checked', false);
            });
        }
    });
    cartItem.delegate('.cart-item-content .checkbox input[type="checkbox"]', 'click', function () {
        if (!$(this).prop('checked')) {
            $(this).prop('checked', false);
            var selectAllCheckbox = $(this).parents('.cart-item').find('.cart-item-head input[type="checkbox"]');
            // if (selectAllCheckbox.prop('checked')) {
                selectAllCheckbox.prop('checked', false);
            // }
        } else {
            $(this).prop('checked', true);
            var goodsItem  = $(this).parents('.cart-item').find('.cart-item-content .checkbox input[type="checkbox"]');
            var goodsItemChecked = 0;
            $.each(goodsItem, function (index, item) {
                if ($(item).prop('checked')) {
                    goodsItemChecked++;
                }
            });
            if (goodsItem.length === goodsItemChecked) {
                $(this).parents('.cart-item').find('.cart-item-head input[type="checkbox"]').prop('checked', true);
            }
        }
    });

    // 底部全选按钮
    footer.delegate('.footer-check-all input[type="checkbox"]', 'click', function () {
        var allCheckbox = $('.cart-body').find('input[type="checkbox"]');
        if ($(this).prop('checked')) {
            $.each(allCheckbox, function (index, item) {
                $(item).prop('checked', true);
            });
        } else {
            $.each(allCheckbox, function (index, item) {
                $(item).prop('checked', false);
            });
        }
    });

    function calcTotalMoney() {
        var itemCnt = 0; // 底部需要的总个数
        var totalMoney = 0; // 底部需要的总价格
        $.each(cartItemContent, function (index, item) {
            if ($(item).find('input[type="checkbox"]').prop('checked')) {
                itemCnt++;

                // 计算价格
                var int = $(item).find('.text-wrap .price-now .int').html();
                var decimal = $(item).find('.text-wrap .price-now .decimal').html();
                var price = '' + int + '.' + decimal;
                price = Number(price);
                var cnt = $(item).find('.text-wrap .price .count').html();
                cnt = parseInt(cnt, 10);
                totalMoney +=  price * cnt;
            }
        });
        // 处理总额
        if (typeof totalMoney !== 'number') {
            totalMoney = 0.00;
        }
        var res = totalMoney.toString().split('.');
        var int = res[0];
        var decimal = Number('0.' + res[1]);
        decimal = decimal.toFixed(2);

        footer.find('.footer-money .int').html(int);
        footer.find('.footer-money .decimal').html(decimal.toString().split('.')[1]);
        footer.find('.footer-pay .total').html(itemCnt);
    }
    // 只要按下input:checkbox就触发计算函数
    $(document).delegate('input[type="checkbox"]', 'click', function () {
       calcTotalMoney();
    });

});
