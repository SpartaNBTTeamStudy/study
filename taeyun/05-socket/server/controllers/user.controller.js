const User = require("../models/user");

const userController = {};

// 유저 정보 저장 (name, token(socket.id))
userController.saveUser = async (userName, socketId) => {
  // 이미 있는 유저면인지?
  const user = await User.findOne({ name: userName });

  if (!user) {
    // 없으면 새로 생성
    let newUser = await User.create({
      name: userName,
      token: socketId,
      online: true,
    });
  }

  // 이미 있는 유저면? 연결정보 token값만 바꿔줌
  user.token = socketId;
  user.online = true;

  await user.save();
  return user;
};

module.exports = userController;
