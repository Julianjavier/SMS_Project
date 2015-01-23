Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

Date.prototype.addMinutes= function(m){
    this.setMinutes(this.getMinutes()+m);
    return this;
}

Date.prototype.addSeconds= function(s){
    this.setSeconds(this.getSeconds()+s);
    return this;
}

alert(new Date().addHours(4).addMinutes(4).addSeconds(4));