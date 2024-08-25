
// This principle says every class has SIngle Responisbilty acc to below code
class Report {
    private data: string;
    constructor (data: string) {
        this.data = data;
    }

    getData () {
        return this.data
    }
}


class ReportPrint {
    print (report: Report) {
        console.log(report.getData());
    }
}

// =========================================================================

// ################## Singleton Pattern ###################################
class IdGenerator {
    private static instance: IdGenerator | undefined
    private count: number;
    constructor() {
        this.count = 0
    }
    static getInstance () {
        if(!this.instance) {
            this.instance = new IdGenerator()
        }

        return this.instance
    }

    get getCount() {
        return this.count++
    }
}
// #########################################################################

// ?????????????????????????????????????????????????????????????????????????
// Problem while generating id for singleton instance
// ======================== It was generating properly =====================
class Document {
    idgenerator: IdGenerator;
    id: number;
    message: string;
    date: Date
    constructor(message: string, date: Date){
        this.idgenerator = IdGenerator.getInstance();
        this.id = this.idgenerator.getCount
        this.message = message
        this.date = new Date();
    }

    print() {
        console.log("Print", this.id, this.message, this.date.getDay() )
    }
}

// ??????????????????????????????????????????????????????????????????????????
// ????????????????????? Solution for upper problem ?????????????????????????
// Generator id instance by direct object

const idGenerator = {
    count: 0,
    next() {
        return ++this.count
    }
}
// ==========================================================================
// =========================== Actual Solution ==============================

interface IDocument {
    name: string;
    id: number;
    show(): string;
}

class PersonalDocument implements IDocument {
    name: string;
    id: number;
    constructor(name: string) {
        this.name = name;
        this.id = idGenerator.next()
    }

    show(): string {
      return `Document details: No: ${this.id} and name: ${this.name}`  
    }
}

class PrintDocuemnt {
    print(doc: IDocument) {
        console.log(doc.show())
    }
}

// ==========================================================================




export class SRP {
    initReport() {
        const report = new Report("Today has heavy Rain");
        const reportTwo = new Report("We sell all over stocks today")
        const printReport = new ReportPrint();
        printReport.print(report);
        printReport.print(reportTwo);

        const doc = new Document("Text Message", new Date());

        const doc1 = new Document("Text Message ONe", new Date());
        
        
        doc.print()
        doc1.print()

        // 

        const pdVikil = new PersonalDocument("Vikil");
        const pdHrishi = new PersonalDocument("Hirshi");
        const pdJohn = new PersonalDocument("John");
        const printDOc = new PrintDocuemnt();

        printDOc.print(pdVikil)

        printDOc.print(pdHrishi);

        printDOc.print(pdJohn)

    }
}