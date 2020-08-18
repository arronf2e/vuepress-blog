---
category: SQL
tags:
  - mysql
date: 2017-05-27
title: MySQL的安装与初始化配置
vssue-title: MySQL的安装与初始化配置
# draft: true 草稿标识
# top: true 置顶文章标识
---

MacOS下 brew install mysql 全程填坑，通过谷歌和尝试，终于完美解决了

<!-- more -->

## 1. 安装Homebrew,这是Mac OSX上的软件包管理工具

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	

## 2. 使用brew安装mysql

	brew update
	
	brew install mysql
	
## 3. 等待大概5分钟（视网速而定),安装完成后显示

	==> Downloading https://homebrew.bintray.com/bottles/mysql-5.7.1
	Already downloaded: /Users/shuang1/Library/Caches/Homebrew/mysql-5.7.17.el_capitan.bottle.tar.gz
	==> Pouring mysql-5.7.17.el_capitan.bottle.tar.gz
	==> Using the sandbox
	==> Caveats
	We've installed your MySQL database without a root password. To secure it run:
    	mysql_secure_installation

	To connect run:
    	mysql -uroot

	To have launchd start mysql now and restart at login:
  		brew services start mysql
	Or, if you don't want/need a background service you can just run:
  	mysql.server start
	==> Summary
	🍺  /usr/local/Cellar/mysql/5.7.17: 14,226 files, 444.4M

## 4. 配置 , 文中的 //注释部分即为需要输入的标注

可以看到brew在安装的时候已经初始过mysql了(不用再像网上说的再执行mysql_install_db命令)，且当前没有密码于是我按照它的提示，执行命令:  

	mysql_secure_installation
	
显示如下：

	Enter password for user root:  // 这里直接回车!
	Error: Can't connect to local MySQL server through socket '/tmp/mysql.sock' (2)
	
报错发现不存在mysql.sock这个文件，因为我们没有启动mysql服务，此文件不存在，所以我们执行以下命令:

	mysql.server start
显示如下：
	
	Starting MySQL
	.. SUCCESS!
	
ok,再次执行:

	mysql_secure_installation
	
显示如下: 

	Securing the MySQL server deployment.

	Connecting to MySQL using a blank password.

	VALIDATE PASSWORD PLUGIN can be used to test passwords
	and improve security. It checks the strength of password
	and allows the users to set only those passwords which are
	secure enough. Would you like to setup VALIDATE PASSWORD plugin?

	Press y|Y for Yes, any other key for No:  // 这里不要选择yes，选yes的话密码长度就必须要设置为8位以上
	Please set the password for root here.

	New password:  // 这里输入新密码，比如我输入 root

	Re-enter new password:  // 再次输入密码 root
	By default, a MySQL installation has an anonymous user,
	allowing anyone to log into MySQL without having to have
	a user account created for them. This is intended only for
	testing, and to make the installation go a bit smoother.
	You should remove them before moving into a production
	environment.
	Remove anonymous users? (Press y|Y for Yes, any other key for No) : // 移除不用密码的那个账户 Y
	Success.
	Normally, root should only be allowed to connect from
	'localhost'. This ensures that someone cannot guess at
	the root password from the network.
	Disallow root login remotely? (Press y|Y for Yes, any other key for No) : // 禁止root远程登录 No

 	... skipping.
	By default, MySQL comes with a database named 'test' that
	anyone can access. This is also intended only for testing,
	and should be removed before moving into a production
	environment.


	Remove test database and access to it? (Press y|Y for Yes, any other key for No) : // 删除测试数据库  yes
 	- Dropping test database...
	Success.

 	- Removing privileges on test database...
	Success.

	Reloading the privilege tables will ensure that all changes
	made so far will take effect immediately.

	Reload privilege tables now? (Press y|Y for Yes, any other key for No) : // 重新加载权限表 yes
	Success.

	All done!
	
## 5. 进入mysql

	mysql -u root -p
	Enter password: root
	
OK!