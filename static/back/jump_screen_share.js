function MyLayer2(options) {
    this.options = options;
}
MyLayer2.prototype.openLayer = function () {
    var background_layer = document.createElement("div");
    background_layer.style.display = "none";
    background_layer.style.position = "absolute";
    background_layer.style.top = "0px";
    background_layer.style.left = "0px";
    background_layer.style.width = "100%";
    background_layer.style.height = "100%";
    background_layer.style.backgroundColor = "gray";
    background_layer.style.zIndex = "1001";
    background_layer.style.opacity = "0.8" ;

    var open_layer = document.createElement("div");
    open_layer.style.display = "none";
    open_layer.style.position = "absolute";
    open_layer.style.top = this.options.top === undefined ? "10%" : this.options.top;
    open_layer.style.left = this.options.left === undefined ? "10%" :this.options.left;
    open_layer.style.width = this.options.width === undefined ? "80%" : this.options.width;
    open_layer.style.height = this.options.height === undefined ? "80%" : this.options.height;
    open_layer.style.border = "1px solid lightblue";
    open_layer.style.borderRadius = "60px" ;
    open_layer.style.boxShadow = "4px 4px 10px #171414";
    open_layer.style.backgroundColor = "black";
    open_layer.style.zIndex = "1002";
    open_layer.style.overflow = "auto";

    var div_toolBar = document.createElement("div");
    div_toolBar.style.textAlign = "right";
    div_toolBar.style.paddingTop = "10px" ;
    div_toolBar.style.backgroundColor = "aliceblue";
    div_toolBar.style.height = "40px";

    var span_title = document.createElement("span");
    span_title.style.fontSize = "35px";
    span_title.style.color = "black" ;
    span_title.style.float = "left";
    span_title.style.marginLeft = "48px";
    span_title.style.marginBottom = "3px";

    var span_title_content = document.createTextNode(this.options.title === undefined ? "" : this.options.title);
    span_title.appendChild(span_title_content);
    div_toolBar.appendChild(span_title);

    var span_close = document.createElement("span");
    span_close.style.fontSize = "30px";
    span_close.style.color = "red" ;
    span_close.style.cursor = "pointer";
    span_close.style.marginTop = "1px";
    span_close.style.marginRight = "35px";
    span_close.onclick = function () {
        open_layer.style.display = "none";
        background_layer.style.display = "none";
    };

    var span_close_content = document.createTextNode("x");
    span_close.appendChild(span_close_content);
    div_toolBar.appendChild(span_close);
    open_layer.appendChild(div_toolBar);

    var share_ul = document.createElement('ul');
    share_ul.style.marginLeft = "50px";
    share_ul.style.marginTop = "50px";

    var share_li_1 = document.createElement('li');
    share_li_1.innerHTML="<a href='https://www.facebook.com/sharer/sharer.php?u=&quote=' title='Share on Facebook' target='_blank'><img alt='Share on Facebook' src='./other/Facebook.svg' style='height:200px;width:200px;'/></a>";
    share_li_1.style.display = "inline";
    share_ul.appendChild(share_li_1);

    var share_li_2 = document.createElement('li');
    share_li_2.innerHTML="<a href='https://twitter.com/intent/tweet?source=&text=:%20' target='_blank' title='Tweet'><img alt='Tweet' src='./other/Twitter.svg' style='height:200px;width:200px;'/></a>"
    share_li_2.style.display = "inline";
    share_ul.appendChild(share_li_2);

    var share_li_3 = document.createElement('li');
    share_li_3.innerHTML="<a href='http://www.reddit.com/submit?url=&title=' target='_blank' title='Submit to Reddit'><img alt='Submit to Reddit' src='./other/Reddit.svg' style='height:200px;width:200px;'/></a>";
    share_li_3.style.display = "inline";
    share_ul.appendChild(share_li_3);

    var share_li_4 = document.createElement('li');
    share_li_4.innerHTML="<a href='mailto:?subject=&body=:%20' target='_blank' title='Send email'><img alt='Send email' src='./other/Email.svg' style='height:200px;width:200px;'/></a>";
    share_li_4.style.display = "inline";
    share_ul.appendChild(share_li_4);

    open_layer.appendChild(share_ul);

    var div_content = document.createElement("div");
    div_content.style.textAlign = "left";
    div_content.style.color = "white";
    div_content.style.marginTop = "20px";
    div_content.style.marginBottom = "20px";
    div_content.style.marginLeft = "50px";
    div_content.style.marginRight = "50px";

    var content_area = document.createTextNode(this.options.content === undefined ? "" : this.options.content);
    div_content.appendChild(content_area);
    open_layer.appendChild(div_content);
    document.body.appendChild(open_layer);
    document.body.appendChild(background_layer);
    open_layer.style.display = "block" ;
    background_layer.style.display = "block";
};