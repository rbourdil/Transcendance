import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	login: string;

	@IsNotEmpty()
	nickname: string;

	@IsUrl()
	avatarURL: string;
}