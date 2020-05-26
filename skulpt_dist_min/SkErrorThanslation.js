const NameErrorDict = {
    'is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 "%s" 未被定义。'
    }
}

const SyntaxErrorDict = {
    'invalid syntax': {
        re_pattern: /invalid( )syntax/i,
        trans_msg: '语法有误%s,请检查。'
    },
    "Missing parentheses in call to 'print'. Did you mean ?": {
        re_pattern: /Missing parentheses in call to 'print'. Did you mean print\((.*?)\)/i,
        trans_msg: "使用'print'时缺少括号，你是准备 print(%s)?"
    },
    "can't assign to literal": {
        re_pattern: /can't assign to( )literal/i,
        trans_msg: '不能得到结果%s。'
    },
    'EOL while scanning string literal': {
        re_pattern: /EOL while scanning string( )literal/i,
        trans_msg: '语法不完整,请再仔细检查%s。'
    },
    'unexpected EOF while parsing': {
        re_pattern: /unexpected EOF while( )parsing/g,
        trans_msg: '不能正常解析，请再检查。'
    },
    'bad input': {
        re_pattern: /bad( )input/i,
        trans_msg: '输入有误。'
    },
    'bad token': {
        re_pattern: /bad( )token/i,
        trans_msg: '标识符错误。'
    },
    'invalid character in identifier': {
        re_pattern: /invalid character( )in identifier/i,
        trans_msg: '代码中标识符出现了无效字符。'
    },
    "can't use starred expression here": {
        re_pattern: /can't use starred( )expression here/i,
        trans_msg: '此处不能用星号表达式。'
    },
    "EOF while scanning triple-quoted string literal": {
        re_pattern: /EOF while scanning triple-quoted( )string literal/i,
        trans_msg: '三引号字符串有问题，再检查一下。'
    },


}

const KeyboardInterruptDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const StopIterationDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const GeneratorExitDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const StandardErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const ArithmeticErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const FloatingPointErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const OverflowErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const ZeroDivisionErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const AssertionErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const AttributeErrorDict = {
    ' object has no attribute ': {
        re_pattern: /'(.*?)' object has no attribute '(.*)'/i,
        trans_msg: "'%s'对象没有 '%s' 属性。"
    }
}
const EOFErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const EnvironmentErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const IOErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const OSErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const WindowsErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const ImportErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const LookupErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const IndexErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const MemoryErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const UnboundLocalErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}
const ReferenceErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const RuntimeErrorDict = {
    'Expected 2 tuples or 4 ints as input': {
        re_pattern: /Expected 2( )tuples or 4 ints as input/i,
        trans_msg: '期望参数类型为 2个 元组 或者 4 个 整数类型。'
    }
}

const NotImplementedErrorDict = {
    'Not yet implemented': {
        re_pattern: /Not yet( )implemented/i,
        trans_msg: '尚未实现'
    }
}

const IndentationErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const TabErrorDict = {
    'inconsistent use of tabs and spaces in indentation': {
        re_pattern: /inconsistent use( )of tabs and spaces in indentation/i,
        trans_msg: '缩进时，不能混用制表符（Tab）和空格（Spaces）,只能选其一。'
    }
}

const SystemErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const TypeErrorDict = {
    "unsupported operand type(s) for +: 'int' and 'str'": {
        re_pattern: /unsupported operand( )type\(s\) for \+: 'int' and 'str'/i,
        trans_msg: "不支持 'int' 与 'str' 进行 '+' 操作"
    },
    "can't multiply sequence by non-int of type 'str'": {
        re_pattern: /can't multiply( )sequence by non-int of type 'str'/i,
        trans_msg: "非'int'类型不能与'str'进行乘法运算"
    },
    "unsupported operand type(s) for Add: 'int' and 'str'": {
        re_pattern: /unsupported operand( )type\(s\) for Add: 'int' and 'str'/i,
        trans_msg: "不支持 'int' 与 'str' 进行 '+' 操作"
    },
    'argument 1 must be 2-item sequence, not int': {
        re_pattern: /argument 1( )must be 2-item sequence, not int/i,
        trans_msg: '参数 1 必须为长度为 2 的序列，不是 整型'
    },
    'is an invalid keyword argument for': {
        re_pattern: /'(.*?)' is an invalid keyword argument for (.*)/i,
        trans_msg: '\'%s\' 对 %s 来说不是一个有效的关键词参数。'
    },
    'the second argument must be a Pygame color': {
        re_pattern: /the second argument must be a Pygame( )color/i,
        trans_msg: '第二个参数需要是一个 Pygame color 类型。'
    },
    'Argument must be rect style object': {
        re_pattern: /Argument must be rect style( )object/i,
        trans_msg: '参数必须为一个 Rect 类型'
    },
    'argument must contain two numbers': {
        re_pattern: /argument must contain( )two numbers/i,
        trans_msg: '参数需要包含两个数字'
    },
    'Argument must be a sequence of rectstyle objects.': {
        re_pattern: /Argument must be a sequence of( )rectstyle objects./i,
        trans_msg: '参数需要为一个全为 Rect 对象的序列。'
    },
    'argument 1 must be 2-item sequence, not ': {
        re_pattern: /argument 1 must be 2-item sequence, not (.*)/i,
        trans_msg: '第一个参数必须为有两个数据的序列，而不是 %s。'
    },
    'invalid position argument for ': {
        re_pattern: /invalid position argument for (.*)/i,
        trans_msg: '对 %s 来说是无效的位置参数。'
    },
    'Wrong arguments': {
        re_pattern: /Wrong( )arguments/i,
        trans_msg: '参数错误'
    },
    'the first argument must be a pair': {
        re_pattern: /the first( )argument must be a pair/i,
        trans_msg: '第一个参数必须为有两个值的列表或者元组'
    },
    'argument must be a pair': {
        re_pattern: /argument( )must be a pair/i,
        trans_msg: '参数必须为有两个值的列表或者元组'
    },
    '\' object is not iterable': {
        re_pattern: /'(.*)' object is not iterable/i,
        trans_msg: '%s 对象不能迭代， 必须是一个可迭代对象。'
    },
    'argument must be str, not int': {
        re_pattern: /(.*) argument must be str, not int/i,
        trans_msg: '%s 的参数必须为字符串，而不是整型。'
    },
    'not supported between instances of': {
        re_pattern: /(.*?)' not supported between instances of '(.*?)' and '(.*?)'/i,
        trans_msg: '\'%s\'不支持在\'%s\'和\'%s\'之间进行比较。'
    },
    'format: a number is required, not ': {
        re_pattern: /%(.*?) format: a number is required, not (.*)/i,
        trans_msg: '%%s 格式化: 需要一个数字，而不是 %s。'
    },
}

const ValueErrorDict = {
    "Number is too large, don't over than 1,000,000": {
        re_pattern: /Number is too( )large, don't over than 1,000,000/i,
        trans_msg: '数值太大了，不能超过 1,000,000。'
    },
    "not in default shape, please check shape again!": {
        re_pattern: /"Shape:'(.*?)' not in default shape, please check shape again!"/i,
        trans_msg: '形状:\'%s\' 不在默认形状中，请检查形状'
    }
}

const UnicodeErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const UnicodeDecodeErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const UnicodeTranslateErrorDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const WarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const DeprecationWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const FutureWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const OverflowWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const PendingDeprecationWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const RuntimeWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const SyntaxWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 %s 未被定义。'
    }
}

const UserWarningDict = {
    'name  is not defined': {
        re_pattern: /name '(.*)' is not defined/i,
        trans_msg: '变量名 "{}" 未被定义'
    }
}

const TRANSLATION_DICT = {
    NameError: ['名称错误', NameErrorDict],
    SyntaxError: [
        '语法错误',
        SyntaxErrorDict
    ],
    KeyboardInterrupt: [
        '用户中断程序',
        KeyboardInterruptDict
    ],
    StopIteration: [
        '迭代器没有更多的值',
        StopIterationDict
    ],
    GeneratorExit: [
        '生成器发生异常',
        GeneratorExitDict
    ],
    StandardError: [
        '内建异常',
        StandardErrorDict
    ],
    ArithmeticError: [
        '数值计算错误',
        ArithmeticErrorDict
    ],
    FloatingPointError: [
        '浮点计算错误',
        FloatingPointErrorDict
    ],
    OverflowError: [
        '数值运算超出最大限制',
        OverflowErrorDict
    ],
    ZeroDivisionError: [
        '零不能作为被除数',
        ZeroDivisionErrorDict
    ],
    AssertionError: [
        '断言语句失败',
        AssertionErrorDict
    ],
    AttributeError: [
        '属性错误',
        AttributeErrorDict
    ],
    EOFError: ['语句不完整', EOFErrorDict],
    EnvironmentError: [
        '操作系统错误',
        EnvironmentErrorDict
    ],
    IOError: ['输入/输出错误', IOErrorDict],
    OSError: ['操作系统错误', OSErrorDict],
    WindowsError: [
        '系统调用错误',
        WindowsErrorDict
    ],
    ImportError: [
        '导入错误',
        ImportErrorDict
    ],
    LookupError: [
        '无效数据查询的基类',
        LookupErrorDict
    ],
    IndexError: ['索引错误', IndexErrorDict],
    MemoryError: [
        '内存错误',
        MemoryErrorDict
    ],
    UnboundLocalError: [
        '非绑定错误',
        UnboundLocalErrorDict
    ],
    ReferenceError: [
        '访问错误',
        ReferenceErrorDict
    ],
    RuntimeError: [
        '运行错误',
        RuntimeErrorDict
    ],
    NotImplementedError: [
        '尚未实现的方法',
        NotImplementedErrorDict
    ],
    IndentationError: [
        '缩进错误',
        IndentationErrorDict
    ],
    TabError: ['Tab和空格混用', TabErrorDict],
    SystemError: [
        '解释器系统错误',
        SystemErrorDict
    ],
    TypeError: [
        '对类型的无效操作',
        TypeErrorDict
    ],
    ValueError: ['参数错误', ValueErrorDict],
    UnicodeError: [
        'Unicode编码错误',
        UnicodeErrorDict
    ],
    UnicodeDecodeError: [
        'Unicode解码错误',
        UnicodeDecodeErrorDict
    ],
    UnicodeTranslateError: [
        'Unicode转换错误',
        UnicodeTranslateErrorDict
    ],
    Warning: ['警告', WarningDict],
    DeprecationWarning: [
        '被弃用特征警告',
        DeprecationWarningDict
    ],
    FutureWarning: [
        'Unicode编码错误',
        FutureWarningDict
    ],
    OverflowWarning: [
        '长整型转换警告',
        OverflowWarningDict
    ],
    PendingDeprecationWarning: [
        '特征弃用警告',
        PendingDeprecationWarningDict
    ],
    RuntimeWarning: [
        '可疑运行警告',
        RuntimeWarningDict
    ],
    SyntaxWarning: [
        '可疑语法警告',
        SyntaxWarningDict
    ],
    UserWarning: [
        '用户代码生成警告',
        UserWarningDict
    ]
}

function searchBaseError(errorType) {
    return TRANSLATION_DICT[errorType] || ['', '']
}


function getTransData(errorData, errorContent) {
    const pattern = errorData['re_pattern']
    let transMsg = errorData['trans_msg']
    const tmpPattern = new RegExp(pattern)
    // let reData = tmpPattern.exec(errorContent)
    let reData = errorContent.match(tmpPattern)
    if (reData) {
        const tmpMsg = reData.slice(1, reData.length)
        tmpMsg.forEach(function (data) {
            transMsg = transMsg.replace('%s', data)
        })
        if (errorContent.endsWith('is not defined')) {
            return addBuiltinKwError(transMsg, tmpMsg[0])
        }
        return transMsg
    }
    return ''
}

const SkulptKwArray = [
    'range',
    'round',
    'len',
    'min',
    'max',
    'sum',
    'zip',
    'abs',
    'ord',
    'chr',
    'hex',
    'oct',
    'bin',
    'dir',
    'repr',
    'open',
    'isinstance',
    'hash',
    'getattr',
    'hasattr',
    'id',
    'map',
    'filter',
    'reduce',
    'sorted',
    'any',
    'all',
    'AttributeError',
    'ValueError',
    'Exception',
    'ZeroDivisionError',
    'AssertionError',
    'ImportError',
    'IndentationError',
    'IndexError',
    'KeyError',
    'TypeError',
    'NameError',
    'IOError',
    'NotImplementedError',
    'StandardError',
    'SystemExit',
    'OverflowError',
    'OperationError',
    'NegativePowerError',
    'RuntimeError',
    'StopIteration',
    'TabError',
    'float',
    'int',
    'bool',
    'complex',
    'enumerate',
    'dict',
    'file',
    'function',
    'generator',
    'list',
    'object',
    'slice',
    'str',
    'set',
    'tuple',
    'type',
    'input',
    'quit',
    'exit',
    'print',
    'divmod',
    'format',
    'globals',
    'issubclass',
    'iter'
]

const addChineseTranslate = function (transData, baseData) {
    const signArray = transData[transData.length - 1]
    if (objIsArray(signArray)) {
        const sign = signArray[signArray.length - 1]
        if (sign === 'ChineseCharMap') {
            const errorChar = signArray[0]
            const targetChar = Sk.token.ChineseCharMap[errorChar]
            if (targetChar) {
                return (
                    baseData +
                    '\n' +
                    spellCharError(errorChar, targetChar, getLineNum(baseData))
                )
            }
        } else if (sign === 'ChineseAttribute') {
            const sameRate = 3
            const [errorName, checkObj] = signArray.slice(0, 2)
            const checkArray = checkObj ? Object.keys(checkObj) : []
            const resArray = checkSimilarRate(sameRate, checkArray, errorName)
            if (resArray.length > 0) {
                return (
                    baseData +
                    '\n' +
                    spellError(errorName, resArray, getLineNum(baseData))
                )
            }
        }
    }
    return baseData
}

/*
获取报错信息中的 line 行数
 */

function getLineNum(errorData) {
    const checkPattern = new RegExp(/在第(?<line>\d+)/i)
    const tmpData = errorData.match(checkPattern)

    const res = tmpData ? tmpData.groups ? tmpData.groups.line : tmpData[1] : ""
    if (res) {
        return res
    }
    return undefined
}

/*
检查单次和数组中的单词的相似度
 */
const checkSimilarRate = function (editDistant, checkArray, baseData) {
    const topN = 1
    let tmpArray = []
    checkArray.forEach(function (data) {
        if (
            data.length - baseData.length < 2 &&
            data.length - baseData.length > -2
        ) {
            const editDistance = calculatingSimilarity(data, baseData)
            if (editDistant >= editDistance) {
                tmpArray.push([editDistance, data])
            }
        }
    })
    tmpArray = tmpArray.sort(sortNumber)
    let resArray = []

    for (
        let i = 0, len = topN < tmpArray.length ? topN : tmpArray.length;
        i < len;
        i++
    ) {
        resArray.push(tmpArray[i][1])
    }
    return resArray
}

/*
 * 从大到小的排序
 * */
function sortNumber(a, b) {
    return -(b[0] - a[0])
}

/*
编辑距离
 */
function minDistance(s1, s2) {
    const len1 = s1.length
    const len2 = s2.length

    let matrix = []

    for (let i = 0; i <= len1; i++) {
        // 构造二维数组
        matrix[i] = []
        for (let j = 0; j <= len2; j++) {
            // 初始化
            if (i === 0) {
                matrix[i][j] = j
            } else if (j === 0) {
                matrix[i][j] = i
            } else {
                // 进行最小值分析
                let cost = 0
                if (s1[i - 1] !== s2[j - 1]) { // 相同为0，不同置1
                    cost = 1
                }
                const temp = matrix[i - 1][j - 1] + cost

                matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, temp)
            }
        }
    }
    return matrix[len1][len2] //返回右下角的值
}


const calculatingSimilarity = function (baseData, target) {
    return minDistance(baseData, target)
}

/*
 * 判断对象是否为数组
 * */

const objIsArray = function (obj) {
    if (!Array.isArray) {
        return Object.prototype.toString.call(obj) === '[object Array]'
    }
    return Array.isArray(obj)
}

/*
符号错误
 */
function spellCharError(kwName, char, lineData) {
    if (lineData) {
        return (
            "【智能纠错】:" + "第" + lineData + "行 字符'" +
            kwName +
            "'为中文格式，请修改为英文格式的: \"" +
            char +
            '"后重试。'
        )
    }
    return (
        "【智能纠错】:" + "字符'" +
        kwName +
        "'为中文格式，请修改为英文格式的: \"" +
        char +
        '"后重试。'
    )
}

/*
拼写错误
 */
function spellError(kwName, resArray, lineData) {
    if (lineData) {
        return (
            "【智能纠错】:" + "第" + lineData + "行 '" +
            kwName +
            "'拼写可能有错，你可能想输入: \"" +
            resArray.toString() +
            '"'
        )
    }
    return (
        "【智能纠错】:'" +
        kwName +
        "'拼写可能有错，你可能想输入: \"" +
        resArray.toString() +
        '"'
    )
}

function spellChineseError(errorData, lineData) {
    let [firData, ...secData] = errorData.split(":")
    firData += (": 第" + lineData + "行")
    return firData + secData.join(":")

}

/*
 * 得到内置关键词错误
 * */

function addBuiltinKwError(transData, kwName, lineData) {
    const resArray = checkSimilarRate(3, SkulptKwArray, kwName)
    if (resArray.length > 0) {
        return (
            transData +
            '\n' + spellError(kwName, resArray, lineData)

        )
    }
    return transData
}

/*
匹配pattern 错误
 */
const patternMath = function (errorContent, errorMap) {
    for (let key in errorMap) {
        if (errorContent.indexOf(key) !== -1) {
            return errorMap[key]
        }
    }

}

/*
 * 获取翻译后的数据。
 * */

const getAllTransData = function (
    chineseRet,
    errorContent,
    chineseFlag,
    errorMap,
) {
    if (chineseFlag) {
        let errorData = patternMath(errorContent, errorMap)
        if (errorData) {
            let checkChildErrorData = getTransData(errorData, errorContent)
            if (checkChildErrorData) {
                chineseRet += ': '
                chineseRet += checkChildErrorData
                return chineseRet
            }
        }
    }
    return ''
}
/*
错误信息：多行转一行
 */
String.prototype.rsplit = function (sep, maxsplit) {
    var split = this.split(sep);
    return maxsplit ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) : split;
}
const handleStderr = function (error_msg, reduce_row_num) {
    if (error_msg.indexOf("\n") === -1) {
        return error_msg
    } else if (error_msg.split("\n").length === 2) {
        return error_msg.split("\n").join("")
    }
    if (!reduce_row_num) {
        reduce_row_num = 0
    }
    const split_data = "\n"
    const line_pattern = new RegExp(/.*?, line (?<line>\d+),.*?/i)

    let [, , re_data, , error] = error_msg.rsplit(split_data, 4)
    let tmpData = re_data.match(line_pattern)

    // const line_num_tmp = Array.from(re_data.match(line_pattern), m => m.groups ? m.groups.line : m[1])
    if (tmpData) {
        const line_num_tmp = tmpData ? tmpData.groups ? tmpData.groups.line : tmpData[1] : ""
        const lineNum = parseFloat(line_num_tmp) - reduce_row_num
        return error + ", on line " + lineNum + " ."
    } else {
        // 第二种报错格式
        const line_pattern = new RegExp(/, line (?<line>\d+)/i)
        let [, re_data, , , error] = error_msg.rsplit(split_data, 4)
        tmpData = re_data.match(line_pattern)
        if (!tmpData) {
            [re_data, , , , error] = error_msg.rsplit(split_data, 4)
            tmpData = re_data.match(line_pattern)
        }
        if (tmpData) {
            const line_num_tmp = tmpData ? tmpData.groups ? tmpData.groups.line : tmpData[1] : ""
            const lineNum = parseFloat(line_num_tmp) - reduce_row_num
            return error + ", on line " + lineNum + " ."
        }
    }
    return error
}

function pythonIntelligenceResAdd(errorMsg, chineseTransData, lineArray) {
    if (errorMsg.indexOf("SyntaxError: invalid character in identifier") !== -1) {
        let [, , errorCharLine, checkFlag, ,] = errorMsg.rsplit("\n", 4)
        if (checkFlag.indexOf("^") === -1) {
            [, , errorCharLine, , checkFlag,] = errorMsg.rsplit("\n", 4)
        }
        let errorChar = errorCharLine.charAt(checkFlag.indexOf("^") - 1)
        errorChar = errorChar === " " ? errorCharLine.charAt(checkFlag.indexOf("^")) : errorChar
        errorChar = errorChar === " " ? errorCharLine.charAt(checkFlag.indexOf("^") + 1) : errorChar
        errorChar = errorChar.match(/\d+/i) ? errorCharLine.charAt(checkFlag.indexOf("^")) : errorChar
        const targetChar = Sk.token.ChineseCharMap[errorChar]
        if (targetChar) {
            return (
                chineseTransData +
                '\n' +
                spellCharError(errorChar, targetChar, lineArray[0])
            )
        }

    }
    return chineseTransData
}

function handleJavaStderr(error_msg) {
    const [, lineData, , , ,] = error_msg.rsplit("\n", 4)
    return lineData
}

/*
* 是否为智能纠错
*
*
* */
const isSmartErrorMsg = function (error_msg) {
    return error_msg.search("智能纠错") !== -1 && error_msg.search("想输入") !== -1
}

/*
add chinese lino nums
 */
const addChineseLinoData = function (chineseRet, lino) {
    if (chineseRet.indexOf("【智能纠错】") !== -1) {
        let [firstData, otherData] = chineseRet.split("\n", 2)
        firstData += firstData ? '在第' + lino + '行' : ''
        const lineNum = getLineNum(firstData)
        otherData = spellChineseError(otherData, lineNum)
        chineseRet = firstData + "\n" + otherData
    } else {
        chineseRet += chineseRet ? '在第' + lino + '行' : ''
    }
    return chineseRet
}

/* ----------------------------------------------------------------------------------------------------------------------------
 * sk 错误翻译逻辑。
 * */

const skErrorTrans = function () {
    var i, chineseFlag
    var ret = ''
    var chineseRet = ''
    ret += this.tp$name
    let [resMsg, errorMap] = searchBaseError(this.tp$name)
    chineseRet += resMsg
    chineseFlag = chineseRet

    if (this.args) {
        const errorContent = this.args.v.length > 0 ? this.args.v[0].v : ''
        ret += ': ' + errorContent
        chineseRet = getAllTransData(
            chineseRet,
            errorContent,
            chineseFlag,
            errorMap,
        )
    }
    if (this.traceback.length !== 0) {
        ret += ' . on line ' + this.traceback[0].lineno + ' .'
        chineseRet = addChineseLinoData(chineseRet, this.traceback[0].lineno)
    } else {
        if (this.args.v.length > 1) {
            const lineno = this.args.v[1][0]
            chineseRet = addChineseLinoData(chineseRet, lineno)
            ret += ' . on line ' + lineno + ' .'
        } else {
            ret += ' at <unknown>'
        }
    }
    // ret 为错误信息
    if (this.args.v.length > 4) {
        ret += '\n' + this.args.v[4].v
        for (i = 0; i < this.args.v[3]; ++i) {
            ret += ' '
        }
        ret += '^\n'
    }
    ret = ret.trim()
    ret += '$-$'
    chineseRet = addChineseTranslate(this.args.v, chineseRet)
    ret += chineseRet

    return new Sk.builtin.str(ret)
}

/*
获取行号与关键词
 */
const searchLineno = function (error_msg) {
    if (isSmartErrorMsg(error_msg)) {
        const tmpObj = error_msg.match(/第(?<lineno>\d+)行.*?'(?<keyword>.*)'.*?"(?<replaceKeyWord>.*)".*/)
        if (tmpObj.groups) {
            return {
                lineno: tmpObj.groups.lineno,
                keyword: tmpObj.groups.keyword,
                replaceKeyWord: tmpObj.groups.replaceKeyWord
            }
        }
    } else if (error_msg.search(/第\d+行/) !== -1) {
        const tmpObj = error_msg.match(/第(?<lineno>\d+)行/)
        if (tmpObj.groups) {
            return {lineno: tmpObj.groups.lineno, keyword: null, replaceKeyWord: null}
        }
    } else {
        error_msg = error_msg.replace(/^"*/, "").replace(/"*$/, "").replace(/↵/g, "\n").trim()
        let oneLineError = handleStderr(error_msg)
        const lineno = oneLineError.match(/on line (?<lineno>\d+)/)
        if (lineno.groups) {
            return {lineno: lineno.groups.lineno, keyword: null, replaceKeyWord: null}
        }
    }
}


/*
处理标准python的报错信息的接口
 */

const pythonErrorTrans = function (error_msg) {
    // error_msg = error_msg.replace(/^"*(?<data>.*?)"*$/s, "$<data>").replace(/↵/g, "\n")
    error_msg = error_msg.replace(/^"*/, "").replace(/"*$/, "").replace(/↵/g, "\n")
    error_msg = error_msg.trim("\n")
    let oneLineError = handleStderr(error_msg, 0)
    oneLineError = oneLineError.indexOf("Error") !== -1 ? oneLineError : handleJavaStderr(error_msg)
    let chineseRet = ''
    let [errorType, ...error] = oneLineError.split(": ")
    let [resMsg, errorMap] = searchBaseError(errorType)
    let [errorContent, lineData] = error.join(": ").rsplit(", ", 1)
    if (!errorContent) {
        [errorContent, lineData] = error.join(": ").rsplit(" on line", 1)
    }
    const lineNumRes = lineData.match(/\d+/i)
    chineseRet += resMsg
    chineseRet = getAllTransData(
        chineseRet,
        errorContent,
        chineseRet,
        errorMap,
        errorType
    )
    if (!chineseRet) {
        return ""
    }

    if (lineNumRes) {
        if (chineseRet.indexOf("【智能纠错】") !== -1) {
            let [firstData, otherData] = chineseRet.split("\n", 2)
            const lineNum = lineNumRes[0]
            firstData += firstData ? '在第' + lineNum + '行' : ''
            otherData = spellChineseError(otherData, lineNum)
            chineseRet = firstData + "\n" + otherData
        } else {
            chineseRet += "在第" + lineNumRes + "行"
        }
    }
    chineseRet = pythonIntelligenceResAdd(error_msg, chineseRet, lineNumRes)
    return chineseRet
}
