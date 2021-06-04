import {UserService} from '../src/user.service';

describe("User service tests" ,() => {
    let userService:UserService;

    beforeEach(() => {
        userService = new UserService();
    });

    it("should be defined", () => {
        expect(userService.getUsers()).toBeDefined();
    });

    it("should return  data", () => {
        expect(userService.getUsers()).toContain({'name':'admin'});
    });

})