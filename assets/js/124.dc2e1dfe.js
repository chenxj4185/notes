(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{590:function(t,s,a){"use strict";a.r(s);var n=a(29),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第七章-对文件的输入输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第七章-对文件的输入输出"}},[t._v("#")]),t._v(" 第七章 对文件的输入输出")]),t._v(" "),a("h2",{attrs:{id:"_1-c文件的有关基本知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-c文件的有关基本知识"}},[t._v("#")]),t._v(" 1. C文件的有关基本知识")]),t._v(" "),a("p",[a("strong",[t._v("什么是文件")])]),t._v(" "),a("p",[t._v("文件有不同的类型,在程序设计中,主要用到两种文件:")]),t._v(" "),a("p",[t._v("(1)程序文件。包括源程序文件("),a("code",[t._v("后缀为.c")]),t._v(")、目标文件("),a("code",[t._v("后缀为.obj")]),t._v(")、可执行文件("),a("code",[t._v("后缀为.exe")]),t._v(")等。这种文件的内容是程序代码。")]),t._v(" "),a("p",[t._v("(2)数据文件。文件的内容不是程序，而是供程序运行时读写的数据，如在程序运行过程中输出到磁盘（或其他外部设备）的数据，或在程序运行过程中供读人的数据。如一批学生的成绩数据、货物交易的数据等。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("文件(file)是程序设计中一个重要的概念。所谓“文件”一般指存储在外部介质上数据的集合。一批数据是以文件的形式存放在外部介质(如磁盘)上的。")])]),t._v(" "),a("li",[a("p",[t._v("输人输出是数据传送的过程，数据如流水一样从一处流向另一处，因此常将输人输出形象地称为流（stream） ,即"),a("strong",[t._v("数据流")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("C语言把文件看作一个字符（或字节）的序列，即由一个一个字符（或字节）的数据顺序组成。一个输入输出流就是一个字符流或字节（内容为二进制数据）流。")])]),t._v(" "),a("li",[a("p",[t._v("C的"),a("strong",[t._v("数据文件")]),t._v("由一连串的字符（或字节）组成，而不考虑行的界限，两行数据间不会自动加分隔符，对文件的存取是以字符（字节）为单位的。"),a("strong",[t._v("输人输出数据流的开始和结束仅受程序控制而不受物理符号（如回车换行符）控制，"),a("strong",[t._v("这就增加了处理的灵活性。这种文件称为")]),t._v("流式文件")]),t._v("。")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("文件名")])]),t._v(" "),a("p",[t._v("一个文件要有一个唯一的文件标识，以便用户识别和引用。")]),t._v(" "),a("p",[t._v("文件标识包括3部分: (1)文件路径; (2)文件名主干; (3)文件后缀。")]),t._v(" "),a("p",[t._v("文件路径表示文件在外部存储设备中的位置。如:")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[t._v("D:\\CC\\temp\\filel.dat\n---------- ----- ------\n\t↑\t\t ↑\t\t↑\n文件路径  文件名主干 文件后缀\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("表示"),a("code",[t._v("filel.dat")]),t._v("文件存放在"),a("code",[t._v("D")]),t._v("盘中的"),a("code",[t._v("CC")]),t._v("目录下的"),a("code",[t._v("temp")]),t._v("子目录下面。")]),t._v(" "),a("p",[t._v("文件名主干的命名规则遵循标识符的命名规则。")]),t._v(" "),a("p",[t._v("后缀 用来表示文件的性质，如：")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[t._v("doc\t\t(Word生成的文件)\ntxt\t\t(文本文件)\ndat\t\t(数据文件)\nc\t\t(C语 言源程序文件)\ncpp \t(C++源程序文件)\nfor\t\t(FORTRAN语言源程序文件)\npas\t\t(Pascal语 言源程序文件)\nobj\t\t(目标文件)\nexe\t\t(可执行文件)\nppt\t\t(电子幻灯文件)\nbmp\t\t(图形文件)\n...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("文件的分类")])]),t._v(" "),a("p",[t._v("根据数据的组织形式，数据文件可分为"),a("strong",[t._v("ASCII文件")]),t._v("和"),a("strong",[t._v("二进制文件")]),t._v("。数据在内存中是以二进制形式存储的，如果不加转换地输出到外存，就是二进制文件，可以认为它就是存储在内存的数据的映像，所以也称之为映像文件("),a("code",[t._v("imagefile")]),t._v(")。如果要求在外存上以ASCII代码形式存储,则需要在存储前进行转换。ASCII文件又称文本文件("),a("code",[t._v("text file")]),t._v("),每一个字节存放一个字符的ASCII代码。")]),t._v(" "),a("p",[a("strong",[t._v("一个数据在磁盘上怎样存储呢?")])]),t._v(" "),a("p",[a("strong",[t._v("字符一律以ASCII形式存储，数值型数据既可以用ASCII形式存储，也可以用二进制形式存储。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210518210127.png",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("文件缓冲区")])]),t._v(" "),a("p",[t._v("ANSI C标准采用“缓冲文件系统”处理数据文件，所谓缓冲文件系统是指系统自动地在内存区为程序中每一个正在使用的文件开辟一个文件缓冲区。从内存向磁盘输出数据必须先送到内存中的缓冲区，装满缓冲区后才一起送到磁盘去。如果从磁盘向计算机读人数据，则一次从磁盘文件将一批数据输人到内存缓冲区(充满缓冲区)，然后再从缓冲区逐个地将数据送到程序数据区(给程序变量)，见图10.2。这样做是为了节省存取时间，提高效率，缓冲区的大小由各个具体的C编译系统确定。")]),t._v(" "),a("p",[t._v("说明：每一个文件在内存中只有一个缓冲区，在向文件输出数据时，它就作为输出缓冲区,在从文件输入数据时，它就作为输入缓冲区。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210519085511.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("文件类型指针")])]),t._v(" "),a("p",[t._v("缓冲文件系统中，关键的概念是“文件类型指针”，简称“文件指针”。每个被使用的文件都在内存中开辟一个相应的文件信息区，用来存放文件的有关信息(如文件的名字、文件状态及文件当前位置等)。这些信息是保存在一个结构体变量中的。该结构体类型是由系统声明的，取名为FILE。例如有一种C编译环境提供的"),a("code",[t._v("stdio.h")]),t._v("头文仵中有以下的文件类型声明：")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓冲区“满”或“空”的程度")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件状态标志")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" fd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件描述符")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" hold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如缓冲区无内容不读取字符")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" bsize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓冲区的大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//数据缓冲区的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件位置标记指针当前的指向")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" istemp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//临时文件指示器")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用于有效性检查")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("FILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("不同的C编译系统的FILE类型包含的内容不完全相同，但大同小异。对以上结构体中的成员及其含义可不深究，只须知道其中存放文件的有关信息即可。")]),t._v(" "),a("p",[t._v("定义一个指向文件型数据的指针变量：")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FILE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("定义"),a("code",[t._v("fp")]),t._v("是一个指向FILE类型数据的指针变量。可以使"),a("code",[t._v("fp")]),t._v("指向某一个文件的文件信息区(是一个结构体变量)，通过该文件信息区中的信息就能够访问该文件。也就是说，通过文件指针变量能够找到与它关联的文件。如果有n个文件，应设n个指针变量，分别指向n个FILE类型变量，以实现对n个文件的访问，见图10. 3。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wfmiss/pictures/C_language/20210519091314.png",alt:""}})]),t._v(" "),a("p",[t._v("为方便起见，通常将这种指向文件信息区的指针变量简称为"),a("strong",[t._v("指向文件的指针变量")]),t._v("。")]),t._v(" "),a("p",[t._v("注意：指向文件的指针变量并不是指向外部介质上的数据文件的开头，而是指向内存中的文件信息区的开头。")]),t._v(" "),a("h2",{attrs:{id:"_2-打开与关闭文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开与关闭文件"}},[t._v("#")]),t._v(" 2. 打开与关闭文件")]),t._v(" "),a("p",[t._v("实际上，所谓 “打开” 是指为文件建立相应的信息区（用来存放有关文件的信息）和文件缓冲区（用来暂时存放输入输出的数据）。")]),t._v(" "),a("p",[t._v("在编写程序时，在打开文件的同时，一般都指定一个指针变量指向该文件，也就是建立起指针变量与文件之间的联系，这样，就可以通过该指针变量对文件进行读写了。所谓“关闭”是指撤销文件信息区和文件缓冲区，使文件指针变量不再指向该文件，显然就无法进行对文件的读写了。")]),t._v(" "),a("p",[a("strong",[t._v("用"),a("code",[t._v("fopen")]),t._v("函数打开数据文件")])]),t._v(" "),a("p",[a("code",[t._v("ANSIC")]),t._v("规定了用标准输人输出函数"),a("code",[t._v("fopen")]),t._v("来实现打开文件。")]),t._v(" "),a("p",[a("code",[t._v("fopen")]),t._v("函数的调用方式为：")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文件名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("使用文件方式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("例如:")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"al"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("strong",[t._v("表示要打开名字为"),a("code",[t._v("al")]),t._v("的文件，使用文件方式为 “读入”(r代表read，即读人)")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("fopen")]),t._v(" 函数的返回值是指向"),a("code",[t._v("al")]),t._v("文件的指针(即"),a("code",[t._v("al")]),t._v("文件信息区的起始地址)。")]),t._v(" "),a("p",[t._v("通常将"),a("code",[t._v("fopen")]),t._v("函数的返回值赋给一个指向文件的指针变量。如：")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" fp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义一个指向文件的指针变量fp")]),t._v("\nfp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"al"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将fopen函数的返回值赋给指针变量fp")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("这样"),a("code",[t._v("fp")]),t._v("就和文件"),a("code",[t._v("al")]),t._v("相联系了,或者说，"),a("code",[t._v("fp")]),t._v("指向了"),a("code",[t._v("al")]),t._v("文件。可以看出，在打开一个文件时，通知编译系统以下3个信息：")]),t._v(" "),a("p",[t._v("①需要打开文件的名字，也就是准备访问的文件的名字;")]),t._v(" "),a("p",[t._v("②使用文件的方式(“读”还是“写”等);")]),t._v(" "),a("p",[t._v("③让哪一个指针变量指向被打开的文件。")]),t._v(" "),a("p",[a("strong",[t._v("表10. 1 使用文件方式")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("文件使用方式")]),t._v(" "),a("th",[t._v("含义")]),t._v(" "),a("th",[t._v("如果指定的文件不存在")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("r（只读）")]),t._v(" "),a("td",[t._v("为了输入数据，打开一个已存在的文本文件")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v("w（只写）")]),t._v(" "),a("td",[t._v("为了输出数据，打开一个文本文件")]),t._v(" "),a("td",[t._v("建立新文件")])]),t._v(" "),a("tr",[a("td",[t._v("a（追加）")]),t._v(" "),a("td",[t._v("向文本文件尾添加数据")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v("rb（只读）")]),t._v(" "),a("td",[t._v("为了输人数据，打开一个二进制文件")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v("wb（只写）")]),t._v(" "),a("td",[t._v("为了输出数据，打开一个二进制文件")]),t._v(" "),a("td",[t._v("建立新文件")])]),t._v(" "),a("tr",[a("td",[t._v("ab（追加）")]),t._v(" "),a("td",[t._v("向二进制文件尾添加数据")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v('"r+"（读写）')]),t._v(" "),a("td",[t._v("为了读和写，打开一个文本文件")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v('"w+"（读写）')]),t._v(" "),a("td",[t._v("为了读和写，建立一个新的文本文件")]),t._v(" "),a("td",[t._v("建立新文件")])]),t._v(" "),a("tr",[a("td",[t._v('"a+"（读写）')]),t._v(" "),a("td",[t._v("为了读和写，打开一个文本文件")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v('"rb+"（读写）')]),t._v(" "),a("td",[t._v("为了读和写，打开一个二进制文件")]),t._v(" "),a("td",[t._v("出错")])]),t._v(" "),a("tr",[a("td",[t._v('"wb+"（读写）')]),t._v(" "),a("td",[t._v("为了读和写，建立一个新的二进制文件")]),t._v(" "),a("td",[t._v("建立新文件")])]),t._v(" "),a("tr",[a("td",[t._v('"ab+"（读写）')]),t._v(" "),a("td",[t._v("为读写打开一个二进制文件")]),t._v(" "),a("td",[t._v("出错")])])])]),t._v(" "),a("p",[t._v("(1)用 r 方式打开的文件只能用于向计算机输入而不能用作向该文件输出数据，而且该文件应该已经存在，并存有数据，这样程序才能从文件中读数据。不能用 r 方式打开一个并不存在的文件，否则出错。")]),t._v(" "),a("p",[t._v("(2)用 w 方式打开的文件只能用于向该文件写数据（即输出文件），而不能用来向计算机输入。如果原来不存在该文件，则在打开文件前新建立一个以指定的名字命名的文件。如果原来已存在一个以该文件名命名的文件，则在打开文件前先将该文件删去，然后重新建立一个新文件。")]),t._v(" "),a("p",[t._v("(3)如果希望向文件末尾添加新的数据（不希望删除原有数据），则应该用a方式打开。但此时应保证该文件已存在；否则将得到出错信息。打开文件时，文件读写位置标记移到文件末尾。")]),t._v(" "),a("p",[t._v("(4)用“r十”、“w+”、“a+”方式打开的文件既可用来输人数据，也可用来输出数据。用 “r+” 方式时该文件应该已经存在，以便计算机从中读数据。用 “w十” 方式则新建立一个文件，先向此文件写数据，然后可以读此文件中的数据。用 “a+” 方式打开的文件，原来的文件不被删去，文件读写位置标记移到文件末尾，可以添加，也可以读。")]),t._v(" "),a("p",[t._v("(5)如果不能实现 “打开” 的任务，fopen函数将会带回一个出错信息。出错的原因可能是：用 r 方式打开一个并不存在的文件；磁盘出故障；磁盘已满无法建立新文件等。此时fopen函数将带回一个空指针值"),a("code",[t._v("NULL")]),t._v("(在"),a("code",[t._v("stdio.h")]),t._v("头文件中，"),a("code",[t._v("NULL")]),t._v("已被定义为0)。")]),t._v(" "),a("p",[t._v("常用下面的方法打开一个文件:")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cannot open this file\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("即先检查打开文件的操作有否出错，如果有错就在终端上输出cannot open this file。")]),t._v(" "),a("p",[a("code",[t._v("exit")]),t._v("函数的作用是关闭所有文件，终止正在执行的程序，待用户检查出错误，修改后重新运行。")]),t._v(" "),a("p",[t._v("(7)在表10.1中，有12种文件使用方式，其中有6种是在第一个字母后面加了字母b 的(如rb,wb,ab,rb+ ,wb+ ,ab+)，b表示二进制方式。其实，带b和不带b只有一个区别，即对换行的处理。由于在C语言用一个"),a("code",[t._v("'\\n'")]),t._v("即可实现换行，而在Windows系统中为实现换行必须要用“回车”和“换行”两个字符，即"),a("code",[t._v("'\\r'")]),t._v("和"),a("code",[t._v("'\\n'")]),t._v("。因此,如果使用的是文本文件并且用w方式打开，在向文件输出时，遇到换行符"),a("code",[t._v("'\\n'")]),t._v("时，系统就把它转换为"),a("code",[t._v("'\\r'")]),t._v("和'"),a("code",[t._v("'\\n'")]),t._v("两个字符，否则在Windows系统中查看文件时，各行连成一片，无法阅读。同样，如果有文本文件且用r方式打开，从文件读人时，遇到"),a("code",[t._v("'\\r'")]),t._v("和"),a("code",[t._v("'\\n'")]),t._v("两个连续的字符，就把它们转换为"),a("code",[t._v("'\\n'")]),t._v("一个字符。如果使用的是二进制文件，在向文件读写时，不需要这种转换。加b表示使用的是二进制文件，系统就不进行转换。")]),t._v(" "),a("p",[t._v("(8)如果用wb的文件使用方式，并不意味着在文件输出时把内存中按ASCII形式保存的数据自动转换成二进制形式存储。输出的数据形式是由程序中采用什么读写语句决定的。例如，用fscanf和fprintf函数是按ASCII方式进行输人输出，而fread和fwrite函数是 按二进制进行输人输出。各种对文件的输人输出语句，详见下一节（3.顺序读写数据文件）。")]),t._v(" "),a("p",[t._v("在打开一个输出文件时，是选w还是wb方式，完全根据需要，如果需要对回车符进行转换的，就用w，如果不需要转换的，就用wb。带b只是通知编译系统：不必进行回车符的转换。如果是文本文件（例如一篇文章），显然需要转换，应该用w方式。如果是用二进制形式保存的一批数据，并不准备供人阅读，只是为了保存数据，就不必进行上述转换。可以用wb方式。一般情况下，带b的用于二进制文件，常称为二进制方式，不带b的用于文本文件，常称为文本方式，从理论上说，文本文件也可以wb方式打开，但无必要。")]),t._v(" "),a("p",[t._v("(9)程序中可以使用3个标准的流文件——标准输入流、标准输出流和标准出错输出流。系统已对这3个文件指定了与终端的对应关系。标准输人流是从终端的输人，标准输出流是向终端的输出，标准出错输出流是当程序出错时将出错信息发送到终端。")]),t._v(" "),a("p",[t._v("程序开始运行时系统自动打开这3个标准流文件。因此，程序编写者不需要在程序中用fopen函数打开它们。所以以前我们用到的从终端输人或输出到终端都不需要打开终端 文件。系统定义了3个文件指针变量stdin，stdout和stderr,分别指向标准输人流、标准输出流和标准出错输出流,可以通过这3个指针变量对以上3种流进行操作，它们都以终端作为输人输出对象。例如程序中指定要从stdin所指的文件输人数据，就是指从终端键盘输人数据。")]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("用fcolse函数关闭数据文件")])]),t._v(" "),a("p",[t._v("在使用完一个文件后应该关闭它，以防止它再被误用。“关闭”就是撤销文件信息区和文件缓冲区，使文件指针变量不再指向该文件，也就是文件指针变量与文件‘‘脱钩”，此后不能再通过该指针对原来与其相联系的文件进行读写操作，除非再次打开，使该指针变量重新指向该文件。")]),t._v(" "),a("p",[t._v("关闭文件用fclose函数。fclose函数调用的一般形式为：")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fclose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文件指针"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果不关闭文件就结束程序运行将会丢失数据。因为，在向文件写数据时，是先将数据输出到缓冲区，待缓冲区充满后才正式输出给文件。如果当数据未充满缓冲区时程序结束运行，就有可能使缓冲区中的数据丢失。用fclose 函数关闭文件时，先把缓冲区中的数据输出到磁盘文件，然后才撤销文件信息区。有的编译系统在程序结束前会自动先将缓冲区中的数据写到文件，从而避免了这个问题，但还是应当养成在程序终止之前关闭所有文件的习惯。")]),t._v(" "),a("p",[t._v("fclose函数也带回一个值，当成功地执行了关闭操作，则返回值为0；否则返回EOF(-1)。")]),t._v(" "),a("h2",{attrs:{id:"_3-顺序读写数据文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-顺序读写数据文件"}},[t._v("#")]),t._v(" 3. 顺序读写数据文件")]),t._v(" "),a("p",[t._v("在顺序写时，先写入的数据存放在文件的中前面的位置，后写入的数据存放在文件中后面的数据。")]),t._v(" "),a("p",[t._v("在顺序读时，先读文件中最前面的数据，后读文件中后面的数据。")]),t._v(" "),a("p",[t._v("顺序读写需要用函数库来实现。使用前需要导入"),a("code",[t._v("#include<stdib.h>")])]),t._v(" "),a("p",[a("strong",[t._v("怎么向文件读写字符")])]),t._v(" "),a("p",[t._v("读写一个字符的函数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("函数名")]),t._v(" "),a("th",[t._v("调用形式")]),t._v(" "),a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("fgtc")])]),t._v(" "),a("td",[a("code",[t._v("fgetc(fp)")])]),t._v(" "),a("td",[t._v("从"),a("code",[t._v("fp")]),t._v("指向的文件中读入一个字符")]),t._v(" "),a("td",[t._v("读成功，带回所读的字符，失败则返回文件结束标志EOF（即-1）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("fputc")])]),t._v(" "),a("td",[a("code",[t._v("fputc(ch,fp)")])]),t._v(" "),a("td",[t._v("把字符ch写文件指针变量"),a("code",[t._v("fp")]),t._v("所指向的文件中")]),t._v(" "),a("td",[t._v("输入成功，返回值就是输出的字符；输出失败，则返回EOF（即-1）")])])])]),t._v(" "),a("p",[t._v("说明：fgetc 的第1个字母f代表文件（file），中间的get表示“获取”，最后一个字母c表示字符（character），fgetc的含义很清楚：从文件读取一个字符。fputc也类似。")]),t._v(" "),a("p",[a("strong",[t._v("此节未完，将于2022年6月后继续更新……")])])])}),[],!1,null,null,null);s.default=v.exports}}]);