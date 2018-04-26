!function(){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n=0;
        let id= setInterval(()=>{
            n+=1
            container.innerHTML= code.substring(0, n) //css放进code
            styleTag.innerHTML= code.substring(0, n)
            container.scrollTop= container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn&&fn.call()
            }
        },20)
    }
    let code=`
/*
*首先，需要准备皮卡丘的皮
*/    
.preview{
    height: 100%;
    border: 1px solid ;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
/*
*接下来画皮卡丘的鼻子
*/  
.wrapper .nose{
    width: 0px;
    height: 0px;
    border: 1px solid black;
    border-width: 12px;/*border宽度往里挤，因为border-box*/
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 28px;
    /* transform: translate(-50%, -50%) */
    margin-left: -12px;
    border-style: solid;
}
/*
*接下来画皮卡丘的眼睛
*/ 
.wrapper .eye{
    width: 49px;
    height: 49px;
    background-color: #2E2E2E;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #000;
}
/*
*眼睛里面的珠子
*/ 
.wrapper .eye::before{/*左右眼的before*/
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid ;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: -1px;
}
/*
*左边左眼
*/ 
.wrapper .eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
*右边右眼
*/ 
.wrapper .eye.right{
    left: 50%;
    margin-left: 90px;
}
/*
*然后， 画皮卡丘的脸
*/ 
.wrapper .face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
*将脸放到正确的位置
*/ 
.wrapper .face.left{
    right: 50%;
    margin-right: 116px;
}
.wrapper .face.right{
    left: 50%;
    margin-left: 116px;
}
/*
*画上嘴唇
*/ 
.wrapper .upperLip{
    width: 80px;
    height: 25px;
    border: 2px solid black;
    position: absolute;
    top: 47px;
    background: #FEE433;
}
.wrapper .upperLip.left{
    right: 50%;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
    border-bottom-left-radius: 40px 25px;
}
.wrapper .upperLip.right{
    left: 50%;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
    border-bottom-right-radius: 40px 25px;
}
/*
*下嘴唇
*/ 
.wrapper .lowerLip-wrapper{
    width: 300px;
    height: 110px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
    z-index: -1;
}
.wrapper .lowerLip{
    width: 300px;
    height: 3500px;
    border: 1px solid;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/*
*小舌头
*/ 
.wrapper .lowerLip::after{
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #FC4A62;
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -50px;
}
/*
*好了，这只皮卡丘送给你~~~
*/ 
    `
writeCode('', code)

}.call()