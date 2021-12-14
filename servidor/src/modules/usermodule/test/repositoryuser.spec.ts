import mongoose from "mongoose";
import { createModel } from "../model/UserModel";
import { UserRepository } from "../repositories/UserRepository";
const newUser = {
    name: "Test",
    email: "test@gmail.com",
    password: "123456",
}
beforeAll(() => {
    mongoose.connect("mongodb://admin:admin123@0.0.0.0:27017/api_seminario_test");
});
afterAll(() => {
    mongoose.disconnect();
});
describe("Crud Operators of UserReposiroty Class", () => {
    test("Should be create and User", async () => {
        const userRepo = new UserRepository(createModel(mongoose));
        const expected = await userRepo.create(newUser);
        expect(expected.name).toBe(newUser.name);
    });
});