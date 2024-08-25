"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRP = void 0;
// This principle says every class has SIngle Responisbilty acc to below code
var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.getData = function () {
        return this.data;
    };
    return Report;
}());
var ReportPrint = /** @class */ (function () {
    function ReportPrint() {
    }
    ReportPrint.prototype.print = function (report) {
        console.log(report.getData());
    };
    return ReportPrint;
}());
// =========================================================================
// ################## Singleton Pattern ###################################
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
        this.count = 0;
    }
    IdGenerator.getInstance = function () {
        if (!this.instance) {
            this.instance = new IdGenerator();
        }
        return this.instance;
    };
    Object.defineProperty(IdGenerator.prototype, "getCount", {
        get: function () {
            return this.count++;
        },
        enumerable: false,
        configurable: true
    });
    return IdGenerator;
}());
// #########################################################################
// ?????????????????????????????????????????????????????????????????????????
// Problem while generating id for singleton instance
// ======================== It was generating properly =====================
var Document = /** @class */ (function () {
    function Document(message, date) {
        this.idgenerator = IdGenerator.getInstance();
        this.id = this.idgenerator.getCount;
        this.message = message;
        this.date = new Date();
    }
    Document.prototype.print = function () {
        console.log("Print", this.id, this.message, this.date.getDay());
    };
    return Document;
}());
// ??????????????????????????????????????????????????????????????????????????
// ????????????????????? Solution for upper problem ?????????????????????????
// Generator id instance by direct object
var idGenerator = {
    count: 0,
    next: function () {
        return ++this.count;
    }
};
var PersonalDocument = /** @class */ (function () {
    function PersonalDocument(name) {
        this.name = name;
        this.id = idGenerator.next();
    }
    PersonalDocument.prototype.show = function () {
        return "Document details: No: ".concat(this.id, " and name: ").concat(this.name);
    };
    return PersonalDocument;
}());
var PrintDocuemnt = /** @class */ (function () {
    function PrintDocuemnt() {
    }
    PrintDocuemnt.prototype.print = function (doc) {
        console.log(doc.show());
    };
    return PrintDocuemnt;
}());
// ==========================================================================
var SRP = /** @class */ (function () {
    function SRP() {
    }
    SRP.prototype.initReport = function () {
        var report = new Report("Today has heavy Rain");
        var reportTwo = new Report("We sell all over stocks today");
        var printReport = new ReportPrint();
        printReport.print(report);
        printReport.print(reportTwo);
        var doc = new Document("Text Message", new Date());
        var doc1 = new Document("Text Message ONe", new Date());
        doc.print();
        doc1.print();
        // 
        var pdVikil = new PersonalDocument("Vikil");
        var pdHrishi = new PersonalDocument("Hirshi");
        var pdJohn = new PersonalDocument("John");
        var printDOc = new PrintDocuemnt();
        printDOc.print(pdVikil);
        printDOc.print(pdHrishi);
        printDOc.print(pdJohn);
    };
    return SRP;
}());
exports.SRP = SRP;
