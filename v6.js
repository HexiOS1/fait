var app = new Vue({
			el: "#app",
			data() {
				return {
					ifshow: true,
					checked: false,
					radio: '1',
					activeSelect: '',
					selectOption: [{
				
					}],
					input: "",
					showOption: false,
					tabValue: "one",
				}
			},
			mounted() {
				this.setRect(360, 320);

				//设置不可拖动
				setWindowDrag(0, 0, 0, 0);
    
				var layout = function()
				{
					//window.orientation是设备握持方向, 不是屏幕显示方向
					if(window.lastorientation==window.orientation) return;
					window.lastorientation=window.orientation;
				
					//window.screen中的宽高不会随着屏幕旋转更新(只会在初始化的时候固定)
					if(Math.abs(window.orientation)==90) {
						//横屏模式
						setWindowRect(0,0,window.screen.height,window.screen.width);
					} else {
						//竖屏模式
						setWindowRect(0,0,window.screen.width,window.screen.height);
					}
				}
	
				layout(); //设置旋转屏幕时自动调整布局和画布
				window.addEventListener("orientationchange", layout, false);

				setButtonAction(function () {
					var menu = document.querySelector("#app");
					if (menu.style.display == 'none') {
						menu.style.display = 'block';
						//显示菜单之后, 设置触控不可穿透悬浮窗口
						setWindowTouch(true);
					} else {
						menu.style.display = 'none';
						//隐藏菜单之后, 设置触控穿透悬浮窗口
						setWindowTouch(false);
					}
				});
			},

			methods: {
    setRect(w, h, x = -1, y = -1) {
     var boxW = w;
     var boxH = h;

     var ayMenu = this.$refs.menuMain;
     ayMenu.style.width = `${boxW}px`;
     ayMenu.style.height = `${boxH}px`;
     if (x == -1) ayMenu.style.left = `calc(50% - ${boxW / 2}px)`;
     if (y == -1) ayMenu.style.top = `calc(50% - ${boxH / 2}px)`;

 ayMenu.style.width= "400px";
 ayMenu.style.height= "240px";

            
			

    ayMenu.style.borderBottomLeftRadius = "10px";
    ayMenu.style.borderBottomRightRadius = "10px";
    ayMenu.style.borderTopLeftRadius = "10px";
    ayMenu.style.borderTopRightRadius = "10px";              
    },
    titleTouchStart(event) {

     this.touchStartX = parseInt(event.touches[0].clientX);
     this.touchStartY = parseInt(event.touches[0].clientY);

     var ayMenu = this.$refs.menuMain;
     this.menuLastX = ayMenu.offsetLeft;
     this.menuLastY = ayMenu.offsetTop;
	 document.ayimgui.style.height = '1px';
	 document.container.style.height = '1px';
	 document.aybody.style.height = '1px';
	 document.aytab.style.height = '1px';
		
    },
    titleTouchMove(event) {
     event.preventDefault();
     var distanceX = event.touches[0].clientX - this.touchStartX;
     var distanceY = event.touches[0].clientY - this.touchStartY;

     var ayMenu = this.$refs.menuMain;
     ayMenu.style.left = this.menuLastX + distanceX + "px";
     ayMenu.style.top = this.menuLastY + distanceY + "px";
    },
    //切换导航栏
    changeTab(v) {
     this.tabValue = v;
    },
    closeimgui() {
     var menu = document.querySelector("#app");
     menu.style.display = 'none';
    }
   }
  });
	
	function so01() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function so02() {
    h5gg.editAll('4397530849749489418', 'I64');

    vant.showNotify({
        type: 'success',
        message: '10x'
    });

}

function so03() {
    h5gg.editAll('4397530849764387586', 'I64');
    vant.showNotify({
        type: 'success',
        message: '還原'
    });

}


function so05() {
    h5gg.editAll('4397530849741637681', 'I64');
    vant.showNotify({
        type: 'success',
        message: '50x'
    });

}

function so06() {
    h5gg.editAll('4397530849758414897', 'I64');
    vant.showNotify({
        type: 'success',
        message: '2x'
    });

}








function so89() {
    h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({
        type: 'success',
        message: '快切'
    });


}

function s04() {
    h5gg.clearResults();
    h5gg.searchNumber('4609164001829663539', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4620693218765517619', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Success'
    });


}

function s05() {
    h5gg.clearResults();
    h5gg.searchNumber('1065856532', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('1073741824', 'I64');

    vant.showNotify({
        type: 'success',
        message: 'Success'
    });


}

function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    vant.showNotify({
        type: 'success',
        message: '肩膀天線'
    });


}



function so91() {
    h5gg.clearResults();
    h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 20);




        {
            h5gg.setValue(dizhi0, 200, "F32");
        }
    }
    h5gg.clearResults();
    h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848125002066881600', 'I64');
    vant.showNotify({
        type: 'success',
        message: '超細手線'
    });


}

function so92() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848124999899886606', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
    h5gg.editAll('4848125002034454477', 'I64');
    vant.showNotify({
        type: 'success',
        message: '微粗手線'
    });


}

function sk() {
    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");
    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);
        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);




        {
            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: '遊戲靈敏'
    });

}

function s100s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
            h5gg.setValue(dizhi2, 0, "I32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切準心'
    });


}

function s101s() {
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);



        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");

        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });


}


	 	function Norecoil() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')}
				
				

function aimfov() {
		function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1053273620, -2000, 'I32')
		searchAndReplace(1057048494, -2000, 'I32')
        searchAndReplace(1054951342, -2000, 'I32')}
			
				
				  function aimscope() {
        function searchAndReplace(searchValue,
        replaceValue,
        type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue,
        type,
        '0x100000000',
        '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(0.09, 180, 'F32')}
				
				
				
	
	
function s08() {
    h5gg.clearResults();
    h5gg.searchNumber('4728779608739021057', 'I64', '0x100000000', '0x150000000');

    alert('Sear(' + h5gg.getResultsCount() + ')');

    var count = h5gg.getResultsCount(); //获取总共搜索结果个数

    var r = h5gg.getResults(count); //获取总共搜索结果个数的数组

    //开始循环遍历

    for (var i = 0; i < count; i++) {

        var addr1 = r[i].address; //获取每个搜索结果的地址 address弟子 value值 type类型

        var weishu = /18$/; //设置置顶结尾

        var pd = weishu.test(addr1); //判断地址是否包含指定结尾



        var dizhi1 = (Number(addr1) + 4);




        if (pd) {
            h5gg.setValue(dizhi1, 100, "F32");


        }
    }
    vant.showNotify({
        type: 'success',
        message: 'ON !!'
    });


}

function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    vant.showNotify({
        type: 'success',
        message: 'ON !!'
    });
}

function s56() {
    h5gg.clearResults();
    h5gg.searchNumber('3.741467e-43', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('0.07~0.0899999', 'F32', '0x20');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('0.0068~0.00915', 'F32', '0x20');
    h5gg.searchNearby('0.01', 'F32', '0x45');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.searchNearby('2', 'I32', '0x4');
    h5gg.searchNumber('0.07~0.0899999', 'F32', '0x100000000', '0x170000000');
    h5gg.editAll('0.135', "F32");
    vant.showNotify({
        type: 'success',
        message: '人物鎖頭'
    });
}
function s105s() {
h5gg.clearResults();
h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
var cnt = 0;
for(var i=0; i<count; i++) {
    var addr1 = r[i].address;

var dizhi0 = (Number(addr1) + 8);

   


{
h5gg.setValue(dizhi0, 2139095040, "I32");

   }
}
vant.showNotify({
        type: 'success',
        message: 'AWM自瞄'
    });
}




function s2296() {
    h5gg.clearResults();
    h5gg.searchNumber('8128164201335532067', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;

        var dizhi0 = (Number(addr1) + 4);
        var dizhi1 = (Number(addr1) + -12);
        var dizhi2 = (Number(addr1) + -16);
        var dizhi3 = (Number(addr1) + -20);
        var dizhi4 = (Number(addr1) + -48);




        {
            h5gg.setValue(dizhi0, 2753558450, "I32");
            h5gg.setValue(dizhi1, 13, "F32");
            h5gg.setValue(dizhi2, 13, "F32");
            h5gg.setValue(dizhi3, 13, "F32");
            h5gg.setValue(dizhi4, 0.7, "F32");

        }
    }


    h5gg.clearResults();
    h5gg.searchNumber('506812498028', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;


        var dizhi1 = (Number(addr1) + 180);
        var dizhi2 = (Number(addr1) + 184);
        var dizhi3 = (Number(addr1) + 188);
        var dizhi4 = (Number(addr1) + 192);
        var dizhi5 = (Number(addr1) + 196);
        var dizhi6 = (Number(addr1) + 200);




        {
            h5gg.setValue(dizhi1, 5439583, "I32");
            h5gg.setValue(dizhi2, 6881392, "I32");
            h5gg.setValue(dizhi3, 6619246, "I32");
            h5gg.setValue(dizhi4, 0, "I32");
            h5gg.setValue(dizhi5, 0, "I32");
            h5gg.setValue(dizhi6, 0, "I32");

        }
    }

    vant.showNotify({
        type: 'success',
        message: '範圍'
				})
