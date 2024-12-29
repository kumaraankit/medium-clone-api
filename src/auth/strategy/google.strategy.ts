import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";
import { UsersService } from "src/users/users.service";

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly usersService: UsersService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
        })
    }
    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: VerifyCallback,
    ): Promise<any> {
        const { name, emails, photos, id } = profile;
        // const user = {
        //     email: emails[0].value,
        //     firstName: name.givenName,
        //     lastName: name.familyName,
        //     picture: photos[0].value,
        //     accessToken,
        // };
        const user = await this.usersService.findOrCreate(id, name, emails[0].value);

        done(null, user);
    }
}