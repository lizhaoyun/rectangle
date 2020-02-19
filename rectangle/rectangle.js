$(function(){
    /**
     * CSS选择器 重要
     * 先得到元素
     * 计算button的click事件
     * 得到值
     * 计算
     * 输出
     */
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $length=$('#length'),
        $area=$('#area');
    
        $btnCal.click(function () { 
            var w = Number($width.val()),
                h=Number($height.val());
            var p=2*(w+h),
                a=w*h;
            $length.val(p);
            $area.val(a);
            
        });
})