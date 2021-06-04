
export class UserService {
    constructor() {}

    public getUsers(): any[] {
        return  [
            {
                "name" : "admin"
            }
        ];
    }

    public login(username:string, password:string) : boolean {
        return false;
    }
}