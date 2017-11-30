/*
Navicat MySQL Data Transfer

Source Server         : ros
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ros

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-30 15:20:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for foods
-- ----------------------------
DROP TABLE IF EXISTS `foods`;
CREATE TABLE `foods` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(255) NOT NULL COMMENT '菜品图片地址',
  `price` decimal(10,2) NOT NULL COMMENT '售价',
  `food_name` varchar(255) NOT NULL COMMENT '菜品名称',
  `type` varchar(255) NOT NULL COMMENT '菜品类型',
  `sales` int(11) NOT NULL COMMENT '销量',
  `description` text NOT NULL COMMENT '菜品描述',
  `attr` varchar(255) NOT NULL COMMENT '属性',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of foods
-- ----------------------------
INSERT INTO `foods` VALUES ('1', 'http://localhost:8082/public/imgs/doujiao.jpg', '19.00', '煸豆', 'hot', '111', '紫菜煸豆，极富营养价值的一道时令家常菜', '蔬菜');
INSERT INTO `foods` VALUES ('2', 'http://localhost:8082/public/imgs/duojiao.jpg', '15.00', '剁椒芋仔', 'hot', '180', '剁椒芋仔，美味而富有营养，芋仔富含丰富的矿物质与维生素', '蔬菜');
INSERT INTO `foods` VALUES ('3', 'http://localhost:8082/public/imgs/fish.jpg', '22.00', '金枪鱼刺身', 'seafood', '200', '海鲜刺身，人间美味', '海鲜');
INSERT INTO `foods` VALUES ('9', 'http://localhost:8082/public/imgs/mue.jpg', '18.00', '土豆丝', 'hot', '1800', '这是土豆丝', '蔬菜');
INSERT INTO `foods` VALUES ('5', 'http://localhost:8082/public/imgs/la.jpg', '10.00', '果粒橙', 'drink', '1100', '这是果粒橙', '蔬菜');
INSERT INTO `foods` VALUES ('6', 'http://localhost:8082/public/imgs/kui.jpg', '10.00', '凉拌黄瓜', 'jardiniere', '100', '这是一份凉拌黄瓜', '蔬菜');
INSERT INTO `foods` VALUES ('7', 'http://localhost:8082/public/imgs/rou.jpg', '18.00', '紫菜鸡蛋汤', 'soup', '1890', '这是一份紫菜鸡蛋汤', '蔬菜');
INSERT INTO `foods` VALUES ('8', 'http://localhost:8082/public/imgs/youyu.jpg', '188.00', '豪华套餐1', 'combo', '100', '这是豪华套餐', '蔬菜');
INSERT INTO `foods` VALUES ('10', 'http://localhost:8082/public/imgs/duojiao.jpg', '58.00', '炒鸡蛋', 'hot', '300', '这是一盘炒鸡蛋', '蔬菜');
INSERT INTO `foods` VALUES ('11', 'http://localhost:8082/public/imgs/kui.jpg', '288.00', '豪华套餐2', 'combo', '20', '6人豪华套餐', '海鲜');
INSERT INTO `foods` VALUES ('12', 'http://localhost:8082/public/imgs/xcr.jpg', '388.00', '豪华套餐3', 'combo', '210', '8人豪华套餐', '海鲜');
INSERT INTO `foods` VALUES ('13', 'http://localhost:8082/public/imgs/xcr.jpg', '55.00', '鱿鱼', 'seafood', '210', '海鲜', '海鲜');
INSERT INTO `foods` VALUES ('14', 'http://localhost:8082/public/imgs/kui.jpg', '1234.00', '1234', 'soup', '123', '', '蔬菜');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `t_id` varchar(11) NOT NULL COMMENT '桌子编号',
  `cr_data` text NOT NULL COMMENT '菜品集合',
  `status` varchar(11) NOT NULL COMMENT '订单的状态',
  `cr_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '订单建立的时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('9', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('11', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('12', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('21', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('13', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('14', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('18', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('17', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('15', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('22', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:57:45');
INSERT INTO `order` VALUES ('16', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('19', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');
INSERT INTO `order` VALUES ('20', '1', '[{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19},{\"id\":1,\"img_url\":\"http://localhost:8082/public/imgs/doujiao.jpg\",\"food_name\":\"煸豆\",\"price\":19}]', 'false', '2017-11-07 19:50:22');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_name` varchar(10) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `status` varchar(10) NOT NULL COMMENT '权限',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('7', 'undefined', '66', '3');
INSERT INTO `user` VALUES ('2', 'liuliu', '1234', '2');
INSERT INTO `user` VALUES ('10', '66', '66', '3');
INSERT INTO `user` VALUES ('9', '333', '1123', '1');
INSERT INTO `user` VALUES ('11', '1234', '66', '2');
INSERT INTO `user` VALUES ('12', '344', '555', '1');
SET FOREIGN_KEY_CHECKS=1;
