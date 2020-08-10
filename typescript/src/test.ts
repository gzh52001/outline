/**
     * 类型注解和类型检查
     * 声明变量是要指定数据类型
        * 数据类型
            * String
            * Number
            * Boolean: true,false
            * Null: null
            * Undefined: undefined
            * Object
            * Symbol
    * 强类与弱类
 */

let username:string = 'laoxie';
// username = 999 // 报错


// 联合类型
let qty:number|string = 10
qty = '20';


// 对多个变量使用相同的联合类型写法:类型别名
type nsType = number|string;
// let age:number|string = 18
// let score:number|string = 18
let age:nsType = 18
let score:nsType = 18


// 类型推论：如果没有指定数据类型，ts编译器会根据变量的值自动推断数据类型
let className = 'h52001';// 等效于：let className:string = 'h52001'


// 复杂数据类型的注解与校验
// 对象: 接口

interface Iuser{
    username:string,

    // 只读属性
    readonly age:number,
    password:string|number,
    danshenDog:boolean

    // say();

    // 可选属性
    gender?:string

    // 任意属性
    [propName: string]: any
}

const laoxie:Iuser = {
    username:'laoxie',
    age:18,
    password:1234,
    danshenDog:false,
    gender:'男',
    say(){
        return 'xxx'
    }
}

const jj:Iuser = {
    username:'jingjing',
    age:36,
    password:123,
    danshenDog:true,
    hobby:['男','篮球']
}

// laoxie.age = 38;// 报错


// 函数类型定义
// 1. 定义参数类型
// 2. 定义返回类型

// 声明式函数
function getData(url:string,page:number):number{
    return page;
}

// 赋值式
// 1. 给函数指定类型
// 2. 给变量指定类型
const getUser:(url:string,page?:number)=>void = function(url:string,page?:number):void{

}

interface IgetUser{
    (url:string,page:number):void
}
const getPeple:IgetUser = (url:string,page:number=1):void=>{

}

// 数组
const arr:number[] = [10,20,30];

// 利用泛型定义数组类型
const arr2:Array<number> = [10,20,30];

// 元组
let arr3:[number,number,string] = [10,20,'h5']

// 复杂数组
interface Igoods{
    name:string,
    price:number,
    qty?:number
}
const goodslist:Igoods[] = [{
    name:'huawei mate40 pro',
    price:6998,
    qty:1
},{
    name:'xiaomi 10 pro',
    price:4998,
    qty:10
}];

const goodslist2:Array<Igoods> = [
    {
        name:'huawei mate40 pro',
        price:6998,
        qty:1
    },{
        name:'xiaomi 10 pro',
        price:4998
    }
]


// 类
class Person{
    // 声明一个共有属性
    // public classNam:string;
    public username:string = "aaaa";
    private readonly age:number = 18;
    protected gender:string = 'male'
    say(){
        this.age;
    }
}

class Student extends Person{
    public a:number;
    constructor(){
        super();
        this.a = 10;

        this.username;
        this.gender;
    }
}

const p = new Person();
p.username;
// p.age;//保存，私有属性只能在类中访问
// p.gender;

const s = new Student();
s.username;// aaa
s.a;//10
// s.age;// 私有属性不能被继承

