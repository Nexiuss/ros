/*
Navicat MySQL Data Transfer

Source Server         : ros
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ros

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-06 10:07:15
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
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

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
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

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
SET FOREIGN_KEY_CHECKS=1;
