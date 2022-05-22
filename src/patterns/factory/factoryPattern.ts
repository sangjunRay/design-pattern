//숫자나 문자열을 전달함에 따라 다른 타입의 객체를 생성, 전달받은 값에 따라 다른 객체를 생성하여 인스턴스의 타입을 정합니다.
export const num = new Object(26);
export const str = new Object('ray');

export const numConstructor = num.constructor.name;
export const strConstructor = str.constructor.name;

//팩토리 패턴을 기반으로 맥북 공장을 추상화
class Macbook14 {
  private name: string;
  constructor() {
    this.name = 'Macbook 14';
  }
}

class Macbook16 {
  private name: string;
  constructor() {
    this.name = 'Macbook 16';
  }
}

class Macbook14Factory {
  static createMacbook() {
    return new Macbook14();
  }
}

class Macbook16Factory {
  static createMacbook() {
    return new Macbook16();
  }
}

const factoryList = {Macbook14Factory, Macbook16Factory};

class MacbookFactory {
  static createMacbook(type: Macbook14Factory | Macbook16Factory) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const factory = factoryList[type];
    return factory.createMacbook();
  }
}

export const createMacbook14 = () => {
  const macbook = MacbookFactory.createMacbook('Macbook14Factory');
  console.log(macbook.name);
};

export const createMacbook16 = () => {
  const macbook = MacbookFactory.createMacbook('Macbook16Factory');
  console.log(macbook.name);
};
