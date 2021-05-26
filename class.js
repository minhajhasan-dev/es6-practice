class Student{
    constructor(sId, sName){
        this.ID = sId;
        this.Name = sName;
        this.School = "Sourov School"
    }
}
const student1 = new Student(12, "Minhaj Hasan");
const student2 = new Student(13, "Sima Islam");

console.log(student1.Name, student2.Name);

