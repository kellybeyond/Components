function Toast(){

}
Toast.prototype={
    toast(time,...values){
        this.box=document.createElement('div');
        this.list=document.createElement('ul');
        this.lis=[]
        for(let i=0;i<values.length;i++){
            this.lis[i]=document.createElement('li');
            this.lis[i].innerText=values[i].toString();
            this.list.appendChild(this.lis[i]);
        }
        this.box.appendChild(this.list);
        this.width=this.box.style.width;
        this.height=this.box.style.height;
        this.box.setAttribute('style',`background-color:pink;position:absolute;left:50%;top:50%;margin-left:${-this.width/2};margin-top:${-this.height/2}`)
        document.querySelector('body').appendChild(this.box);
        this.dis=setTimeout(function(){
            document.querySelector('body').remove(this.box);
        },1000*time)
    }
}