const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,      
        email: true,      
        hobbies: true,
        experiences: true,
        duration: true,
        courses: true,
        contact: true,
        fundingFeeds: true,
        businesses: true,
    }
  });
    
    return users;
  } catch (error) {
    throw error;
  }
};

const updateUserById = async (userId, userData) => {
  try {
    const updatedUser = await prisma.user.updateMany({
      where: { id: userId },
      data: userData,
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  updateUserById,
};
