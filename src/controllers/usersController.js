const userRepository = require('../repositories/userRepository')

// Controller function to handle GET request for fetching user information
exports.getUsers = async(req, res) => {
  try {
    const users = await userRepository.getUsers();
    res.status(200).json({
      status: 'success',
      message: "Users retrieved successfully",
      data: users,
      error: null
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      data: {},
      error: {
          code: 'INTERNAL_SERVER_ERROR',
          details: error.message
      }
  });
  }
}

// Controller function to handle PUT request for updating user information
exports.updateUserById = async (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;

  // Tentukan atribut yang dapat diubah
  const allowedAttributes = ['name', 'email'];

  // Buat objek data yang akan diperbarui berdasarkan atribut yang diizinkan
  const updatedData = {};
  allowedAttributes.forEach(attr => {
    if (userData[attr] !== undefined) {
      updatedData[attr] = userData[attr];
    }
  });

  try {
    const updatedUser = await userRepository.updateUserById(userId, updatedData);
    res.status(200).json({ 
      status: "success",
      message: "User information updated successfully", 
      data: updatedUser,
      error: null
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Server error',
      data: {},
      error: {
          code: 'INTERNAL_SERVER_ERROR',
          details: error.message
      }
  });
  }
};
