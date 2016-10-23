/**
 * Created by dengjie on 16/10/23.
 */
/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String}                       //密码

});

module.exports = mongoose.model('User',UserSchema);