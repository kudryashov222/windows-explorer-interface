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

var FoldersModel = function () {
    var self = this;

    self.flag = ko.observable(false);
    self.itemName = ko.observable("");
    self.typechoos = ko.observable();
    self.openmenu = ko.observable("");
    self.opensubmenu = ko.observable("");
    self.home = ko.observable("");

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
            }
           for(var j in self.fils()[i].files){
                if(self.fils()[i].files[j].name == task.name){
                    self.allItems(self.fils()[i].files[j].files);
                    self.opensubmenu(task.name);
                    self.flag(true);
                }
           }
       }
    };

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

    // self.double = function () {
    //     console.log("333");
    // };


};

ko.applyBindings(new FoldersModel());
