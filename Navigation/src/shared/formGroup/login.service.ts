import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
  public handleLogin(email: string | null | undefined, pwd: string | null | undefined): boolean {
    return (email == 'admin@admin.com' && pwd == 'admin')
  }
}
