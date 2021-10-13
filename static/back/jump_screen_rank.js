function MyLayer1(options) {
    this.options = options;
}

var namee = ["", "", "", "", "", "", "", "", "", ""];
var score = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

MyLayer1.prototype.openLayer = function () {
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
    span_title.style.marginLeft = "176px";
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

    for(let i = 0; i < 10 - 1; i++) {
        for(let j = 0; j < 10 - 1 - i; j++) {
            if(parseInt(score[j], 10) > parseInt(score[j+1], 10)) {
                var tmp_n = namee[j];
                namee[j] = namee[j+1];
                namee[j+1] = tmp_n;

                var tmp_s = score[j];
                score[j] = score[j+1];
                score[j+1] = tmp_s;
            }
        }
    }
    // console.log(namee);
    // console.log(score);

    var newlabel_1 = document.createElement("p");
    newlabel_1.id = "r_label_1";
    newlabel_1.innerText = "NO.1  " + namee[9] + "  " + score[9];
    newlabel_1.style.fontSize = "50px";
    newlabel_1.style.marginTop = "50px";
    newlabel_1.style.marginBottom = "50px";
    newlabel_1.style.marginLeft = "50px";
    newlabel_1.style.marginRight = "50px";
    newlabel_1.style.textAlign = "left";
    newlabel_1.style.verticalAlign = "middle";
    newlabel_1.style.color = "white";
    newlabel_1.style.textAlign = "justify";
    newlabel_1.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_1);

    var newlabel_2 = document.createElement("p");
    newlabel_2.id = "r_label_2";
    newlabel_2.innerText = "NO.2  " + namee[8] + "  " + score[8];
    newlabel_2.style.fontSize = "50px";
    newlabel_2.style.marginTop = "50px";
    newlabel_2.style.marginBottom = "50px";
    newlabel_2.style.marginLeft = "50px";
    newlabel_2.style.marginRight = "50px";
    newlabel_2.style.textAlign = "left";
    newlabel_2.style.verticalAlign = "middle";
    newlabel_2.style.color = "white";
    newlabel_2.style.textAlign = "justify";
    newlabel_2.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_2);

    var newlabel_3 = document.createElement("p");
    newlabel_3.id = "r_label_3";
    newlabel_3.innerText = "NO.3  " + namee[7] + "  " + score[7];
    newlabel_3.style.fontSize = "50px";
    newlabel_3.style.marginTop = "50px";
    newlabel_3.style.marginBottom = "50px";
    newlabel_3.style.marginLeft = "50px";
    newlabel_3.style.marginRight = "50px";
    newlabel_3.style.textAlign = "left";
    newlabel_3.style.verticalAlign = "middle";
    newlabel_3.style.color = "white";
    newlabel_3.style.textAlign = "justify";
    newlabel_3.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_3);

    var newlabel_4 = document.createElement("p");
    newlabel_4.id = "r_label_3";
    newlabel_4.innerText = "NO.4  " + namee[6] + "  " + score[6];
    newlabel_4.style.fontSize = "50px";
    newlabel_4.style.marginTop = "50px";
    newlabel_4.style.marginBottom = "50px";
    newlabel_4.style.marginLeft = "50px";
    newlabel_4.style.marginRight = "50px";
    newlabel_4.style.textAlign = "left";
    newlabel_4.style.verticalAlign = "middle";
    newlabel_4.style.color = "white";
    newlabel_4.style.textAlign = "justify";
    newlabel_4.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_4);

    var newlabel_5 = document.createElement("p");
    newlabel_5.id = "r_label_3";
    newlabel_5.innerText = "NO.5  " + namee[5] + "  " + score[5];
    newlabel_5.style.fontSize = "50px";
    newlabel_5.style.marginTop = "50px";
    newlabel_5.style.marginBottom = "50px";
    newlabel_5.style.marginLeft = "50px";
    newlabel_5.style.marginRight = "50px";
    newlabel_5.style.textAlign = "left";
    newlabel_5.style.verticalAlign = "middle";
    newlabel_5.style.color = "white";
    newlabel_5.style.textAlign = "justify";
    newlabel_5.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_5);

    var newlabel_6 = document.createElement("p");
    newlabel_6.id = "r_label_3";
    newlabel_6.innerText = "NO.6  " + namee[4] + "  " + score[4];
    newlabel_6.style.fontSize = "50px";
    newlabel_6.style.marginTop = "50px";
    newlabel_6.style.marginBottom = "50px";
    newlabel_6.style.marginLeft = "50px";
    newlabel_6.style.marginRight = "50px";
    newlabel_6.style.textAlign = "left";
    newlabel_6.style.verticalAlign = "middle";
    newlabel_6.style.color = "white";
    newlabel_6.style.textAlign = "justify";
    newlabel_6.style.textAlignLast = "justify";
    open_layer.appendChild(newlabel_6);

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