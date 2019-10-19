let ErrorRePattern = {
    NameError_Pattern: /'.*?'/g,
    SyntaxError_Pattern: /print\(.*?\)/g,
    KeyboardInterrupt_Pattern: /print\(.*?\)/g,
    StopIteration_Pattern: /print\(.*?\)/g,
    GeneratorExit_Pattern: /print\(.*?\)/g,
    StandardError_Pattern: /print\(.*?\)/g,
    ArithmeticError_Pattern: /print\(.*?\)/g,
    FloatingPointError_Pattern: /print\(.*?\)/g,
    OverflowError_Pattern: /print\(.*?\)/g,
    ZeroDivisionError_Pattern: /print\(.*?\)/g,
    AssertionError_Pattern: /print\(.*?\)/g,
    AttributeError_Pattern: /print\(.*?\)/g,
    EOFError_Pattern: /print\(.*?\)/g,
    EnvironmentError_Pattern: /print\(.*?\)/g,
    IOError_Pattern: /print\(.*?\)/g,
    OSError_Pattern: /print\(.*?\)/g,
    WindowsError_Pattern: /print\(.*?\)/g,
    ImportError_Pattern: /print\(.*?\)/g,
    LookupError_Pattern: /print\(.*?\)/g,
    IndexError_Pattern: /print\(.*?\)/g,
    MemoryError_Pattern: /print\(.*?\)/g,
    UnboundLocalError_Pattern: /print\(.*?\)/g,
    ReferenceError_Pattern: /print\(.*?\)/g,
    RuntimeError_Pattern: /print\(.*?\)/g,
    NotImplementedError_Pattern: /print\(.*?\)/g,
    IndentationError_Pattern: /print\(.*?\)/g,
    TabError_Pattern: /print\(.*?\)/g,
    SystemError_Pattern: /print\(.*?\)/g,
    TypeError_Pattern: "",//  # TypeError
    ValueError_Pattern: /print\(.*?\)/g,
    UnicodeError_Pattern: /print\(.*?\)/g,
    UnicodeDecodeError_Pattern: /print\(.*?\)/g,
    UnicodeTranslateError_Pattern: /print\(.*?\)/g,
    Warning_Pattern: /print\(.*?\)/g,
    DeprecationWarning_Pattern: /print\(.*?\)/g,
    FutureWarning_Pattern: /print\(.*?\)/g,
    OverflowWarning_Pattern: /print\(.*?\)/g,
    PendingDeprecationWarning_Pattern: /print\(.*?\)/g,
    RuntimeWarning_Pattern: /print\(.*?\)/g,
    SyntaxWarning_Pattern: /print\(.*?\)/g,
    UserWarning_Pattern: /print\(.*?\)/g,
}


const NameErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 \"%s\" 未被定义。",
}};

const SyntaxErrorDict = {
    "invalid syntax": {"re_pattern": /invalid( )syntax/g,
                       "trans_msg": "语法有误%s,请检查。"},
    "Missing parentheses in call to 'print'. Did you mean ?":
        {"re_pattern": /Missing parentheses in call to 'print'. Did you mean print\((.*?)\)/g,
         "trans_msg": "使用'print'时缺少括号，您是准备 print(%s)?"},
    "can't assign to literal": {"re_pattern": /can't assign to( )literal/g,
                                "trans_msg": "不能得到结果%s。"},
    "EOL while scanning string literal": {"re_pattern": /EOL while scanning string( )literal/g,
                                          "trans_msg": "语法不完整,请再仔细检查{%s}。"},
    "unexpected EOF while parsing": {"re_pattern": /gunexpected EOF while( )parsing/g,
                                     "trans_msg": "不能正常解析，请再检查{}。"},
    "bad input": {"re_pattern": /bad( )input/g,
    "trans_msg": "输入有误。"}
}

const KeyboardInterruptDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const StopIterationDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const GeneratorExitDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const StandardErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const ArithmeticErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const FloatingPointErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const OverflowErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const ZeroDivisionErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const AssertionErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const AttributeErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const EOFErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const EnvironmentErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const IOErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const OSErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const WindowsErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const ImportErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const LookupErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const IndexErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const MemoryErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const UnboundLocalErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}
const ReferenceErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const RuntimeErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const NotImplementedErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const IndentationErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const TabErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const SystemErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const TypeErrorDict = {
    "unsupported operand type(s) for +: 'int' and 'str'":
        {"re_pattern": /unsupported operand( )type\(s\) for \+: 'int' and 'str'/g,
         "trans_msg": "不支持 'int' 与 'str' 进行 '+' 操作"},
    "can't multiply sequence by non-int of type 'str'": {
        "re_pattern": /can't multiply( )sequence by non-int of type 'str'/g,
        "trans_msg": "非'int'类型不能与'str'进行乘法运算"
        },
    "unsupported operand type(s) for Add: 'int' and 'str'":
        {"re_pattern": /unsupported operand( )type\(s\) for Add: 'int' and 'str'/g,
         "trans_msg": "不支持 'int' 与 'str' 进行 '+' 操作"},
}

const ValueErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const UnicodeErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const UnicodeDecodeErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const UnicodeTranslateErrorDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const WarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const DeprecationWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const FutureWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const OverflowWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const PendingDeprecationWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const RuntimeWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const SyntaxWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 %s 未被定义。"},
}

const UserWarningDict = {
    "name  is not defined": {"re_pattern": /name '(.*)' is not defined/g,
                             "trans_msg": "变量名 \"{}\" 未被定义"},
}

const TRANSLATION_DICT = {
        "NameError": ["名称错误", NameErrorDict, ErrorRePattern.NameError_Pattern],
        "SyntaxError": ["语法错误", SyntaxErrorDict, ErrorRePattern.SyntaxError_Pattern],
        "KeyboardInterrupt": ["用户中断程序", KeyboardInterruptDict, ErrorRePattern.KeyboardInterrupt_Pattern],
        "StopIteration": ["迭代器没有更多的值", StopIterationDict, ErrorRePattern.StopIteration_Pattern],
        "GeneratorExit": ["生成器发生异常", GeneratorExitDict, ErrorRePattern.GeneratorExit_Pattern],
        "StandardError": ["内建异常", StandardErrorDict, ErrorRePattern.StandardError_Pattern],
        "ArithmeticError": ["数值计算错误", ArithmeticErrorDict, ErrorRePattern.ArithmeticError_Pattern],
        "FloatingPointError": ["浮点计算错误", FloatingPointErrorDict, ErrorRePattern.FloatingPointError_Pattern],
        "OverflowError": ["数值运算超出最大限制", OverflowErrorDict, ErrorRePattern.OverflowError_Pattern],
        "ZeroDivisionError": ["零不能作为被除数", ZeroDivisionErrorDict, ErrorRePattern.ZeroDivisionError_Pattern],
        "AssertionError": ["断言语句失败", AssertionErrorDict, ErrorRePattern.AssertionError_Pattern],
        "AttributeError": ["属性错误", AttributeErrorDict, ErrorRePattern.AttributeError_Pattern],
        "EOFError": ["语句不完整", EOFErrorDict, ErrorRePattern.EOFError_Pattern],
        "EnvironmentError": ["操作系统错误", EnvironmentErrorDict, ErrorRePattern.EnvironmentError_Pattern],
        "IOError": ["输入/输出错误", IOErrorDict, ErrorRePattern.IOError_Pattern],
        "OSError": ["操作系统错误", OSErrorDict, ErrorRePattern.OSError_Pattern],
        "WindowsError": ["系统调用错误", WindowsErrorDict, ErrorRePattern.WindowsError_Pattern],
        "ImportError": ["导入错误", ImportErrorDict, ErrorRePattern.ImportError_Pattern],
        "LookupError": ["无效数据查询的基类", LookupErrorDict, ErrorRePattern.LookupError_Pattern],
        "IndexError": ["索引错误", IndexErrorDict, ErrorRePattern.IndexError_Pattern],
        "MemoryError": ["内存错误", MemoryErrorDict, ErrorRePattern.MemoryError_Pattern],
        "UnboundLocalError": ["非绑定错误", UnboundLocalErrorDict, ErrorRePattern.UnboundLocalError_Pattern],
        "ReferenceError": ["访问错误", ReferenceErrorDict, ErrorRePattern.ReferenceError_Pattern],
        "RuntimeError": ["运行错误", RuntimeErrorDict, ErrorRePattern.RuntimeError_Pattern],
        "NotImplementedError": ["尚未实现的方法", NotImplementedErrorDict, ErrorRePattern.NotImplementedError_Pattern],
        "IndentationError": ["缩进错误", IndentationErrorDict, ErrorRePattern.IndentationError_Pattern],
        "TabError": ["Tab和空格混用", TabErrorDict, ErrorRePattern.TabError_Pattern],
        "SystemError": ["解释器系统错误", SystemErrorDict, ErrorRePattern.SystemError_Pattern],
        "TypeError": ["对类型的无效操作", TypeErrorDict, ErrorRePattern.TypeError_Pattern],
        "ValueError": ["参数错误", ValueErrorDict, ErrorRePattern.ValueError_Pattern],
        "UnicodeError": ["Unicode编码错误", UnicodeErrorDict, ErrorRePattern.UnicodeError_Pattern],
        "UnicodeDecodeError": ["Unicode解码错误", UnicodeDecodeErrorDict, ErrorRePattern.UnicodeDecodeError_Pattern],
        "UnicodeTranslateError": ["Unicode转换错误", UnicodeTranslateErrorDict, ErrorRePattern.UnicodeTranslateError_Pattern],
        "Warning": ["警告", WarningDict, ErrorRePattern.Warning_Pattern],
        "DeprecationWarning": ["被弃用特征警告", DeprecationWarningDict, ErrorRePattern.DeprecationWarning_Pattern],
        "FutureWarning": ["Unicode编码错误", FutureWarningDict, ErrorRePattern.FutureWarning_Pattern],
        "OverflowWarning": ["长整型转换警告", OverflowWarningDict, ErrorRePattern.OverflowWarning_Pattern],
        "PendingDeprecationWarning": [
            "特征弃用警告", PendingDeprecationWarningDict, ErrorRePattern.PendingDeprecationWarning_Pattern],
        "RuntimeWarning": ["可疑运行警告", RuntimeWarningDict, ErrorRePattern.RuntimeWarning_Pattern],
        "SyntaxWarning": ["可疑语法警告", SyntaxWarningDict, ErrorRePattern.SyntaxWarning_Pattern],
        "UserWarning": ["用户代码生成警告", UserWarningDict, ErrorRePattern.UserWarning_Pattern],
};

function searchBaseError(errorType){
    return TRANSLATION_DICT[errorType] || ["", "", ""]
}
function subErrorContent(content, pattern){
    return content.replace(pattern, "")
}

function getTransData(errorData, errorContent, resMsg){
    const pattern = errorData["re_pattern"];
    const transMsg = errorData["trans_msg"];
    const tmpPattern = new RegExp(pattern)
    let reData = tmpPattern.exec(errorContent)

    if (reData) {
        const [, tmpMsg, ..._] = reData;
        return transMsg.split("%s").join(tmpMsg)

    } else {
        return ""
    }
}

skErrorTrans = function () {
    var i, chineseFlag;
    var ret = "";
    var chineseRet = "";
    ret += this.tp$name;
    let [resMsg, errorMap, pat] = searchBaseError(this.tp$name);
    chineseRet += resMsg;
    chineseFlag = chineseRet;

    if (this.args) {
        const errorContent = this.args.v.length > 0 ? this.args.v[0].v : "";
        ret += ": " + errorContent;
        if (chineseFlag){
            console.log("errorContent:", errorContent)
            let errorData = errorMap[pat ? subErrorContent(errorContent, pat) : errorContent] || "";
            if (errorData){
                let checkChildErrorData = getTransData(errorData, errorContent)
                console.log("checkChildErrorData:", checkChildErrorData)
                if (!checkChildErrorData){
                    chineseRet = ""
                } else {
                    chineseRet += ": ";
                    chineseRet += checkChildErrorData;
                }
            } else {
                chineseRet = ""
            }
        } else {
            chineseRet = ""
        }
    }
    if (this.traceback.length !== 0) {
        ret += " on line " + this.traceback[0].lineno;
        chineseRet += chineseRet? "在第" + this.traceback[0].lineno + "行" : "";
    } else {
        ret += " at <unknown>";
    }
    // ret 为错误信息
    console.log("ret1:", ret);
    if (this.args.v.length > 4) {
        ret += "\n" + this.args.v[4].v + "\n";
        for (i = 0; i < this.args.v[3]; ++i) {
            ret += " ";
        }
        ret += "^\n";
    }
    ret += "$-$";
    ret += chineseRet;
    console.log("ret2:", ret);

    return new Sk.builtin.str(ret);
};
