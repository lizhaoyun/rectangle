/* global chai describe Rectangle it: true */
    var expect = chai.expect;

describe('矩形计算器面积计算功能测试',function(){
    it('高度和宽度是整数',function(){
            var r = new Rectangle(4,5);
        expect(r.area().to.be.equal(20));
    });

    it('宽度和高度是小数',function(){
        var r= new Rectangle(0.3,0.41);
        expect(r.area().to.be.equal(0.12299999999999998));
    });

    it('高度宽度是特殊值0',function(){
        var r = new Rectangle(0,0);
        expect(r.area().to.be.equal(0));
    });

    it('高度宽度是非法字符串',function(){
        var r = new Rectangle('mk','d,');
        expect(isNaN(r.area()).to.be.ok);
    });
})

describe('矩形计算器面积计算功能测试',function(){
    it('高度和宽度是整数',function(){
        var r = new Rectangle(4,5);
        expect(r.perimeter().to.be.equal(18));
    });

    it('宽度和高度是小数',function(){
        var r= new Rectangle(0.3,0.41);
        expect(r.perimeter().to.be.equal(1.42));
    });

    it('高度宽度是特殊值0',function(){
        var r = new Rectangle(0,0);
        expect(r.perimeter().to.be.equal(0));
    });

    it('高度宽度是非法字符串',function(){
        var r = new Rectangle('mk','d,');
        expect(isNaN(r.area()).to.be.ok);
    });
})