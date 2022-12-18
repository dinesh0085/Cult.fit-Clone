"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const changePasswordController_1 = __importDefault(require("../../controller/user/changePasswordController"));
const loginController_1 = __importDefault(require("../../controller/user/loginController"));
const router = express_1.default.Router();
const userPasswordReset_1 = __importDefault(require("../../controller/user/userPasswordReset"));
const userMiddleware_1 = __importDefault(require("../../middlewares/user/userMiddleware"));
const signupController_1 = __importDefault(require("./../../controller/user/signupController"));
// Middleware for protected routes
router.use("/changepassword", userMiddleware_1.default);
router.use("/loggedUser", userMiddleware_1.default);
// Public Routes
router.get("/", (req, res) => {
    res.send("User Routes Working");
});
router.post("/register", signupController_1.default.userRegistration);
router.post("/login", loginController_1.default.userLogin);
router.post("/userPasswordReset", userPasswordReset_1.default.sendUserPasswordResetEmail);
router.post("/resetPassword/:id/:token", userPasswordReset_1.default.userPasswordReset);
// Protected Routes
router.post("/changePassword", changePasswordController_1.default.changeUserPassword);
router.get("/loggedUser", loginController_1.default.loggedUser);
exports.default = router;
