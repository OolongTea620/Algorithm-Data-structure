/**
 * 구현 연습을 위한 class 문법
 */
class Student {
  constructor(firstName, lastName, year = 0) {
    // class에서의 this -> 생성된 새 객체의 오브젝트, 인스턴스를 가리킴
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }
  fullName() {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
  // 객체 생성 시 접근해서 사용할 수 있음
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  // static : 클래스에 종속되지만 반드시 클래스에 종속될 필요가 없는 메소드 혹은 기능
  static enrollStudents(...students) {
    //maybe send email here
    console.log("enroll students");
  }
}

const std1 = new Student("hyelin", "Kim"); // new 키워드로 생성
console.log(std1.fullName());
const std2 = new Student("dkdk", "la");

Student.enrollStudents(std1, std2); // static 함수를 사용할 때는 객체를 생성할 필요가 없다.
