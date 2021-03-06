//========================================================
//         ______________________________________
// ________|                                      |_______
// \       | SevenzJS :                           |      /
//  \      |   A light weighted Node.JS framework |     /
//  /      |______________________________________|     \
// /__________)                                (_________\
//
// @author  : xadillax
//
// @file    : index.js
// @create  : 13-3-26 下午8:32
//
// @brief   :
//   Demo首页。
//========================================================
exports.action = function(action) {
    var self = { };
    var helper = action;

    /**
     * empty路由
     */
    self["_empty"] = function() {
        helper.write("你访问了未定义的路由：" + helper.pathinfo[1]);
    }

    /**
     * demo首页
     */
    self["index"] = function() {
        helper.write("Hello SevenzJS!");
    }

    /**
     * 查看tables
     */
    self["showtables"] = function() {
        if(!helper.mysql.connect()) return;

        helper.write("<pre>");
        var tables = helper.mysql.query("SHOW TABLES;");
        for(var i = 0; i < tables.length; i++)
        {
            helper.write(JSON.stringify(tables[i]));
            helper.write("\n");
        }
        helper.write("</pre>");
    }

    return self;
};
