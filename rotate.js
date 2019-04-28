function Rotate(width,height,...imgList){
}
Rotate.prototype={
    rotate(width,height,...imgList){
        this.box=document.createElement('div');
        this.rotateList=[];
        this.k=0,this.lens
        this.state=0;
        this.box.setAttribute('style',`position: absolute;left: 50%;top: 50%;width:${width}px;height:${height}px;margin-left: -${width/2}px;
    margin-top: -${height/2}px;overflow: hidden;`)
        for(let i=0;i<imgList.length;i++){
            this.rotateList[i]=document.createElement('img');
            this.rotateList[i].setAttribute('src',imgList[i]);

            this.rotateList[i].setAttribute('style',`position: absolute;left: ${i*width}px;width: ${width}px;height: ${height}px;transition: all 1s;`);
            this.box.appendChild(this.rotateList[i]);                    
        }
        document.querySelector('body').appendChild(this.box)
        
        this.run=function(){
            if(this.state==0){//正轮播阶段
                this.k++
                if(this.k==imgList.length-1){
                    this.state=1;
                }        
                for(let i=0;i<imgList.length;i++){
                    this.lens=-width*this.k+i*width
                    this.rotateList[i].setAttribute('style',`position: absolute;left:${this.lens}px;width: ${width}px;height: ${height}px;transition: all 1s;`)
                }
            }else{//反轮播阶段
                this.k--
                if(this.k==0){
                    this.state=0;
                }
                for(let i=0;i<imgList.length;i++){
                    this.lens=-width*this.k+i*width                          
                    this.rotateList[i].setAttribute('style',`position: absolute;left:${this.lens}px;width: ${width}px;height: ${height}px;transition: all 1s;`)
                }
            }      
        }
        setInterval(this.run.bind(this),1000*3)
    }  
}