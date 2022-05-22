//ex1) new object 로 객체를 생성하면 어느 객체와도 다르기 때문에 그 자체로도 싱글톤 패턴이 구현 가능하다.
export const obj1 = {
  ray: '박상준',
  age: 26,
};

export const obj2 = {
  ray: '박상준',
  age: 26,
};

//ex2) class 로 싱글톤패턴 구현하기 같은 인스턴스를 가지는 singleton 클래스 구현
class Singleton {
  public static instance: any;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

export const singletonA = new Singleton();
export const singletonB = new Singleton();

//ex3) 싱글톤 패턴은 데이터베이스 연결 모듈에 많이 쓰입니다. DB.instance 라는 하나의 인스턴스를 기반으로 새로운 커넥션 a,b를 생성합니다.
const URL = 'example://raylocalhost:4208/rayapp';
const createConnection = (url: string) => ({url: url});

class DB {
  private static instance: {url: string};
  constructor(url: string) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }
    return DB[Symbol.hasInstance];
  }
  /* connect() {
    return this.instance
 }
   */
}

export const SingletonDB1 = new DB(URL);
export const SingletonDB2 = new DB(URL);
