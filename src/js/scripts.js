// var FoldersModel = function(folders) {
//     var self = this;

//     self.addname = ko.observable("");

//     self.folders = ko.observableArray(ko.utils.arrayMap(folders, function(folder) {
//         return { folderName: folder.name, files: ko.observableArray(folder.files), type: folder.type};
//     }));
//     self.flaf = ko.observable(false);

//     self.addFile = function() {
//         self.folders.push({ files: ko.observableArray({"name": "sdfs"})});
//         console.log("444");
//     };


//     self.fold2 = function(task) {
//         self.flaf(true);

//         self.folders(ko.utils.arrayMap(folders, function(folder) {
//             return { folderName: folder.files[0].name, files: ko.observableArray(folder.files[0].files), type: folder.type};
//         }));

//         console.log(task);
//     };

//     self.fold1 = function(task) {
//         self.flaf(true);

//         self.folders(ko.utils.arrayMap(folders, function(folder) {
//              return { folderName: folder.name, files: ko.observableArray(folder.files), type: folder.type};
//         }));

//         console.log(task);
//     };
//     // self.folders = ko.observableArray(ko.utils.arrayMap(folders, function(folder) {
//     //     // console.log(folder.files[0].files[0].name);
//     //     // for (var i = 0; i < folder.files.length; i++) {
//     //     //     console.log(folder.files[i].files.length);
//     //     //     if(folder.files[i].files.length > 0){
//     //     //         console.log(folder.files[i]);
//     //     //     }
//     //     // };
//     //     // console.log(folder.files[0].files);
//     //     if(self.flaf() == false) {
//     //         return { folderName: folder.files[0].name, files: ko.observableArray(folder.files[0].files) };
//     //     }else {
//     //         return { folderName: folder.name, files: ko.observableArray(folder.files)};
//     //     }

//     //     // console.log(self.folders());

//     // }));

//     self.folders2 = ko.observableArray(ko.utils.arrayMap(folders, function(folder) {
//         console.log(folder.type);
//         return { folderName2: folder.files[0].name, files2: ko.observableArray(folder.files[0].files), type: folder.files[0].type };
//     }));

//     self.selectedFolder = ko.observable(" ");
//     self.selectedFolder1 = ko.observable(" ");

//     self.viewFolder = function(task) {
//         // self.folders.push(task);
//         // self.folders = ko.observableArray(ko.utils.arrayMap(folders, function(folder) {

//         //     return { folderName: folder.files[0].name, files: ko.observableArray(folder.files[0].files) };
//         // }));
//         // console.log(task);
//         console.log(self.folders());
//         // console.log(self.selectedFolder);
//         // for (var i in task.files) {
//         //     self.folder1.push({files: task.files[i].files});
//         // // console.log(task.files[i]);
//         // };
//         // console.log(self.folders());
//         // console.log(self.folder1());

//         // if(task.files[0]) {
//         //     self.folders = ko.observableArray(ko.utils.arrayMap(folders, function(folder) {

//         //         return { folderName: folder.files[0].name, files: ko.observableArray(folder.files[0].files) };
//         //     }));
//         // }
//     };

// };

// var data = [
//     {"name":"Folder1","type": 1,"files":[
//         {"name":"Folder1-1", "type": 1,
//             "files": [{"name":"file 12", "type": 2}, {"name":"file 13", "type": 2}]},
//         {"name":"file 2", "type": 2},
//         {"name":"file 3", "type": 2},
//         {"name":"file 4", "type": 2},
//         {"name":"file 5", "type": 2},
//         {"name":"file 6", "type": 2},
//         {"name":"file 7", "type": 2},
//         {"name":"file 8", "type": 2},
//         {"name":"file 9", "type": 2}]},
//     {"name":"Folder2","type": 1,"files":[
//         {"name":"9090", "type": 2},
//         {"name":"file 4", "type": 2}
//     ]}
// ]

// ko.applyBindings(new FoldersModel(data));

$(function() {

  var $contextMenu = $("#contextMenu");

  $("body").on("contextmenu", ".window", function(e) {
    $contextMenu.css({
      display: "block",
      left: e.pageX,
      top: e.pageY
    });
    return false;
  });

  $("body").on("click", function() {
     $contextMenu.hide();
  });

  $(".window").resizable({});

});

var FoldersModel = function () {
    var self = this;

    self.flag = ko.observable(false);
    self.itemName = ko.observable("");
    self.typechoos = ko.observable();
    self.openmenu = ko.observable("");
    self.opensubmenu = ko.observable("");
    self.home = ko.observable("");
    self.num = ko.observable(0);
    self.num2 = ko.observable(0);
    self.sum = ko.observable("");


    self.fils = ko.observableArray([
        {name: "folder1", type: 1, files:[{name: "File 1", type: 2 },{ name: "File 2", type: 2 }]},
        {name: "folder2", type: 1, files:[{name: "File 3", type: 2 },{ name: "File 4", type: 2 }]},
        {name: "folder3", type: 1, files:[{name: "File 5", type: 2 },{ name: "File 6", type: 2 }]},
        {name: "folder4", type: 1, files:[
            {name: "folder4-1", type: 1, files:[{name: "File 12", type: 2 },{ name: "File 13", type: 2 }]},
            {name: "File 7", type: 2 },{ name: "File 8", type: 2 }]},
        {name: "folder5", type: 1, files:[
            {name: "folder5-1", type: 1, files:[{name: "File 14", type: 2 },{ name: "File 15", type: 2 }]},
            {name: "File 9", type: 2 },{ name: "File 10", type: 2 }]}
     ]);

    // console.log(self.fils().length);

    self.allItems = ko.observableArray('');

    self.homeReset = function() {
        self.home('');
        self.openmenu('');
        self.opensubmenu('');
        self.allItems('');
    };


    self.openFolder = function(task) {

        for(var i in self.fils()){
            if(self.fils()[i].name == task.name){
                self.allItems(self.fils()[i].files);
                self.openmenu(task.name);
                self.home(1);
                self.opensubmenu('');
                self.flag(true);

                var sum = self.allItems().length;
                console.log(self.allItems());
                if (sum) {
                    if (self.allItems()[sum-1].num) {
                        if (self.allItems()[sum-1].type == 1) {
                            if (self.num() !== 0) {
                                self.num((self.allItems()[sum-1].num) + 1);
                            }
                        }
                    } else {
                        self.num(0);
                    }
                }



            }
            for(var j in self.fils()[i].files){
                if(self.fils()[i].files[j].name == task.name){
                    self.allItems(self.fils()[i].files[j].files);
                    self.opensubmenu(task.name);
                    self.flag(true);
                }
            }
        }
        // if(self.num() == 0) {
        //    self.num(0);
        // }
        // else if (self.num()>0) {
        //    var sum = self.allItems()[self.allItems().length -1].num;
        //    return self.num(sum);
        // }
        // else {
        //    console.log("no");
        //    self.num(0);
        // }
    };

    self.editing = ko.observable(true);
    self.edit = function() {this.editing(true);};

    self.addfile = function () {
        if (self.home() == '') {
            self.fils.push({ name: this.itemName(), type: this.typechoos(), files: [] });
        }
        else {
            if ((this.itemName() !== "") && (this.allItems.indexOf(this.itemName()) < 0)) {
                self.allItems.push({ name: this.itemName(), type: this.typechoos() });
            }
        }
    };

    var file = function(name) {
        var option = {name: name};
        return option;
    };
    var num = 0;
    self.addItemFold = function(task) {
        // console.log(self.num());
        if (self.home() == '') {
            self.fils.push({ name: new file('New Folder(').name+self.num() +")", type: 1, files: [], num: self.num()});
        }
        else {
            self.allItems.push({ name: new file('New Folder(').name+self.num() +")", type: 1, files: [], num: self.num()});
        }
        num = num + 1;
        self.num(num);
    }
    self.addItemDoc = function(task) {
        self.allItems.push({ name: file('New Doc(').name+self.num2() +")", type: 2 , num: self.num()});
        num = num + 1;
        self.num2(num);
    }


    // ko.bindingHandlers.singleClick= {

    //     init: function(element, valueAccessor) {
    //         var handler = valueAccessor(),
    //             delay = 40,
    //             clickTimeout = false;

    //         $(element).click(function() {
    //             if(clickTimeout !== false) {
    //                 clearTimeout(clickTimeout);
    //                 clickTimeout = false;
    //             } else {
    //                 clickTimeout = setTimeout(function() {
    //                     clickTimeout = false;
    //                     handler();
    //                 }, delay);
    //             }
    //         });
    //     }
    // };
    // function setposition(e) {
    //     var bodyOffsets = document.body.getBoundingClientRect();
    //     tempX = e.pageX - bodyOffsets.left;
    //     tempY = e.pageY;
    //     console.log($(this));
    //     $(".dropdown-menu").css({ 'top': tempY, 'left': tempX });
    // }

    // $('.folder-list a').mousedown(function(event) {
    //         console.log("444");
    //     if(event.which == 3){
    //         // setposition(event);
    //     }
    // });


};

ko.applyBindings(new FoldersModel());
