const multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "uploads/images");
  },

  filename: function (_, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e4);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
